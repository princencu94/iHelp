import { productActionTypes } from './product-types';

const INITIAL_STATE = {
    products:[],
    productsFetchError:"",
    isFetchingProducts:false
}

export const productReducer = (state = INITIAL_STATE , action) => {
    switch (action.type) {
        case productActionTypes.START_FETCHING_PRODUCTS:
            return {
                ...state,
                isFetchingProducts:true
            }
        case productActionTypes.SUCCESS_FETCHING_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case productActionTypes.ERROR_FETCHING_PRODUCTS:
            return {
                ...state,
                productsFetchError:action.payload
            }
        default:
            return state;
    }
}

export default productReducer;