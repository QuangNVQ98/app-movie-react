import { SET_SELECTED_MOVIES } from "./constants";
import { SET_LOADING } from "./constants";

export const setSelectedMovies = (payload: any) => ({
    type: SET_SELECTED_MOVIES,
    payload
})

export const setLoading = (payload: any) => ({
    type: SET_LOADING,
    payload
})