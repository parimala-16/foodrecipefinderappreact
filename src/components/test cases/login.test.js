import React from 'react';
import login from './login';
import { render, fireEvent } from '@testing-library/react';

describe('login', () => {
 
  test('Login button should be disabled when email id or password is empty', () => {

    const { getByText, getByPlaceholderText } = render(<login />);
    const emailid = getByPlaceholderText('Enter email id');
    const password = getByPlaceholderText('Enter password');
    const button = getByText('LogIn');
    fireEvent.change(emailid, { target: { value: '' } });
    fireEvent.change(password, { target: { value: 'password789' } });
    expect(button.disabled).toBe(true);

  });

  test('When both email id and password are given login button should be enabled', () => {
    const { getByText, getByPlaceholderText } = render(<login />);
    const emailid = getByPlaceholderText('Enter email id');
    const password = getByPlaceholderText('Enter password');
    const button = getByText('LogIn');

    fireEvent.change(emailid, { target: { value: 'def@gmail.com' } });
    fireEvent.change(password, { target: { value: 'password789' } });

    expect(button.disabled).toBe(false);
    
  });

  test('Successfull login when log in button is clicked', () => {

    const { getByText, getByPlaceholderText } = render(<login />);
    const emailid = getByPlaceholderText('Enter email id');
    const password = getByPlaceholderText('Enter password');
    const button = getByText('LogIn');

    fireEvent.change(emailid, { target: { value: 'def@gmail.com' } });
    fireEvent.change(password, { target: { value: 'password789' } });
    fireEvent.click(button);

    expect(console.log).toHaveBeenCalledWith('EmailId:', 'def@gmail.com');
    expect(console.log).toHaveBeenCalledWith('Password:', 'password789');

  });
});
