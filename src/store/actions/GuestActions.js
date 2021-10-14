import axios from "axios"




export function addQuery(guestquery) {

    return (dispatch) => {

        return axios.post('http://localhost:8080/guestfeedback/addquery', guestquery)
            .then(resp => {
                dispatch(addQuerySuccess(resp.data))
            })
            .catch(error => {
                throw (error);
            });
    }
}

export function addQuerySuccess(data) {
    return {
        type: "ADDGUESTQUERYSUCCESS",
        payload: data
    }
}

export function fetchGuestQueries() {

    return (dispatch) => {

        return axios.get('http://localhost:8080/guestfeedback/getGuestQueries')
            .then(resp => {
                dispatch(fetchGuestSuccess(resp.data))
            })

    }
}

export function fetchGuestSuccess(data) {
    return {

        type: 'FETCHGUESTQUERIES',
        payload: data
    }
}

export function getGuestQueryById(queryId) {


    return (dispatch) => {

        return axios.get('http://localhost:8080/guestfeedback/getguestquery/' + queryId)
            .then(resp => {
                dispatch(fetchGuestQueryByIdSuccess(resp.data))
            })
            .catch(error => {
                throw (error);
            });
    }
}

export function fetchGuestQueryByIdSuccess(data) {
    return {
        type: "FETCHGUESTBYIDSUCCESS",
        payload: data
    }
}




