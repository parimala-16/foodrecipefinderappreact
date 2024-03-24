import React from 'react';
import search from './search';
import { render, fireEvent } from '@testing-library/react';


describe('search component', () => {
  
  test('while typing the input field gets auto updated', () => {

    const { getByPlaceholderText } = render(<search />);
    const input = getByPlaceholderText('Search for a Recipe');
    
    fireEvent.change(input, { target: { value: 'Testing' } });
    
    expect(input.value).toBe('Testing');
  });

  test('getQuery method gets called when correct input is given and submitted', () => {
    const Mock_getQuery = jest.fn();
    const { getByPlaceholderText, getByText } = render(<search getQuerry={Mock_getQuery} />);
    const input = getByPlaceholderText('Search for a Recipe');
    const button = getByText('search');
    
    fireEvent.change(input, { target: { value: 'Testing' } });
    fireEvent.click(button);
    
    expect(Mock_getQuery).toHaveBeenCalledWith('Testing');
  });
});
