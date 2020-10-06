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
    await axios.post(API_URL + 'api/Operations/add', data)
        .then((response) => {
            console.log(response);

            return response;
        }).catch((error) => {
            console.log(error)
        })
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