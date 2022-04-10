import {FlatList, ListRenderItemInfo, ViewProps } from 'react-native'
import React, {useState, useEffect} from 'react'
import MovieCard from '../MovieCard'
import { Movie } from '../../types'
import { getAllByGenre } from '../../services/api'
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
        <FlatList
            initialNumToRender={10}
            windowSize={5}
            maxToRenderPerBatch={5}
            updateCellsBatchingPeriod={30}
            removeClippedSubviews={false}
            onEndReachedThreshold={0.1}
            horizontal={true}
            contentContainerStyle={{marginLeft: 15}}
            data={movieList}
            keyExtractor={(movie) => movie.id}
            renderItem={
                ({item}: ListRenderItemInfo<Movie>) =>  (      
                        <MovieCard key={item.id} imageSource={{uri: `https://image.tmdb.org/t/p/w500/${item?.poster_path}`}}/>
            )}
        />
    </MovieRowStyle>
  )
}
