import { SET_SELECTED_MOVIES } from "./constants";
import { SET_WATCH_MOVIES } from "./constants";

export const setSelectedMovies = (payload: any) => ({
    type: SET_SELECTED_MOVIES,
    payload
})

export const setWatchMovies = (payload: any) => ({
    type: SET_WATCH_MOVIES,
    payload
})