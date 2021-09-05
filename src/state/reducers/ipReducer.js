import {GET_USER_API} from '../actions/ipInfoActions';

export const ipReducer = (state = { }, action) => {
    switch (action.type) {
        case GET_USER_API:
            return {...action.payload};
        default:
            return state;
    }
}