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

const { reducer: itemsReducer} = itemSlice;
export {fetchItems, itemsReducer};