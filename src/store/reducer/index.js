import { combineReducers } from "redux";
import allGames from './game'
import gameDetail from "./detail";

export default combineReducers({
  allGames,
  gameDetail
});
