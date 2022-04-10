import { ActivityIndicator, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { WrapperView } from '../ProfileChooser/styles'
import SafeAreaComponent from '../../components/SafeAreaComponent'
import Title from '../../components/TitleWhite'
import { useProfile } from '../../contexts/profile'
import { getGenres, getLatest, getTrendingMovies } from '../../services/api'
import { Category, Genre, LatestMovie, Movie } from '../../types'
import themes from '../../themes'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import MovieRow from '../../components/MovieRow'
import { ScrollView } from 'react-native-gesture-handler'
import TrendingShow from '../../components/TrendingShow'
import AppLoading from 'expo-app-loading'

export default function Home() {

  const [movieLists, setMovieLists] = useState<Category[]>([])
  const [trending, setTrending] = useState<Movie | undefined>()
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  })
  const [showTrending, setShowTrending] = useState(false)

  useEffect(() => {
    const getLists = async () => {
      const trendingResult = await getTrendingMovies();
      let trendingMovie = trendingResult[Math.floor(Math.random() * trendingResult.length)];
      setTrending(trendingMovie);
    }
    getLists();
  }, [])

  useEffect(() => {
    const getLists = async () => {
      const genreData = await getGenres("movie") as Genre[];
      setMovieLists([...genreData]);
    }
    getLists();
  }, [])


  useEffect(() => {
    if (trending !== undefined) {
      setShowTrending(true)
    }
  }, [trending])
  
  

  const {profile, setProfile} = useProfile();

  if (!fontsLoaded)
      return <AppLoading />
  else {
    return (
      <WrapperView>
      <SafeAreaComponent>
        <ScrollView>
        {
          showTrending ? (
              <TrendingShow showCoverBillboard={`${trending?.poster_path}`} categories={'blabla'} profileIconSource={profile.source} userName={profile.name}/>
          ) : (
            <ActivityIndicator style={{marginVertical: 10}} size={50} color={themes.COLORS.RED}/>
          )
        }
        {
          movieLists.map(genre => (
              <View key={genre.id}>
                <Title 
                  style={{
                  marginHorizontal: 10, 
                  marginBottom: 5, 
                  color: themes.COLORS.WHITE, 
                  fontSize: RFPercentage(3), 
                  fontFamily: 'Inter_700Bold', 
                  fontWeight: '800'}} key={genre.id}
                >
                  {genre.name}
                </Title>
                <MovieRow category={genre.id}/>
              </View>
          ))
        }
        </ScrollView>
      </SafeAreaComponent>
    </WrapperView>
    )
  }
}