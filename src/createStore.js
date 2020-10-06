// import {applyMiddleware, createStore} from 'redux';
// import RootReducer  from './reducers';
// import ReduxThunk from 'redux-thunk';

// export const middlewares = [ReduxThunk];

// export const createstorewithmiddleware   = applyMiddleware(...middlewares)(createStore);

// export const store = createstorewithmiddleware(RootReducer);
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/index';



export const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware
    )
);