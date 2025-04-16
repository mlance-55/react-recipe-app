import React, { useState } from "react";

function RecipeCreate({createNewRecipe}) {
const initialRecipeData ={
  name: "",
  cuisine: "",
  photo: "",
  ingredients: "",
  preparation: "",
};

const [recipeData, setRecipeData] = useState(initialRecipeData);

const handleChange = ({target}) =>{
  setRecipeData({
    ...recipeData,
    [target.name]: target.value,
  });
}

const handleSubmit = (event) => {
  event.preventDefault();
  createNewRecipe(recipeData);
  setRecipeData(initialRecipeData);
}

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers.
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                name="name"
                type="text"
                placeholder="Name"
                value={recipeData.name}
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                name="cuisine"
                type="text"
                placeholder="Cuisine"
                value={recipeData.cuisine}
                onChange={handleChange}
                />
            </td>
            <td>
              <input
                name="photo"
                type="url"
                placeholder="Photo URL"
                value={recipeData.photo}
                onChange={handleChange}
              />
            </td>
            <td>
              <textarea 
                name="ingredients"
                placeholder="Ingredients"
                value={recipeData.ingredients}
                onChange={handleChange}
              />
            </td>
            <td>
              <textarea
                name="preparation"
                placeholder="Preparation"
                value={recipeData.preparation}
                onChange={handleChange}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
