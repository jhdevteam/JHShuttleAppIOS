import {createStore,applyMiddleware,compose,combineReducers} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import {MapReducer} from "../Modules/MapModule"


export const makeRootReducer=()=>{
    return combineReducers({
        MapReducer
    });
}

export function manageStore(initialState = {}) {  
  const middleware = [thunk,logger];
    //Store enhancement
    const enhancer=[];
    //Store installation 
    const store = createStore(
        makeRootReducer(),
        initialState,
        compose(
            applyMiddleware(...middleware),
            ...enhancer
        )
    );
    return store;
};

export const store = manageStore();  