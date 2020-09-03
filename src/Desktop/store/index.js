import { createStore, compose, applyMiddleware } from "redux"
import rootReducer from "./reducers";
import { loggerMiddleware } from "./middleware";

export default createStore(
    rootReducer,
    compose(
        applyMiddleware(loggerMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ),
);
