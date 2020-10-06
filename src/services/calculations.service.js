import axios from "axios";

const API_URL = 'http://honeywellpoc.ap-south-1.elasticbeanstalk.com/'

export const calculationService = {
    addition,
    substration,
    multiplication,
    division,
    simpleinterest,
    wheather
};

async function addition(data) {
    console.log('addition',data);

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( data)
    };

    return fetch(API_URL + 'api/Operations/add', requestOptions)
        .then(handleResponse)
        .then(response => {
            console.log('inservice', response);
            return response;
        });
}

async function substration(data) {
   
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( data)
    };

    return fetch(API_URL + 'api/Operations/substract', requestOptions)
        .then(handleResponse)
        .then(response => {
            console.log('inservice', response);
            return response;
        });
}

async function multiplication(data) {
   
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( data)
    };

    return fetch(API_URL + 'api/Operations/multiply', requestOptions)
        .then(handleResponse)
        .then(response => {
            console.log('inservice', response);
            return response;
        });
}

async function division(data) {
   
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( data)
    };

    return fetch(API_URL + 'api/Operations/divide', requestOptions)
        .then(handleResponse)
        .then(response => {
            console.log('inservice', response);
            return response;
        });
}

async function simpleinterest(data) {
    console.log('insercice before sending',data);
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( data)
    };

    return fetch(API_URL + 'api/Interest/simpleInterest', requestOptions)
        .then(handleResponse)
        .then(response => {
            console.log('inservice', response);
            return response;
        });
}

async function wheather(data) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( data)
    };

    return fetch(API_URL + 'api/Weather/temperatureByCity', requestOptions)
        .then(handleResponse)
        .then(response => {
            console.log('inservice', response);
            return response;
        });
}

function handleResponse(response) {
    return response.text().then(text => {
        console.log('text',text);
        
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
              console.log('401 error');
              
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}