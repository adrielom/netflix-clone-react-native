// import { Movie, MovieImages } from './../types/index';
import axios from "axios";
import { TOKEN } from '@env'
import { Movie } from "../types";

export const getTrendingMovies = async (): Promise<Movie[]> => {
   
   const result = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${TOKEN}`);
   return result.data.results
}