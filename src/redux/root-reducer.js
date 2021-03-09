import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartReducer from './cart/cart-reducer';
import productReducer from './product/product-reducer';
import repairReducer from './repairs/repair-reducer';



const persistConfig = {
    key: 'root',
    storage,
    whitelist:['cart']
}

const rootReducer = combineReducers({
    cart:cartReducer,
    product:productReducer,
    repair:repairReducer
});

export default persistReducer(persistConfig, rootReducer);

