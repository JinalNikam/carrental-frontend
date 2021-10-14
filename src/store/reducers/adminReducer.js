const initialState = {



    isUpdated: false





}

export default function adminReducer(state = initialState, action) {



    if (action.type === 'UPDATEGUESTSUCCESS') {
        return {
            ...state,
            query: action.payload, isUpdated: true


        }
    }





    return state;
}



