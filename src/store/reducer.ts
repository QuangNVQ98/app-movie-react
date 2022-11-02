import { SET_SELECTED_MOVIES } from "./constants";
import { SET_WATCH_MOVIES } from "./constants";

const initState = {
  selectedID: null,
  mediaType: null,
  showPopup: null
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case SET_SELECTED_MOVIES: 
      return {
        ...state,
        selectedID: action.payload.selectedID,
        mediaType: action.payload.mediaType,
        showPopup: action.payload.showPopup,
      }
    case SET_WATCH_MOVIES: 
      return {
        ...state,
        selectedID: action.payload.selectedID,
        mediaType: action.payload.mediaType,
        season: action.payload?.season,
        episode: action.payload?.episode,
      }
    default: 
      throw new Error('')
    
  }
}

export {initState}
export default reducer