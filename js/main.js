import { recipes } from "../data/recipes.js";

/**Create recipes array
 * @param {Array} recipes - All the recipes
 */
function displayData(recipes) {
  const recipesSection = document.querySelector("#recipes");

  //Constructor pattern to create the recipes array
  recipes.forEach((recipe) => {
    const getRecipe = new GetRecipes(recipe);
    const Template = new RecipeCard(getRecipe);
    recipesSection.appendChild(Template.createRecipeCard());
  });
}

/** Index init */
async function init() {
  displayData(recipes);
}

init();
