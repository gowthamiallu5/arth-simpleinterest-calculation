import { types } from './types';
import { calculationService } from './../services/calculations.service';


export const calculationactions = {
    addition,
    substration,
    multiplication,
    division,
    simpleinterest,
    wheather
};


function addition(data) {
    return dispatch => {
        dispatch(request({ data }));

        calculationService.addition(data)
            .then(
                result => {
                    console.log('inactions', result);

                    dispatch(success(result));
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request(result) { return { type: types.GET_ADDITION, result } }
    function success(result) { return { type: types.GET_ADDITION, result } }
    function failure(error) { return { type: types.GET_ADDITION, error } }
}

function substration(data) {
    return dispatch => {
        dispatch(request({ data }));

        calculationService.substration(data)
            .then(
                result => {
                    dispatch(success(result));
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request(result) { return { type: types.GET_SUBSTRACTION, result } }
    function success(result) { return { type: types.GET_SUBSTRACTION, result } }
    function failure(error) { return { type: types.GET_SUBSTRACTION, error } }
}
function multiplication(data) {
    return dispatch => {
        dispatch(request({ data }));

        calculationService.multiplication(data)
            .then(
                result => {
                    dispatch(success(result));
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request(result) { return { type: types.GET_MULTIPLICATION, result } }
    function success(result) { return { type: types.GET_MULTIPLICATION, result } }
    function failure(error) { return { type: types.GET_MULTIPLICATION, error } }
}
function division(data) {
    return dispatch => {
        dispatch(request({ data }));

        calculationService.division(data)
            .then(
                result => {
                    dispatch(success(result));
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request(result) { return { type: types.GET_ADDITION, result } }
    function success(result) { return { type: types.GET_ADDITION, result } }
    function failure(error) { return { type: types.GET_ADDITION, error } }
}

function simpleinterest(data) {
    return dispatch => {
      dispatch(request({ data }));

        calculationService.simpleinterest(data)
            .then(
                result => {
                    console.log('inactions', result);
                    dispatch(success(result));
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request(result) { return { type: types.GET_SIMPLEINTEREST, result } }
    function success(result) { return { type: types.GET_SIMPLEINTEREST, result } }
    function failure(error) { return { type: types.GET_SIMPLEINTEREST, error } }
}
function wheather(data) {
    return dispatch => {
        dispatch(request({ data }));

        calculationService.wheather(data)
            .then(
                result => {
                    dispatch(success(result));
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request(result) { return { type: types.GET_WHEATHER, result } }
    function success(result) { return { type: types.GET_WHEATHER, result } }
    function failure(error) { return { type: types.GET_WHEATHER, error } }
}





