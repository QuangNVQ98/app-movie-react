import { SET_SELECTED_MOVIES } from "./constants";

const initState = {
  selectedID: null,
  mediaType: null,
  setSelectedID: null,
  setShowPopup: null,
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case SET_SELECTED_MOVIES: 
      return {
        ...state,
        
      }
    default: 
      throw new Error('')
    
  }
}

export {initState}
export default reducer