import { SET_SELECTED_MOVIES } from "./constants";

export const setSelectedMovies = (payload: any) => ({
    type: SET_SELECTED_MOVIES,
    payload
})