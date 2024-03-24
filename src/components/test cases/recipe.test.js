import React from 'react';
import recipe from './recipe';
import { render } from '@testing-library/react';

describe('recipe component', () => {
  const mock_Recipe = {
    r: {
      label: 'Testing_Recipe',
      image: 'testing_image.png',
      calories: 400,
      ingredients: ['Ingredient 1', 'Ingredient 2', 'Ingredient 3']
    }
  };

  test('shows the recipe name, image, and calories', () => {

    const { getByText, getByAltText } = render(<recipe r={mock_Recipe} />);
    expect(getByText('Testing_Recipe')).toBeInTheDocument();
    expect(getByAltText('testing_image.png')).toBeInTheDocument();
    expect(getByText('Calories : 400')).toBeInTheDocument();
  });

  test('shows the ingrediants of the recipe', () => {

    const { getByText } = render(<recipe r={mock_Recipe} />);
    expect(getByText('Ingredient 1')).toBeInTheDocument();
    expect(getByText('Ingredient 2')).toBeInTheDocument();
    expect(getByText('Ingredient 3')).toBeInTheDocument();

  });
});
