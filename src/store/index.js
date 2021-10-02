import createSagaMiddleware from "@redux-saga/core";
import { createStore, applyMiddleware } from "redux";
import rootSaga from "./saga/index";
import rootreducer from "./reducer";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootreducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
