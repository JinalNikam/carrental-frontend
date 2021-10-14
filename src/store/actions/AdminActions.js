import axios from "axios"




export function updateGuestFeedback(query){

    return (dispatch)=>{
        return axios.put("http://localhost:8080/guestfeedback/updatefeedback",query)
        .then(resp=>updateGuestSuccess(resp.data))

    }

}

export function updateGuestSuccess(data){
    return{

        type:'UPDATEGUESTSUCCESS',
        payload:data
    }
}




