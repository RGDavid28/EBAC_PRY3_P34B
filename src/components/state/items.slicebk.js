import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IDLE, LOADING, SUCCEEDED, FAILED } from "./status";

const fetchItems = createAsyncThunk('items/fetchItems', async () => {
    const response = await axios.get(`https://fakestoreapi.com/products?limit=20`);
    return response.data;    
});

const itemSlice = createSlice({
    name: 'items',
    initialState: {
        status: IDLE,
        items: null,
    },

    reducers: {
 
        removeItem:(state, action) => {
            return {items:state.items.filter(item => item.id !== action.payload)};
        },
        toggleItem: (state, action) => {
            const item = state.items.find(item => item.id === action.payload);
            if (item) {
                item.completed = !item.completed;
            }
        } 
    },
    extraReducers: builder => {
        builder
            .addCase(fetchItems.pending, (state, action) => {
                console.log("pending:",action);
                state.status = LOADING;
            })
            .addCase(fetchItems.fulfilled, (state, action) => {
                console.log("fulfilled:", action);
                state.items=action.payload;
                state.status = SUCCEEDED;
            })
            .addCase(fetchItems.rejected, (state, action) => {
                console.log("rejected", action);
                state.status = FAILED;
            })
    },    
});

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        status: IDLE,
        items: null,
    },

    reducers: {
 
        addCart:(state, action) =>{
            const quantity = 0;
            const cartP = state.cart.find(cartP => cartP.id === action.payload.id);
            console.log(state);
            console.log(action);
            if (cartP.id === action.payload.id ) {
                state.quantity = quantity + 1;
            } else {
                 const newCartP = {
                    id            : action.payload.id,
                    title         : action.payload.title,
                    image         : action.payload.image,
                    category      : action.payload.category,
                    description   : action.payload.description,
                    price         : action.payload.price,
                    quantity      : 1,
                }
                state.cart.push(newCartP);
            }
        },
    },    
});


export const {removeItem, toggleItem} = itemSlice.actions;
export const {addCart} = cartSlice.actions;

const { reducer: itemsReducer} = itemSlice;
const { reducer: cartReducer}  = cartSlice;
export {fetchItems, itemsReducer, cartReducer};