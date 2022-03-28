export type Movie = {
	adult: false,
	backdrop_path: string,
	genre_ids: Array<Number>,
	id: string,
	media_type: string,
	original_language: string,
	original_title: string,
	overview: string,
	popularity: number,
	poster_path:string,
	release_date: string,
	title: string,
	video: boolean,
	vote_average: number,
	vote_count: number,
}

export type TVShow = {
	adult: boolean,
	backdrop_path: null | string,
	belongs_to_collection: null | string,
	budget: number,
	genres: [],
	homepage: string,
	id: number,
	imdb_id: null | string,
	original_language: string,
	original_title: string,
	overview: string,
	popularity: number,
	poster_path: string,
	production_companies: [],
	production_countries: [],
	release_date: Date,
	revenue: number,
	runtime: number,
	status: string,
	tagline: string,
	title: string,
	video: boolean,
	vote_average: number,
	vote_count: number,
}

export type Genre = {
	id: number,
	name: string
} 

export type Category = {
	name: string,
	id: number
}

export type LatestMovie = {
	adult: boolean,
	backdrop_path: string | null,
	belongs_to_collection: string | null,
	budget: number,
	genres: [],
	homepage: string,
	id: number,
	imdb_id: number | null,
	original_language: string,
	original_title: string,
	overview: string,
	popularity: number,
	poster_path: string | null,
	production_companies: [],
	production_countries: [],
	release_date: string,
	revenue: number,
	runtime: number,
	spoken_languages: [],
	status: string,
	tagline: string,
	title: string,
	video: boolean,
	vote_average: number,
	vote_count: number,
}

export type TopRated = {
	data: Movie[] | TVShow[]
}