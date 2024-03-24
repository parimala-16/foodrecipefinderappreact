import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import app from './App';
import { render, waitFor, fireEvent } from '@testing-library/react';


describe('app component', () => {

  test('goes to login page when the path is "/"', () => {

    const { getByText } = render(

      <MemoryRouter initialEntries={['/']}>
        <app />
      </MemoryRouter>

    );

    expect(getByText('login')).toBeInTheDocument();

  });

  test('goes to recipes when the path is "/search"', async () => {

    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue({ hits: [] }),
    
    });

    const { getByPlaceholderText, getByText } = render(
    
    <MemoryRouter initialEntries={['/search']}>
        <app />
      </MemoryRouter>
    
    );

    const input = getByPlaceholderText('Search for a Recipe');
    fireEvent.change(input, { target: { value: 'Test' } });

    await waitFor(() => {

      expect(getByText('recipes')).toBeInTheDocument();
      
    });
  });
});
