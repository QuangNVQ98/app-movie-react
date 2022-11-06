import { SET_SELECTED_MOVIES } from "./constants";
import { SET_LOADING } from "./constants";

const initState = {
  selectedID: null,
  mediaType: null,
  showPopup: null,
  loading: false
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
    case SET_LOADING: 
      return {
        ...state,
        loading: action.payload.loading
      }
    default: 
      throw new Error('')
    
  }
}

export {initState}
export default reducer