import React, {useState} from 'react'
import Axios from 'axios';
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Recipe from "./components/Recipe"





const App = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const app_id = "5c1d1ca7";
  const app_key = "6375a369980e5c22fc14d727b9b52aa1";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}`;

  const getData = async () => {
      const result = await Axios.get(url);
      setRecipes(result.data.hits);
      console.log(result);
      setQuery("");
  }

  const onChange = e => setQuery(e.target.value);
  
  const onSubmit = e => {
    e.preventDefault();
    getData();
  };

  return (
    <div className="App">
      <h1> Food recipe finder</h1>
      < form className ="form-buscar"  onSubmit={onSubmit}>

        <input type="text" placeholder="Search Food" 
        autoComplete ="off" 
        onChange={onChange}
        value={query} 
        />
        <input type="submit" value="Search"/>
      </form>
      <div className="recipes">
        {recipes !== [] &&
          recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe} />)}
      </div>
    </div>
  )
}

export default App
