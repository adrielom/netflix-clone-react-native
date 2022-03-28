import {View, ViewProps } from 'react-native'
import React, {useState, useEffect} from 'react'
import MovieCard from '../MovieCard'
import { Movie } from '../../types'
import { getAllByGenre, getTrendingMovies } from '../../services/api'
import { MovieRowStyle } from './style'

type Props = ViewProps & {
    category: number
}

export default function MovieRow({category}: Props) {

    const [movieList, setMovieList] = useState<Movie[]>([])

    useEffect( () => {
        const getList =  async () => {
           const data = await getAllByGenre("movie", category, 1);
           setMovieList(data)
        }
        getList()
    }, [])
    

  return (
    <MovieRowStyle>
        {
            movieList.map(movie => (
                <MovieCard key={movie.id} imageSource={{uri: movie.poster_path}}/>
            ))
        }
    </MovieRowStyle>
  )
}
