import React from 'react';
import { render } from '@testing-library/react';
import ingredients from './ingredients';

describe('ingredients component', () => {
  const mock_ingredients = [
    { text: 'Ingredient 1:' },
    { text: 'Ingredient 2:' },
    { text: 'Ingredient 3:' }
  ];

  test('gets list of ingredients correctly', () => {

    const { getByText } = render(<ingredients ingrediants={mock_ingredients} />);

    expect(getByText('Ingredients:-')).toBeInTheDocument();
    expect(getByText('Ingredient 1:')).toBeInTheDocument();
    expect(getByText('Ingredient 2:')).toBeInTheDocument();
    expect(getByText('Ingredient 3:')).toBeInTheDocument();

  });

  test('gets number of ingrediants correctly', () => {

    const { container } = render(<ingredients ingrediants={mock_ingredients} />);
    const ingredientsList = container.querySelectorAll('li');

    expect(ingredientsList.length).toBe(mock_ingredients.length);
  
  });
});
