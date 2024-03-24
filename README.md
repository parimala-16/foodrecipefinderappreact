FOOD RECIPE FINDER APP USING REACT

Commands for creating and running the application:-
nvm install versions 
npm install 
npm start 

Commands for git:-
git init
git add .  
git commit -m 'Description of commit'
git push

Components created:-
login
search
recipe
recipes
ingredients

Description:-
The application will serve as a platform where users can explore a variety of food recipes. It will integrate the Edamam API to fetch recipe data based on user queries. The goal is to create a user-friendly application that provides clear and concise information about food recipes, including ingredients, nutritional information, and cooking instructions.

Features List:-
-User Authentication: Implement user login and registration functionality.
-Recipe Search: Allow users to search for recipes based on ingredients, cuisine type, dietary restrictions, etc., using the Edamam API.
-Recipe Details: Display detailed information about recipes, including ingredients, nutritional facts, and preparation steps.
-User Dashboard: After logging in, users should have a dashboard displaying their search history and favorite recipes.
-Data Refresh: Implement functionality to refresh data periodically or on user request.


























## Components

### LoginPage

The LoginPage component allows users to log in with their email and password.

Props:
- None

### Recipe

The Recipe component displays details of a single recipe, including its name, image, and ingredients.

Props:
- `recipe`: An object containing information about the recipe, including its label, image, calories, and ingredients.

### RecipeIngredients

The RecipeIngredients component displays a list of ingredients for a recipe.

Props:
- `ings`: An array of ingredient objects.

### RecipeList

The RecipeList component displays a list of recipes.

Props:
- `recipes`: An array of recipe objects.

### SearchForm

The SearchForm component allows users to search for recipes by entering ingredients.

Props:
- `getQuerry`: A function to handle the search query.

## Dependencies

- React
- react-router-dom
- react-uuid

## Testing

To run tests for the application, use the following command:


## Contributing

Contributions to the project are welcome! To contribute, please follow these steps:
1. Fork the repository
2. Create a new branch: `git checkout -b feature-name`
3. Make your changes and commit them: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Credits

- [Edamam API](https://developer.edamam.com/)
- [React](https://reactjs.org/)
- [react-router-dom](https://reactrouter.com/)
