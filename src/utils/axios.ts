import axios from "axios";
const client = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: { api_key: process.env.REACT_APP_TMDB_API_KEY },
});
export default client;
