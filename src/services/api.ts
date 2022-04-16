// import { Movie, MovieImages } from './../types/index';
import axios from "axios";
import { TOKEN } from '@env'
import { Movie } from "../types";

export const getTrendingMovies = async (): Promise<Movie[]> => {
   
   const result = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${TOKEN}`);
   return result.data.results
}

export const getGenres =async (type: 'tv' | 'movie') => {
   const result = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${TOKEN}&language=pt-BR`);
   return result.data.genres;
}

export const getLatest =async (type: 'tv' | 'movie') => {
   const result = await axios.get(`https://api.themoviedb.org/3/${type}/latest?api_key=${TOKEN}&language=pt-BR`);
   return result.data;
}
export const getTopRated =async (type: 'tv' | 'movie') => {
   const result = await axios.get(`https://api.themoviedb.org/3/${type}/top_rated?api_key=${TOKEN}&language=pt-BR&page=1`);
   return result.data.results;
}
export const getAllByGenre =async (type: 'tv' | 'movie', genreId: number, page = 1) => {
   const result = await axios.get(`https://api.themoviedb.org/3/discover/${type}?api_key=${TOKEN}&with_genres=${genreId}&page=${page}`);
   return result.data.results;
}
export const getTrailer =async (type: 'tv' | 'movie', genreId: number, page = 1) => {
   const result = await axios.get(`https://api.themoviedb.org/3/${type}/videos?api_key=${TOKEN}&language=pth-BR&page=1`);
   return result.data.results;
}
