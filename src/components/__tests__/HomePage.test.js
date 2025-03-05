import { render, screen, waitFor} from '@testing-library/react'
import React from "react";
import HomePage from '../HomePage';

import { MemoryRouter} from 'react-router';
import '@testing-library/jest-dom';

import { useDispatch, useSelector } from 'react-redux';

jest.mock('react-redux', () => ({
 ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),

}));

const useDispatchMock = useDispatch;
const useSelectorMock = useSelector;


describe('HomePage', () => {

    beforeEach(() => {
      useSelectorMock.mockClear()
      useDispatchMock.mockClear()
    })

    it( 'should Titles in the Cart detail', () => {
     
      render(<MemoryRouter><HomePage /></MemoryRouter>);
      
      const titulo    = screen.getByText('shopping cart');
      expect(titulo).toBeInTheDocument();

      const ptitulo    = screen.getByText('Home Page');
      expect(ptitulo).toBeInTheDocument();

      const plist    = screen.getByText('Go to Product List');
      expect(plist).toBeInTheDocument();
  });

  it( 'should the data in Cart detail', () => {
    
    const cart = [{id:1, image : "__", title : "Orange - Healty", price: 20, quantity: 15},
                      {id:2, image : "--", title : "Cap  - Doger LA", price: 120, quantity:4},
                     ];

    useSelectorMock.mockReturnValue(cart);

    render(<MemoryRouter><HomePage /></MemoryRouter>);

    useDispatchMock.mockImplementation(() => fakeDispatch);
    expect(useDispatchMock).toHaveBeenCalledTimes(1);
    
    const sdata=screen.getByText(/Orange - Healty/i);
    const pdata=screen.getByText(/120/i);
    const qdata=screen.getByText(/15/i);


    const edata=screen.getAllByText('Delete');
    const eDelete=edata[0]; 

    expect(sdata).toBeInTheDocument();
    expect(pdata).toBeInTheDocument();
    expect(qdata).toBeInTheDocument();
    expect(eDelete).toBeInTheDocument();

   });


});