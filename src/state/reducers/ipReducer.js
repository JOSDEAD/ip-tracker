import {GET_USER_API, SET_CUSTOM_IP} from '../actions/ipInfoActions';

export const ipReducer = (state = { }, action) => {
    switch (action.type) {
        case GET_USER_API:
            return {...action.payload};
        case SET_CUSTOM_IP:
            console.log("a",action.payload);
            return action.payload ? {...action.payload} : state
        default:
            return state;
    }
}