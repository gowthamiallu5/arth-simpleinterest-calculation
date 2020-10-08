import { types } from './../actions/types';

const initialState = {
    result: 0
}

export function calculations(state = initialState, action) {
    switch (action.type) {
        case types.GET_ADDITION:
           return {
                ...state,
                result: action.result.result
            }
        case types.GET_SUBSTRACTION:
           return {
                ...state,
                result: action.result.result
            }
        case types.GET_MULTIPLICATION:
           return {
                ...state,
                result: action.result.result
            }
        case types.GET_DIVISION:
           return {
                ...state,
                result: action.result.result
            }
        case types.GET_SIMPLEINTEREST:
            console.log('inreducer', action);
            return {
                ...state,
                result: action.result.result
            }
            console.log('stateinreducer', state);
        case types.GET_WHEATHER:
            console.log('inreducer', action);
           return {
                ...state,
                result: action.result
            }
        default:
            return state
    }
}