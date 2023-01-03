import {createStore} from 'redux'
const initialState = {
    users : [] , 
    loggedInUser : null , 
    products : [{
        name : 'khadoj',
        price : 5
    },{
        name : 'simo',
        price : 6
    },{
        name : 'wasim',
        price : 8
    },{
        name : 'soso',
        price : 5
    }],
    cart : []
}

export function reducer (state = initialState , action){
    switch (action.type) {
        case "REGISTER":
            return {
                ...state,
                // user : payload.user,
                users : [...state.users , action.payload]
            }

        default:{
        return state
        }
    }
}
export default createStore