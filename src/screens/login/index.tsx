import { View, Text, ImageBackground, TextInput, Image } from 'react-native'
import { SvgUri } from 'react-native-svg'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getTrendingMovies } from '../../services/api'
import { TOKEN } from '@env';
import { StatusBar } from 'expo-status-bar';
import { RectButton } from 'react-native-gesture-handler'
import { Movie } from '../../types'
import { BackgroundImage } from './style'

const MOVIE_ID = 'tt1877830';
const spidey = '../../assets/spidey.jpg'
const NETFLIX_LOGO = 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'


const Login = () => {
  
  const [movie, setMovie] = useState<Movie>()

  useEffect(() => {
    const photoUrl = async () => {
     try {
      const data = await getTrendingMovies() as Array<Object>;
      const movie = data[Math.floor(Math.random() * data.length)] as Movie;
      setMovie(movie)
     } catch (error) {
       console.log(error)
     }
    }
    photoUrl()
  }, [])
  

  return (
    <View>
      <BackgroundImage source={{uri: `https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}} >
        <StatusBar hidden={true}/>
        {/* <SvgUri uri={NETFLIX_LOGO}/> */}
        <TextInput placeholder='Email'/>
        <TextInput placeholder='Password'/>
        <Text>Forgot your email and password?</Text>
        <View>
          <RectButton></RectButton>
        </View>
      </BackgroundImage>
    </View>
  )
}

export default Login