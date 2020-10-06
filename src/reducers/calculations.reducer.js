import { types } from './../actions/types';

const initialState = {
    result: 0
}

export function calculations(state = initialState, action) {
    switch (action.type) {
        case types.GET_ADDITION:
            return {
                result: action.result
            }
        case types.GET_SUBSTRACTION:
            return {
                result: action.result
            }
        case types.GET_MULTIPLICATION:
            return {
                result: action.result
            }
        case types.GET_DIVISION:
            return {
                result: action.result
            }
        case types.GET_SIMPLEINTEREST:
            console.log('inreducer', action);
            return {
                ...state,
                result: action.result.result
            }
            console.log('stateinreducer', state);

        //    {
        //     result: action.result
        // }
        case types.GET_WHEATHER:
            return {
                result: action.result
            }
        default:
            return state
    }
}