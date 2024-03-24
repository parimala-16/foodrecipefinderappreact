import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import React, { useState, useEffect } from 'react';
import './app.css'
import login from './components/login';
import search from './components/search';
import recipes from './components/recipes';

function app() {

    const APP_ID = '144b06d9';
    const API_KEY = 'c411544cf373073dfdd222ed10cec52f';

    const [recipeslist, setRecipes] = useState([]);
    const [q, setQuery] = useState(''); 

    useEffect(() => {

        getRecipesList();

    }, [q]);

    const getRecipesList = async () => {
        const resp = await fetch(`https://api.edamam.com/search?q=${q}&app_id=${APP_ID}&app_key=${API_KEY}`);
        const recipedata = await resp.json();
        setRecipes(recipedata.hits);
    }

    return (
        <Router>
            <div className="app">
                <Routes> 
                    <Route path="/" element= {<login />}/>
                    <Route path="/search" element={
                        <search getQuerry={(q) => setQuery(q)}/>
                    } />
                </Routes>
                {q ?
                    <recipes recipes={recipeslist} />
                    :
               ''
                }
            </div>
        </Router>
    )
}

export default app;
