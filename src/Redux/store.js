// import { configureStore } from "@reduxjs/toolkit";
// import  userReducer from "./userSlice";

// export default configureStore(
//     {
//         reducer:{
//             user:userReducer,
//         },
//     }
// )

import {createStore} from 'redux';

const initialState = {
    firstname:null,
};

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case "SIGN_UP":
            return{
                ...state,
                firstname:action.payload,
            };

        case "SIGN_OUT":
            return{
                ...state,
                firstname:null,
            };

        default:
            return state;
    }
};

const store = createStore(rootReducer);
export default store;