import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rocketsReducer from './rocketsReducer';
import missionsReducer from './missionsReducer';

const reducers = combineReducers({
  rocketsReducer,
  missionsReducer,
});

const store = createStore(
  reducers,
  applyMiddleware(logger, thunk),
);

export default store;
