import * as types from "../const/types";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError:false,
  data: [],
};

const gameDetail = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_GAMES_BY_ID_BEGIN:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_GAMES_BY_ID_SUCCESS:
      return {
        ...state,
        isSuccess: true,
        isLoading:false,
        isError:false,
        data: payload,
      };
    case types.GET_GAMES_BY_ID_FAIL:
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

export default gameDetail;
