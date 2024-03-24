import { useState  } from 'react'
import './search.css'

const search = ({ getQuerry }) => {

    const [s, setSearch] = useState('')

    const getSearch = g => {
        g.preventDefault();
        getQuerry(s)
    }

    const updateSearch = g => {
        setSearch(g.target.value)
    }

    return (

        <form 

            onSubmit={getSearch}
            className="search">
            <input 
                type="text" 
                className="bar" 
                value={s} 
                placeholder="Search for a Recipe"
                onChange={updateSearch}

            />
            <button type="submit" className="button-search">

                Search 
            
            </button>
        </form>
    )
}

export default search
