import { createStore, applyMiddleware, compose } from "redux";
import { logger } from "redux-logger";
import rootReducer from "./rootReducer";

const middlewares = [logger];

const composedEnhansers = compose(applyMiddleware(...middlewares));

const store = createStore(rootReducer, undefined, composedEnhansers);

export default store;
