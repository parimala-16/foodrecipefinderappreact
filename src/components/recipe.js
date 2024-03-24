import ingredients from "./ingredients";
import './recipe.css'

const recipe = ({ r }) => {
    return (
        <div className="recipe">
            <div className="recipe-top">
                <img src={r.recipe.image} alt="img"/>

                <div className="recipe-details">
                    <h1 className="name">{r.recipe.label}</h1>
                    <p><strong>Calories :- </strong>{r.recipe.calories}</p>
                </div>
            </div>

            <div>
                <ingredients ings={r.recipe.ingredients} />
            </div>
        </div>
    )
}

export default recipe
