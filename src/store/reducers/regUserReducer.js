const initialState={
    regUserQueries:[],
    query:undefined,
    regQuery:undefined,
    fetchUser:undefined

    
}

export default function regUserReducer(state=initialState,action){

    
    if (action.type === 'FETCHREGUSERQUERIES') {
        return {
            ...state,
           regUserQueries: action.payload
        }
    }

    if(action.type==="FETCHREGBYIDSUCCESS"){
        return{
            ...state,
            query:action.payload
        }
    }

    if(action.type === 'ADDREGQUERYSUCCESS'){
        return{
            ...state,
            regQuery:action.payload
        }
    }

    if(action.type==="GETUSERBYIDSUCCESS"){
        return{
            ...state,
            fetchUser:action.payload
        }
    }


   
    return state;
}