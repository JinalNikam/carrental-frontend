const initialState={
    guestqueries:[],
    guestquery:undefined,
    query:undefined,
}

export default function guestUserReducer(state=initialState,action){

    if (action.type === 'FETCHGUESTQUERIES') {
        return {
            ...state,
            guestqueries: action.payload
        }
    }

    if(action.type === 'ADDGUESTQUERYSUCCESS'){
        return{
            ...state,
            guestquery:action.payload
        }
    }

    if(action.type==="FETCHGUESTBYIDSUCCESS"){
        return{
            ...state,
            query:action.payload
        }
    }

   

    return state;
}