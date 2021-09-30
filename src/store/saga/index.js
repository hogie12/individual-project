import { all } from "@redux-saga/core/effects";
import {watchGetGames, watchGetGamesBySearch, watchGetGamesById} from './game'

export default function* rootSaga() {
  // function generator
  yield all([watchGetGames(), watchGetGamesBySearch(), watchGetGamesById()]);
}
