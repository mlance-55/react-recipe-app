//import { prepareCopy } from "immer/dist/internal.js";
import React from "react";


function RecipeView({recipe, deleteRecipe}){
  return (
    <table>
      <tbody>
        <tr>
          <td>{recipe.name}</td>
          <td>{recipe.cuisine}</td>
          <td><img src={recipe.photo} alt={recipe.name}/></td>
          <td className="content_td"><p>{recipe.ingredients}</p></td>
          <td className="content_td"><p>{recipe.preparation}</p></td>
          <td><button name="delete" onClick={deleteRecipe}>Delete</button></td>
        </tr>
      </tbody>
    </table>
  )
}


function RecipeList({recipes, deleteRecipe}) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked.

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe, index) =>
            <RecipeView
              key={index}
              index={index}
              recipe={recipe}
              deleteRecipe={()=>deleteRecipe(index)}
            />
          )}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
