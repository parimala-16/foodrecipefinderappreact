const searchButton = document.getElementById('search-button');
const recipesList = document.getElementById('recipe');
const recipeContent = document.querySelector('.recipe-content');
const closeButton = document.getElementById('close-button');


searchButton.addEventListener('click', getRecipesList);
recipesList.addEventListener('click', getrecipe);
closeButton.addEventListener('click', () => {

    recipeContent.parentElement.classList.remove('showRecipe');
});

//get Recipe list
function getRecipesList() {
    let searchinput = document.getElementById('search-name').value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchinput}`)
        .then(resp => resp.json())
        .then(data => {

            let html = "";

            if (data.recipes) {
                data.recipes.forEach(recipe => {
                    html += `
                    <div class = "recipe-item" data-id = "${recipe.id}">
                        <div class = "recipe-img">
                            <img src = "${recipe.recipepic}" alt = "food">
                        </div>
                        <div class = "meal-name">
                            <h3>${recipe.recipe}</h3>
                            <a href = "#" class = "recipe-button">Get Recipe</a>
                        </div>
                    </div>
                `;
                });
                recipesList.classList.remove('notFound');
            } 
            else 
            {
                html = "Sorry, we could not find any recipe";
                recipesList.classList.add('notFound');
            }

            recipesList.innerHTML = html;
        });
}


//get recipe process
function getrecipe(r) {
    r.preventDefault();
    if (r.target.classList.contains('recipe-button')) {
        let recipeItem = r.target.parentElement.parentElement;
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeItem.dataset.id}`)
            .then(resp => resp.json())
            .then(data => recipeModal(data.recipes));
    }
}

// Modal box for recipe
function recipeModalbox(recipe) {
    console.log(recipe);
    recipe = recipe[0];
    let html = `
        <h2 class = "recipe-title">${recipe.strRecipe}</h2>
        <p class = "recipe-category">${recipe.strRecipeCategory}</p>
        <div class = "recipe-instructions">
            <h3>Instructions to follow:</h3>
            <p>${recipe.strInstructions}</p>
        </div>
        <div class = "recipe-img">
            <img src = "${recipe.strRecipeThumb}">
        </div>
        <div class = "recipes-link">
            <a href = "${recipe.strYoutube}" target = "_blank">Watch the Video</a>
        </div>
    `;
    mealDetailsContent.innerHTML = html;
    mealDetailsContent.parentElement.classList.add('showRecipe');
}