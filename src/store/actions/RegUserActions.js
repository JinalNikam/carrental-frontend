import axios from "axios"





export function addQuery(userId) {

    return (dispatch) => {

        return axios.post('http://localhost:8080/registeredfeedback/addquery/',+userId)
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
        type : "ADDREGQUERYSUCCESS",
        payload : data
    }
}


export function fetchRegUserQueries(){

    return (dispatch)=>{

        return axios.get('http://localhost:8080/registeredfeedback/getRegisteredUserQueries')
        .then(resp=>{
            dispatch(fetchRegUserSuccess(resp.data))
        })

    }
}

export function fetchRegUserSuccess(data){
    return{

        type:'FETCHREGUSERQUERIES',
        payload:data
    }
}

export function getRegQueryById(queryId) {


    return (dispatch) => {

        return axios.get('http://localhost:8080/registeredfeedback/getRegQuery/' + queryId)
            .then(resp => {
                dispatch(fetchRegQueryByIdSuccess(resp.data))
            })
            .catch(error => {
                throw (error);
            });
    }
}

export function fetchRegQueryByIdSuccess(data) {
    return {
        type: "FETCHREGBYIDSUCCESS",
        payload: data
    }
}

export function getUserById(userId){

    return(dispatch)=>{

        return axios.get('http://localhost:8080/user/getuserdetails/'+userId)
        .then(resp=>{
            dispatch(getUserByIdSuccess(resp.data))
        })
    }
}

export function getUserByIdSuccess(data){
    return{
        type:"GETUSERBYIDSUCCESS",
        payload:data
    }
}
