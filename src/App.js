import React, { useState } from 'react';
import './App.css';
import Axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import Recipe from './components/Recipe/Recipe';
import { Container, Row, Alert, Form } from 'react-bootstrap';

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState(false);

  const url = `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}`

  const getData = async () => {
    if (query === "") {
      setAlert("Please Insert A Dish Name")
      setQuery("");
      setRecipes([]);
    } else {
      const result = await Axios.get(url);
      if (result.data.hits.length === 0) {
        setAlert("Please Enter A Valid Dish Name");
        setQuery("");
        setRecipes([]);
        return;
      }
      setRecipes(result.data.hits);
      setQuery("");
      setAlert(false);
    }
  }

  const onSubmit = (event) => {
    event.preventDefault();
    getData();
  }

  const onChange = (event) => {
    setQuery(event.target.value);
  }

  let recipeList = null;

  if (recipes.length !== 0) {
    recipeList = recipes.map(recipe => {
      return (
        <Recipe
          key={uuidv4()}
          recipe={recipe.recipe}
        />
      )
    })
  }

  return (
    <Container>
      <div className="App">
        <h1 onClick={getData} className="appHeader">Recipe Search App</h1>
        {alert ? <Alert variant="danger">{alert}</Alert> : null}
        <form onSubmit={onSubmit}>
          <input
            type="text"
            type="text"
            placeholder="Search for recipe here"
            autoComplete="off"
            onChange={onChange}
            value={query} />
          <input
            type="submit"
            value="Search" />
        </form>
        <Row>
          {recipeList}
        </Row>
      </div>
    </Container>
  );
}

export default App;
