import {
    PRODUCT_LIST_REQUEST, 
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,

    PRODUCT_DELETE_REQUEST,
    PRODUCT_DELETE_SUCCESS,
    PRODUCT_DELETE_FAIL,
} from '../constants/ProductConstants'

 export const productListReducers = (state = {products: []}, action) =>{

    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            return {loading: true, products: []}

        case PRODUCT_LIST_SUCCESS:
            return {loading: false, products: action.payload}

        case PRODUCT_LIST_FAIL:
            return {loading: false, error: action.payload}

        default:
            return state
        }
    }


    export const ProductDeleteReducer = (state = {}, action) =>{

        switch(action.type){
            case PRODUCT_DELETE_REQUEST:
                return {loading: true}
    
            case PRODUCT_DELETE_SUCCESS:
                return {loading: false, success: true}
    
            case PRODUCT_DELETE_FAIL:
                return {loading: false, error: action.payload}
    
            default:
                return state
            }
        }
