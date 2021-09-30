import * as types from './const/types'

export const getAllGames = (page = 1, categories = '') => {
  return {
    type: types.GET_GAMES_BEGIN,
    page,
    categories
  };
};

export const getGamesBySearch = (search) => {
  return {
    type: types.GET_GAMES_BY_SEARCH_BEGIN,
    search
  };
};

export const getGamesById = (id) => {
  return {
    type: types.GET_GAMES_BY_ID_BEGIN,
    id
  };
};