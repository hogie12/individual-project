import axios from "axios";
import { BASE_URL } from "../const/url";
import { put, takeEvery } from "redux-saga/effects";
import * as types from "../const/types";

function* getGames(actions) {
  const { page, categories } = actions;
  let url = ''
  if (categories === "") {
    url = `${BASE_URL}?key=${process.env.REACT_APP_API_KEY}&page=${page}`
  } else {
    url = `${BASE_URL}?key=${process.env.REACT_APP_API_KEY}&page=${page}&genres=${categories}`
  }
  try {
    const res = yield axios.get(url);
    yield put({
      type: types.GET_GAMES_SUCCESS,
      payload: res.data.results,
    });
  } catch (err) {
    yield put({
      type: types.GET_GAMES_FAIL,
      payload: err,
    });
  }
}

function* getGamesBySearch(actions) {
  const { search } = actions;
  try {
    const res = yield axios.get(
      `${BASE_URL}?key=${process.env.REACT_APP_API_KEY}&search=${search}`
    );
    yield put({
      type: types.GET_GAMES_BY_SEARCH_SUCCESS,
      payload: res.data.results,
    });
  } catch (err) {
    yield put({
      type: types.GET_GAMES_BY_SEARCH_FAIL,
      payload: err,
    });
  }
}
function* getGamesById(actions) {
  const { id } = actions;
  try {
    const res = yield axios.get(
      `${BASE_URL}/${id}?key=${process.env.REACT_APP_API_KEY}`
    );
    yield put({
      type: types.GET_GAMES_BY_ID_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: types.GET_GAMES_BY_ID_FAIL,
      payload: err,
    });
  }
}

export function* watchGetGames() {
  yield takeEvery(types.GET_GAMES_BEGIN, getGames);
}
export function* watchGetGamesBySearch() {
  yield takeEvery(types.GET_GAMES_BY_SEARCH_BEGIN, getGamesBySearch);
}

export function* watchGetGamesById() {
  yield takeEvery(types.GET_GAMES_BY_ID_BEGIN, getGamesById);
}
