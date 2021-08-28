import {initialState} from "../store";

// add liked music list from the home page, artist page and the album page
// add music list from the album page
// add music list from the artist page

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_HOME":
      return {
        ...state,
        homeMusic: action.payload,
      };

    case "ADD_TO_ALBUM":
      return {
        ...state,
        albumMusic: action.payload,
      };

    case "ADD_TO_ARTIST":
      return {
        ...state,
        artistMusic: action.payload,
      };

    case "ADD_TO_SEARCH_TEXT":
      return {
        ...state,
        searchText: action.payload,
      };

    case "ADD_TO_LIKED_MUSIC":
      return {
        ...state,
        likedMusic: [...state.likedMusic, action.payload],
      };

    case "REMOVED_FROM_LIKED_MUSIC":
      return {
        ...state,
        likedMusic: state.likedMusic.filter((id) => id !== action.payload),
      };

    case "ADD_TO_PLAYER":
      return {
        ...state,
        player: action.payload,
      };
    default:
      return state;
  }
};
