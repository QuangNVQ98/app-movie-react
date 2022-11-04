export type CategoryMovie =
  | "Trending_Movies"
  | "Popular_Movies"
  | "Top_Rated_Movies"
  | "Upcoming_Movies"
  | "Now_Playing_Movies"
  | "Trending_TV"
  | "Popular_TV"
  | "Top_Rated_TV"
  | "On_The_Air_TV"
  | "Airing_Today_TV";

export interface MovieData {
  [id: string]: Item[];
}
export interface Item {
  adult: boolean;
  backdrop_path: string;
  genre_ids: any[];
  id: number;
  media_type: "tv" | "movie";
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number
  poster_path: string;
  release_date: string;
  first_air_date: string;
  title?: string;
  video: boolean;
  vote_average: number;
  vote_count: number
  name?: string;
}

export interface Detail {
  adult?: boolean;
  backdrop_path: string;
  belongs_to_collection?: {
    backdrop_path: string,
    id: number,
    name: string,
    poster_path: string
  },
  budget?: number,
  genres: { id: number; name: string }[];
  homepage: string;
  id: number;
  imdb_id?: string,
  original_language?: string,
  original_title?: string,
  overview: string;
  popularity?: number,
  poster_path: string;
  production_companies?: {
    id: number,
    logo_path: string,
    name: string,
    origin_country: string
  }[],
  production_countries?: {
    iso_3166_1?: string,
    name: string
  }[]
  release_date: string;
  revenue?: number,
  runtime?: number,
  spoken_languages?: {
    english_name: string,
    iso_639_1?: string,
    name: string
  }[],
  status?: string,
  tagline?: string,
  title: string;
  video?: boolean,

  vote_average: number;
  vote_count: number;
  last_air_date: string;
  name: string;
  seasons: {
    episode_count: number;
    season_number: number;
  }[];
}

export interface Season {
  episodes: Episode[];
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
  air_date: string;
}

export interface Episode {
  air_date: string;
  episode_number: number;
  name: string;
  overview: string;
  still_path: string;
  vote_average: number;
  vote_count: number;
  season_number: number
}

export interface Cast {
  id: number;
  name: string;
  profile_path: string;
  character: string;
}

export interface VideoTrailer {
  name: string;
  key: string;
}

export interface SearchResult {
  page: number;
  total_pages: number;
  total_results: number;
  results: Item[];
}

export interface MovieProps {
  data: Detail;
  casts: Cast[];
  similar: Item[];
  videos: VideoTrailer[];
  seasons?: Season[];
}
