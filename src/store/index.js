import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import movieReducer from "containers/client/Home/module/reducer";
import movieDetailReducer from "containers/client/MovieDetail/module/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  movieReducer,
  movieDetailReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
