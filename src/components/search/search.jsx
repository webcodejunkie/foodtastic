import { React, useState } from 'react';
import './search.scss'

import axios from 'axios';
import RecipeCard from '../recipe-card/recipe-card';
import PaginationView from '../recipe-card/views/pagination';

function Search() {

  const [item, setItem] = useState('');
  const [recipes, setRecipes] = useState([]);

  // function to make a request to spoonacular's API using a complexSearch get method
  const getSearch = () => {
    const apiKey = '?apiKey=e6b5b55108764b5fa188b27d750e61ce'
    const query = `&query=${item}&number=100`
    axios.get('https://api.spoonacular.com/recipes/complexSearch' + apiKey + query)
      .then((res) => {
        console.log(res.data.results);
        setRecipes(res.data.results)
      })
      .catch(error => console.log(error));
  }

  return (
    <div className='search-wrapper'>
      <div className='filters-wrapper'>
        <input className='search-input' type='text' placeholder='search recipes' onChange={(e) => setItem(e.target.value)} />
        <button className='search-button' type='submit' onClick={getSearch}>Search</button>
      </div>
      <ul className='suggestions'>
        <RecipeCard recipes={recipes} />
      </ul>
    </div>
  );
}

export default Search;

