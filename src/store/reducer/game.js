import * as types from "../const/types";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError:false,
  data: [],
};

const allGames = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_GAMES_BEGIN:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_GAMES_SUCCESS:
      return {
        ...state,
        isSuccess: true,
        isLoading:false,
        isError:false,
        data: payload,
      };
    case types.GET_GAMES_FAIL:
      return {
        ...state,
        isLoading:true,
        isSuccess:false,
        isError:true
      };
    case types.GET_GAMES_BY_SEARCH_BEGIN:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_GAMES_BY_SEARCH_SUCCESS:
      return {
        ...state,
        isSuccess: true,
        isLoading:false,
        isError:false,
        data: payload,
      };
    case types.GET_GAMES_BY_SEARCH_FAIL:
      return {
        ...state,
        isLoading:true,
        isSuccess:false,
        isError:true
      };
    default:
      return state;
  }
};

export default allGames;
