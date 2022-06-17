import { tagOpen } from "../utility/tagopen.js";
import { tagClose } from "../utility/tagclose.js";
import { searchTag } from "../utility/tagsutils.js";
import { gallery } from "./gallery.js";
import { closeList } from "../utility/openclosetagslist.js";
import {
  crossClose,
  updateTagsListIngredient,
  updateTagsListUstensil,
  updateTagsListAppliance,
} from "../utility/utils.js";
import { htmlAdd } from "../utility/htmladd.js";

const ingredientsTags = document.getElementById("ingredients__form");
const ustensilsTags = document.getElementById("ustensils__form");
const applianceTags = document.getElementById("appliance__form");

/** Init all list
 * @param {object} Template - List of created tags
 */
export function createLists(Template) {
  ingredientsTags.appendChild(Template.createListIngredients());
  ustensilsTags.appendChild(Template.createListUstensils());
  applianceTags.appendChild(Template.createListAppliance());
}

/** Update the tags list
 * @param {object} Template - Created object by class ListTag
 * @param {array} recipes - Recipes
 */
export function ingredientList(recipes) {
  let TagList = document.querySelectorAll(".ingredient__item");
  TagList.forEach((item) =>
    item.addEventListener("click", function () {
      let ingredient = item.dataset.ingredient;
      // If ingredients is not selected
      if (item.getAttribute("class") != htmlAdd.ingredient.listItemOpen) {
        // Display ingredient
        tagOpen(
          ingredient,
          htmlAdd.ingredient.tagItem,
          htmlAdd.ingredient.classAddDataSet
        );
        // Research with the selected tag
        const newRecipes = searchTag(recipes, ingredient);
        gallery(newRecipes);
        ingredientsTags.reset();
      }

      const ingredientButton = document.getElementById("ingredients__button");
      if (ingredientButton.getAttribute("class") == "tags__button open") {
        ingredientButton.querySelector("i").remove();
        closeList(ingredientButton);
        crossClose(ingredientButton);
      }

      // Delete the selected ingredient from the list
      tagClose(htmlAdd.ingredient.listItemClose, recipes, ingredientButton);

      // Prevent the tag to be added again
      updateTagsListIngredient(htmlAdd.ingredient.listItemOpen);
    })
  );
}

/** Update the tags list
 * @param {object} Template - Created object by class ListTag
 * @param {array} recipes - Recipes
 */
export function ustensilsList(recipes) {
  
  let TagList = document.querySelectorAll(".ustensil__item");
  TagList.forEach((item) =>
    item.addEventListener("click", function () {
      let ustensil = item.dataset.ustensil;
      
      if (item.getAttribute("class") != htmlAdd.ustensil.listItemOpen) {
        
        tagOpen(
          ustensil,
          htmlAdd.ustensil.tagItem,
          htmlAdd.ustensil.classAddDataSet
        );
        
        const newRecipes = searchTag(recipes, ustensil);
        gallery(newRecipes);
        ustensilsTags.reset();
      }
      const ustensilsButton = document.getElementById("ustensils__button");
      if (ustensilsButton.getAttribute("class") == "tags__button open") {
        ustensilsButton.querySelector("i").remove();
        closeList(ustensilsButton);
        crossClose(ustensilsButton);
      }

      
      tagClose(htmlAdd.ustensil.listItemClose, recipes, ustensilsButton);

      
      updateTagsListUstensil(htmlAdd.ustensil.listItemOpen);
    })
  );
}

/** Update the tags list
 * @param {object} Template - Created object by class ListTag
 * @param {array} recipes - Recipes
 */
export function applianceList(recipes) {
  
  let TagList = document.querySelectorAll(".appliance__item");
  TagList.forEach((item) =>
    item.addEventListener("click", function () {
      let appliance = item.dataset.appliance;
      
      if (item.getAttribute("class") != htmlAdd.appliance.listItemOpen) {
        
        tagOpen(
          appliance,
          htmlAdd.appliance.tagItem,
          htmlAdd.appliance.classAddDataSet
        );
        
        const newRecipes = searchTag(recipes, appliance);
        gallery(newRecipes);
        applianceTags.reset();
      }

      const appliancetButton = document.getElementById("appliance__button");
      if (appliancetButton.getAttribute("class") == "tags__button open") {
        appliancetButton.querySelector("i").remove();
        closeList(appliancetButton);
        crossClose(appliancetButton);
      }

      
      tagClose(htmlAdd.appliance.listItemClose, recipes, appliancetButton);

      
      updateTagsListAppliance(htmlAdd.appliance.listItemOpen);
    })
  );
}
