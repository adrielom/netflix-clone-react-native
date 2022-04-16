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
import { Header, IconSet, N_Netflix } from '../../components/TrendingShow/style'
import { Feather } from '@expo/vector-icons';
import ProfileIcon from '../../components/ProfileIcon'
import Animated, { useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated'

const Netflix = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2015_N_logo.svg/1200px-Netflix_2015_N_logo.png';

export default function Home() {

  const [movieLists, setMovieLists] = useState<Category[]>([])
  const [trending, setTrending] = useState<Movie | undefined>()
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  })
  const [showTrending, setShowTrending] = useState(false)
  const scrollY = useSharedValue(0);
  const [trendingCategories, setTrendingCategories] = useState([])

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
  
  const scrollHandler =  useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y
    }
  })

  function getTrendingCategories (trendingGenres: Number[] | undefined) {
    let allGenres = ''
    trendingGenres?.forEach((genre, index) => {
      let cat =  movieLists.find(el => el.id === genre)
      if (index < trendingGenres.length - 1)
        allGenres += cat?.name + ' ∙ ';
      else 
        allGenres += cat?.name
    }) 
    return allGenres
  }

  const backgroundColorChanger = useAnimatedStyle(() => {
    return {
      backgroundColor: `rgba(255, 255, 255, ${scrollY.value * 0.0028})`
    }
  })
  
  const {profile, setProfile} = useProfile();

  if (!fontsLoaded)
      return <AppLoading />
  else {
    return (
      <WrapperView>
      <SafeAreaComponent>
      <Header as={Animated.View} style={[backgroundColorChanger]}>
          <N_Netflix source={{uri: Netflix}}/>
          <IconSet>
              <Feather name="search" size={24} color="white" />
              <Feather name="sliders" style={{marginHorizontal: 13}} size={24} color="white" />                
              <ProfileIcon size={25} showName={false} source={profile.source} userName={profile.name} onPress={() => {}}/>
          </IconSet>
      </Header>
        <Animated.ScrollView
          onScroll={scrollHandler}
        >
        {
          showTrending ? (
              <TrendingShow showCoverBillboard={`${trending?.poster_path}`} categories={getTrendingCategories(trending?.genre_ids)} />
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
        </Animated.ScrollView>
      </SafeAreaComponent>
    </WrapperView>
    )
  }
}