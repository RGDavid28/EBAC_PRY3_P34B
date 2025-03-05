import { fetchItems } from "../state/items.slice";
import { configureStore } from '@reduxjs/toolkit';
import axios from 'axios';

describe('67087596', () => {
  it ('should pass', async() => {
    const mockProducts = [{id:1, image : "__", title : "Orange - Healty", price:  20},
      {id:2, image : "--", title : "Cap  - Doger LA", price: 120},
    ];
    const postSpy = jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: mockProducts });
    const store = configureStore({
    reducer: function (state = '', action) {
        switch (action.type) {
          case 'returns ID/fulfilled':
            return action.payload;
          default:
            return state;
        }
      },
    });
  await store.dispatch(fetchItems());
  expect(postSpy).toBeCalledWith(`https://fakestoreapi.com/products?limit=20`);
  const state = store.getState();
  expect(state).toEqual('');
  });
});