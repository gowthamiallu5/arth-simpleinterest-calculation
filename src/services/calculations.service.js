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
    //     const data ={
    //     "a":1,
    //     "b":2
    //   }
    await axios.post(API_URL + 'api/Operations/add', data)
        .then((response) => {
            console.log(response);

            return response;
        }).catch((error) => {
            console.log(error)
        })
}

async function substration(data) {
    await axios.post(API_URL + 'api/Operations/add', data)
        .then((response) => {
            console.log(response);

            return response;
        }).catch((error) => {
            console.log(error)
        })
}

async function multiplication(data) {
    await axios.post(API_URL + 'api/Operations/add', data)
        .then((response) => {
            console.log(response);

            return response;
        }).catch((error) => {
            console.log(error)
        })
}

async function division(data) {
    await axios.post(API_URL + 'api/Operations/add', data)
        .then((response) => {
            console.log(response);

            return response;
        }).catch((error) => {
            console.log(error)
        })
}

async function simpleinterest(data) {
    console.log('insercice before sending',data);
    // await axios.post(API_URL + 'api/Interest/simpleInterest', data)
    //     .then((response) => {
    //         console.log('inservice', response.data.result);
    //         return response.data.result;
    //     }).catch((error) => {
    //         console.log(error)
    //     })
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
    await axios.post(API_URL + 'api/Operations/add', data)
        .then((response) => {
            console.log(response);

            return response;
        }).catch((error) => {
            console.log(error)
        })
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