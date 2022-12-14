import { Detail } from "./types";
import axios from "./axios";

export const getHomeData: () => Promise<any> = async () => {
  const HomeAPIRoutes: {
    [key: string]: { url: string; media_type: "tv" | "movie" };
  } = {
    "Trending_Movies": { url: "/trending/movie/day", media_type: "movie" },
    "Popular_Movies": { url: "/movie/popular", media_type: "movie" },
    "Top_Rated_Movies": { url: "/movie/top_rated", media_type: "movie" },
    "Upcoming_Movies": { url: "/movie/upcoming", media_type: "movie" },
    "Now_Playing_Movies": { url: "/movie/now_playing", media_type: "movie" },
    "Trending_TV": { url: "/trending/tv/day", media_type: "tv" },
    "Popular_TV": { url: "/tv/popular", media_type: "tv" },
    "Top_Rated_TV": { url: "/tv/top_rated", media_type: "tv" },
    "On_The_Air_TV": { url: "/tv/on_the_air", media_type: "tv" },
    "Airing_Today_TV": { url: "/tv/airing_today", media_type: "tv" },
  };

  const promises = await Promise.all(
    Object.keys(HomeAPIRoutes).map((item) => axios.get(HomeAPIRoutes[item].url))
  );

  const data = promises.reduce((final, current, index) => {
    final[Object.keys(HomeAPIRoutes)[index]] = current.data.results.map(
      (item: any) => ({
        ...item,
        media_type: HomeAPIRoutes[Object.keys(HomeAPIRoutes)[index]].media_type,
      })
    );
    return final;
  }, {} as any);

  return data;
};

export const getWatchMovieContent: (id: string) => Promise<any> = async (
  id
) => {
  const labels = ["data", "similar"];

  const result = (
    await Promise.all([
      axios.get(`/movie/${id}`),
      axios.get(`/movie/${id}/similar`),
    ])
  ).reduce((final, current, index) => {
    if (labels[index] === "data") {
      final[labels[index]] = current.data;
    } else if (labels[index] === "similar") {
      final[labels[index]] = current.data.results.map((item: any) => ({
        ...item,
        media_type: "movie",
      }));
    }
    return final;
  }, {} as any);

  return result;
};

export const getSimilarTVs: (id: string) => Promise<any> = async (id) => {
  const data = (await axios.get(`/movie/${id}/similar`)).data.results.map(
    (item: any) => ({ ...item, media_type: "movie" })
  );
  return data;
};

export const getMovieDetails: (id: string) => Promise<any> = async (id) => {
  const labels = ["data", "casts", "similar", "videos"];

  const result = (
    await Promise.all([
      axios.get(`/movie/${id}`),
      axios.get(`/movie/${id}/credits`),
      axios.get(`/movie/${id}/similar`),
      axios.get(`/movie/${id}/videos`),
    ])
  ).reduce((final, current, index) => {
    if (labels[index] === "data") {
      final[labels[index]] = current.data;
    } else if (labels[index] === "casts") {
      final[labels[index]] = current.data.cast
        .filter((item: any) => item.name && item.character && item.profile_path)
        .slice(0, 10);
    } else if (labels[index] === "similar") {
      final[labels[index]] = current.data.results.map((item: any) => ({
        ...item,
        media_type: "movie",
      }));
    } else if (labels[index] === "videos") {
      final[labels[index]] = current.data.results.filter(
        (item: any) => item.name && item.site === "YouTube"
      );
    }

    return final;
  }, {} as any);

  return result;
};

export const getTVDetails: (id: string) => Promise<any> = async (id) => {
  const labels = ["data", "casts", "similar", "videos"];

  const result = (
    await Promise.all([
      axios.get(`/tv/${id}`),
      axios.get(`/tv/${id}/credits`),
      axios.get(`/tv/${id}/similar`),
      axios.get(`/tv/${id}/videos`),
    ])
  ).reduce((final, current, index) => {
    if (labels[index] === "data") {
      final[labels[index]] = current.data;
    } else if (labels[index] === "casts") {
      final[labels[index]] = current.data.cast
        .filter((item: any) => item.name && item.character && item.profile_path)
        .slice(0, 10);
    } else if (labels[index] === "similar") {
      final[labels[index]] = current.data.results.map((item: any) => ({
        ...item,
        media_type: "tv",
      }));
    } else if (labels[index] === "videos") {
      final[labels[index]] = current.data.results.filter(
        (item: any) => item.name && item.site === "YouTube"
      );
    }

    return final;
  }, {} as any);

  return result;
};

export const getTVSeasons: (id: string) => Promise<any> = async (id) => {
  const data = (await axios.get(`/tv/${id}`)).data as Detail;

  if (data.seasons.length === 0) throw new Error("404");

  const res = await Promise.all(
    data.seasons.map((item) =>
      axios.get(`/tv/${id}/season/${item.season_number}`)
    )
  );

  const seasons = res
    .map((item) => item.data)
    .filter(
      (item) =>
        item.name &&
        item.poster_path &&
        item.episodes.length > 0 &&
        item.episodes.every((child: any) => child.name && child.still_path && child.air_date && child.overview)
    );

  return seasons;
};

export const search: (query: string, page?: number) => Promise<any> = async (
  query,
  page = 1
) => {
  const data = (await axios.get("/search/multi", { params: { query, page } }))
    .data;

  return {
    ...data,
    results: data.results.filter((item: any) => item.poster_path),
  };
};
