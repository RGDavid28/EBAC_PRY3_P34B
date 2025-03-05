import { render, screen } from '@testing-library/react'
import React from "react";
import ProductListPage from '../ProductListPage';

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


describe('ProductListPage', () => {

    beforeEach(() => {
      useSelectorMock.mockClear()
      useDispatchMock.mockClear()
    })

    it( 'should titles in the Product List Header', () => {
     
      render(<MemoryRouter><ProductListPage /></MemoryRouter>);
      
      const titulo    = screen.getByText('Product List');
      const ptitulo    = screen.getByText('See the Cart');

      expect(titulo).toBeInTheDocument();
      expect(ptitulo).toBeInTheDocument();

  });

  it( 'should the data in the Product List detail', () => {
    
    const products = [{id:1, image : "__", title : "Orange - Healty", price: 20},
                  {id:2, image : "--", title : "Cap  - Doger LA", price: 120},
     ];
    
    useSelectorMock.mockReturnValue(products);
    render(<MemoryRouter><ProductListPage /></MemoryRouter>);

    useDispatchMock.mockImplementation(() => fakeDispatch);
    expect(useDispatchMock).toHaveBeenCalledTimes(1);
    
    const sdata=screen.getByText(/Orange - Healty/i);
    const pdata=screen.getByText(/120/i);
    const edata=screen.getAllByText(/Add to Cart/i);
    const eAdd=edata[0];
      
    expect(sdata).toBeInTheDocument();
    expect(pdata).toBeInTheDocument();
    expect(eAdd).toBeInTheDocument();


  });
});