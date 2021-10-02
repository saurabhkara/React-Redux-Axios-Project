import actionTypes from '../constants/action-types'

const setProducts=(products)=>{
    return {
        type:actionTypes.SET_PRODUCTS,
        payload:products
    }
}

const selectedProducts=(product)=>{
    return{
        type:actionTypes.SELECTED_PRODUCT,
        payload:product,
    }
}

const removeSelectedProduct=()=>{
    return{
        type:actionTypes.REMOVE_SELECTED_PRODUCT
    }
}

export {selectedProducts, setProducts, removeSelectedProduct};