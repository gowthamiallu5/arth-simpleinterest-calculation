import { types } from './../actions/types';

const initialState = {
    result: 0,
    result1:0
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
            console.log('inreducer', action);
            return {
                ...state,
                result: action.result.result
            }
        case types.GET_SIMPLEINTEREST:
            console.log('inreducer', action);
            return {
                ...state,
                result: action.result.result1
            }
            console.log('stateinreducer', state);
        case types.GET_WHEATHER:
            console.log('inreducer', action);
            return {
                ...state,
                result: action.result
            }
        case types.GET_ERROR:
            console.log('inerror', action);
            return {
                ...state,
                result: action.error
            }
        default:
            return state
    }
}