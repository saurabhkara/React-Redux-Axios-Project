import actionTypes from "../constants/action-types";
import ActionTypes from "../constants/action-types";

const intialState={
    products: []
}

export const productReducer=(state=intialState, action)=>{
    switch(action.type){
        case ActionTypes.SET_PRODUCTS:
            return {...state, products:action.payload}


        default:
            return state;
    }
}


export const selectedProductReducer=(state={},action)=>{
    switch (action.type) {
        case actionTypes.SELECTED_PRODUCT:
            return {
                ...state, ...action.payload
            }
        case actionTypes.REMOVE_SELECTED_PRODUCT:
            return {
                
            }   
            
    
        default:
            return state;
            
    }
}