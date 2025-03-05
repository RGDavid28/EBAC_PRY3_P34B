import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart:[],
    },

    reducers: {
        
        clearCart: (state) => {
            state.cart=[];
        },
      
        addCart:(state, action) =>{          
            const citem = state.cart.find(citem => citem.id === action.payload.id);
            if (!citem) {
                const quantity = 1;
                state.cart.push({...action.payload, quantity});
            }else {
                citem.quantity = citem.quantity +1;
            }
        },

        removeCart:(state, action) => {
            console.log(action);
            console.log(state);
            return {cart:state.cart.filter(citem => citem.id !== action.payload)};
        },

        toggleCart: (state, action) => {
            const citem = state.cart.find(citem => citem.id === action.payload);
            if (citem) {
                citem.completed = !citem.completed;
            }
        } 
        
    },
});

export const { clearCart, addCart, removeCart,toggleCart} = cartSlice.actions;

const { reducer: cartReducer}  = cartSlice;
export {cartReducer};