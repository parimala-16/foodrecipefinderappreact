import uuid from 'react-uuid';
import recipe from "./recipe";
import'./recipes.css';

const recipes = ({ recipes_list }) => {
    return (

        <div className="recipes-list">

            {recipes.map(recipe => (

                <recipe key={uuid()} recipe={recipes_list} />
                
            ))}

        </div>
    )
}

export default recipes
