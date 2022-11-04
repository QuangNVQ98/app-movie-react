import { SET_SELECTED_MOVIES } from "./constants";

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
    default: 
      throw new Error('')
    
  }
}

export {initState}
export default reducer