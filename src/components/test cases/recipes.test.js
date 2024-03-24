import React from 'react';
import recipes from './recipes';
import { render } from '@testing-library/react';

describe('recipes component', () => {

  const mock_recipes = [
    { recipe: { label: 'Recipe_1', image: 'Recipeimage1.jpg', calories: 280, ingredients: ['Ingredient 1', 'Ingredient 2', 'Ingredient 3'] } },
    { recipe: { label: 'Recipe_2', image: 'Recipeimage2.jpg', calories: 350, ingredients: ['Ingredient 4', 'Ingredient 5', 'Ingredient 6'] } }

  ];

  test('gets the list of recipes', () => {

    const { getByText } = render(<recipes r={mock_recipes} />);
    expect(getByText('Recipe_1')).toBeInTheDocument();
    expect(getByText('Recipe_2')).toBeInTheDocument();

  });

  test('get the correct number of recipes', () => {

    const { getAllByTestId } = render(<recipes r={mock_recipes} />);
    
    expect(getAllByTestId('recipe-item')).toHaveLength(mock_recipes.length);


  });
});
