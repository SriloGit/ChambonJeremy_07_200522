import { getRecipes } from "../models/recipes.js";
import { RecipeCard } from "../templates/recipecard.js";
import { errorMessage } from "../utility/utils.js";
import { tagsUtils, clearTagsLists } from "../utility/tagsutils.js";
import {
  applianceList,
  createLists,
  ingredientList,
  ustensilsList,
} from "./lists.js";
import { searchTagsInput } from "../utility/searchtagsinput.js";

/**Create recipes array
 * @param {Array} recipes - Recipes
 */
export function displayData(recipes) {
  const recipesSection = document.querySelector("#recipes");
  // Constructor patten to get all the recipes
  if (recipes.length >= 1) {
    recipes.forEach((recipe) => {
      const getRecipe = new getRecipes(recipe);
      const Template = new RecipeCard(getRecipe);
      recipesSection.appendChild(Template.createRecipeCard());
    });
  } else {
    clearGallery();
    errorMessage(
      `Aucune recette ne correspond à votre critère... Vous pouvez chercher "tarte aux pommes", "poisson", etc...`
    );
  }
}

/**Clear all the recipe in the gallery*/
export function clearGallery() {
  const recipesSection = document.querySelector("#recipes");
  recipesSection.innerHTML = "";
}

/**Create the gallery
 * @param {array} recipes - Deplayed data
 */
export function gallery(recipes) {
  clearGallery();
  displayData(recipes);
  clearTagsLists();

  const Template = tagsUtils(recipes);
  createLists(Template);

  ingredientList(recipes);
  ustensilsList(recipes);
  applianceList(recipes);

  searchTagsInput(recipes);
}