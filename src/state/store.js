import { createStore, applyMiddleware, combineReducers} from "redux";
import  thunk  from 'redux-thunk';
import { ipReducer } from './reducers/ipReducer';

const appReducers = combineReducers({
    ip: ipReducer
});

const store =  
    createStore(
        appReducers,
        applyMiddleware(thunk)
    )


export default store;