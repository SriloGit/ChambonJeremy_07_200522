import { TagInput } from "../class/taginput.js";
import { showTagsInput } from "./showtagsinput.js";
import { closeList } from "./openclosetagslist.js";
import { crossClose,
  updateTagsListIngredient,
  updateTagsListUstensil,
  updateTagsListAppliance,
 } from "./utils.js";
import { gallery } from "../modules/gallery.js";
import { htmlAdd } from "./htmlAdd.js";
import {
  ingredientList,
  applianceList,
  ustensilsList,
} from "../modules/lists.js";

/**Research from tags input and update the lists
 * @param {array} - Recipes
 */
export function searchTagsInput(recipes) {
  const tagsInput = document.querySelectorAll(".tags__input");
  let Template;
  let ingredientsArrayList;
  let appliancesArrayList;
  let ustensilsArrayList;

  let ingredientsTagsList = document.querySelector(".ingredients__list");
  let ustensilsTagsList = document.querySelector(".ustensils__list");
  let applianceTagsList = document.querySelector(".appliances__list");

  let ingredientsTags = ingredientsTagsList.querySelectorAll("li");
  let ustensilsTags = ustensilsTagsList.querySelectorAll("li");
  let applianceTags = applianceTagsList.querySelectorAll("li");

  let ingredientBtn = document.getElementById("ingredients__button");
  let applianceBtn = document.getElementById("appliance__button");
  let ustensilBtn = document.getElementById("ustensils__button");

  // Event on input in tag
  tagsInput.forEach((input) =>
    input.addEventListener("input", function (e) {
      e.preventDefault();

      switch (e.target.id) {
        case "ingredients":
          // If the input is not empty display the list of matching ingredients or if it doesn't exist display a error message
          if (input.value != "") {
            Template = new TagInput(ingredientsTags, input.value);
            ingredientsArrayList = Template.listIngredient();

            showTagsInput(
              ingredientsArrayList,
              ingredientsTagsList,
              ingredientBtn,              
              htmlAdd.ingredient.errorMessageInput
            );

                ingredientList(recipes);
                // Prevent the tag to be added again
                updateTagsListIngredient(htmlAdd.ingredient.listItemOpen);
              } else {
                // Close the list and display all recipe
                gallery(recipes);
                closeList(ingredientBtn);
                ingredientBtn.innerHTML = "";
                crossClose(ingredientBtn);
                searchTagsInput(recipes);
                // Prevent the tag to be added again
                updateTagsListIngredient(htmlAdd.ingredient.listItemOpen);
              }          

          break;
        case "appliances":
          if (input.value != "") {
            Template = new TagInput(applianceTags, input.value);
            appliancesArrayList = Template.listAppliance();

            showTagsInput(
              appliancesArrayList,
              applianceTagsList,
              applianceBtn,
              htmlAdd.appliance.errorMessageInput
            );
            applianceList(recipes);
            updateTagsListAppliance(htmlAdd.ingredient.listItemOpen);
          } else {
            gallery(recipes);
            closeList(applianceBtn);
            applianceBtn.innerHTML = "";
            crossClose(applianceBtn);
            searchTagsInput(recipes);
            updateTagsListAppliance(htmlAdd.ingredient.listItemOpen);
          }

          break;
        case "ustensils":
          if (input.value != "") {
            Template = new TagInput(ustensilsTags, input.value);
            ustensilsArrayList = Template.listUstensils();

            showTagsInput(
              ustensilsArrayList,
              ustensilsTagsList,
              ustensilBtn,
              htmlAdd.ustensil.errorMessageInput
            );
            ustensilsList(recipes);
            updateTagsListUstensil(htmlAdd.ingredient.listItemOpen);
          } else {
            gallery(recipes);
            closeList(ustensilBtn);
            ustensilBtn.innerHTML = "";
            crossClose(ustensilBtn);
            searchTagsInput(recipes);
            updateTagsListUstensil(htmlAdd.ingredient.listItemOpen);
          }

          break;
      }
    })
  );
}
