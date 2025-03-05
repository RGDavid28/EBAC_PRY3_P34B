import { configureStore} from '@reduxjs/toolkit';
import { itemsReducer } from "../state/items.slice";
import { cartReducer } from "../state/cart.slice";
export const store = configureStore({
  reducer:{
    item: itemsReducer,
    cart: cartReducer,
   },
});

export default store;