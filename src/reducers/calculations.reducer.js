import { types } from './../actions/types';

export function calculations(state = {}, action) {
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
                result: action.result
            }
        case types.GET_WHEATHER:
            return {
                result: action.result
            }
        default:
            return state
    }
}