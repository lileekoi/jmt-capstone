import axios from "axios";
import React, { Component } from 'react';

class RecipeGenerator extends Component {
  constructor(props) {
    super(props)

    this.state = {
      recipes: []
    }
  }

  randomRecipe = () => {
    axios.get('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random', {
      headers: {
      'X-RapidAPI-Key': '4345d18bb2msh36394947b6da1e4p10a6c8jsne6fbbaf53c54'
      }
    })
        .then((response) => {
        console.log(response);
        this.setState({recipes: response.data.recipes })
    })
        .catch(error => {
        console.log(error)
        })
  }

  componentDidMount() {
    this.randomRecipe()
  }

  render() {
    const { recipes } = this.state
    console.log(recipes)
    return (
      <div>
        <h1>Random Recipe Generator</h1>
        {
          recipes.length ?
          recipes.map(recipe => 
          <div key={recipe.id}>
            <h2>{recipe.title}</h2>
            <h3>Servings: {recipe.servings}</h3>
            <h3>Cook Time: {recipe.readyInMinutes} minutes</h3>
            <a href={recipe.sourceUrl}><button>Go To Recipe</button></a>
            <h4>Instructions: {recipe.instructions}</h4>
            </div>) :
          null
        }
      </div>
    )
  }
}

export default RecipeGenerator;