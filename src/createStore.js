import {applyMiddleware, createStore} from 'redux';
import RootReducer  from './reducers';
import ReduxThunk from 'redux-thunk';

export const middlewares = [ReduxThunk];

export const createstorewithmiddleware   = applyMiddleware(...middlewares)(createStore);

export const store = createstorewithmiddleware(RootReducer);