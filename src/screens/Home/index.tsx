import React, { useEffect, useState } from 'react'
import { WrapperView } from '../ProfileChooser/styles'
import SafeAreaComponent from '../../components/SafeAreaComponent'
import Title from '../../components/TitleWhite'
import { useProfile } from '../../contexts/profile'
import { getGenres, getLatest, getTopRated, getTrendingMovies } from '../../services/api'
import { Category, Genre, LatestMovie, Movie, TopRated } from '../../types'
import themes from '../../themes'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import MovieCard from '../../components/MovieCard'
import MovieRow from '../../components/MovieRow'
import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

export default function Home() {

  const [movieLists, setMovieLists] = useState<Category[]>([])
  const [latestMovie, setLatestMovie] = useState<LatestMovie>();
  const [trending, setTrending] = useState<Movie>()
  const [trendingData, setTrendingData] = useState<Movie[]>([])
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  })

  useEffect(() => {
    const getLists = async () => {
      const genreData = await getGenres("movie") as Genre[];
      const trendingResult = await getTrendingMovies() as Array<Movie>;
      setTrendingData(trendingResult);
      setMovieLists([{name: "All Trending", id: Date.now()}, ...genreData]);
      const latestData = await getLatest("movie") as LatestMovie;
      setLatestMovie(latestData);
      const trendingMovie = trendingData[Math.floor(Math.random() * trendingData.length)] as Movie;
      setTrending(trendingMovie);
    }
    getLists();
  }, [])
  

  const {profile, setProfile} = useProfile();

  return (
    <WrapperView>
      <SafeAreaComponent>
        <Title>hey, {profile}</Title>
        <ScrollView>
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