const RecipeList = ({ recipes, name }) => {
  return (
    <div className="recipe-list">
      <h2>{ name }</h2>
      {recipes.map(recipe => (
        <div className="recipe-preview" key={recipe.id} >
          <h2>{ recipe.name }</h2>
          <p>{ recipe.course }</p>
          <p>{ recipe.servings }</p>
          <p>{ recipe.prep }</p>
          <p>{ recipe.cook }</p>
          <p>{ recipe.total }</p>
          <p>{ recipe.ingredients }</p>
          <p>{ recipe.instructions }</p>
        </div>
      ))}
    </div>
  );
}

export default RecipeList;