import { productActionTypes } from './product-types';
import { firestore } from '../../firebase/firebase-utils';

export const startFetchingProducts = () => ({
    type: productActionTypes.START_FETCHING_PRODUCTS
})

export const successFetchingProducts = (products) => ({
    type:productActionTypes.SUCCESS_FETCHING_PRODUCTS,
    payload:products
})

export const errorFetchingProducts = (error) => ({
    type: productActionTypes.ERROR_FETCHING_PRODUCTS,
    payload:error
})

export const productsFetchStartAsnyc = () => {
    return dispatch => {

        dispatch(startFetchingProducts());
        
        firestore.collection("products")
        .get()
        .then((snapshot) => {
            const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
            }));
            
            if(data.length !== 0) {
                dispatch(successFetchingProducts(data))
            } 
            
            })
            .catch((error) => {
                dispatch(errorFetchingProducts(error))
            });

    }
   
}