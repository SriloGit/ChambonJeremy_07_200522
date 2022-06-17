import { crossCloseList } from "./tagclose.js";
import { htmlAdd } from "./htmladd.js";

//DOM
const ingredientsTags = document.getElementById("ingredients__form");
const ustensilsTags = document.getElementById("ustensils__form");
const applianceTags = document.getElementById("appliance__form");
const ingredientsInput = document.getElementById("ingredients");
const ustensilsInput = document.getElementById("ustensils");
const applianceInput = document.getElementById("appliances");

/** Open lists
 * @param {Element} - Used button
 */
export function openList(button) {
  // Opening of lists
  switch (button.id) {
    case "ingredients__button":
      //Display the list of ingredient
      button.parentNode.lastChild.setAttribute(
        "class",
        "list-group display-block ingredients__list border-radius--bottom col-sm-12"
      );

      // Change of attribute class to have the right display
      ingredientsInput.setAttribute("class", htmlAdd.ingredient.tagInputOpen);
      ingredientsTags.parentNode.setAttribute(
        "class",
        "col-sm-12 col-lg-6 z-index--100"
      );

      break;
    case "ustensils__button":
      button.parentNode.lastChild.setAttribute(
        "class",
        "list-group display-block ustensils__list border-radius--bottom col-sm-12"
      );
      ustensilsInput.setAttribute("class", htmlAdd.ustensil.tagInputOpen);
      ustensilsTags.parentNode.setAttribute(
        "class",
        "col-sm-4 col-lg-4 z-index--100"
      );

      break;
    case "appliance__button":
      button.parentNode.lastChild.setAttribute(
        "class",
        "list-group display-block appliances__list border-radius--bottom col-sm-12 "
      );
      applianceInput.setAttribute("class", htmlAdd.appliance.tagInputOpen);
      applianceTags.parentNode.setAttribute(
        "class",
        "col-sm-4 col-lg-2 z-index--100"
      );
      break;
  }
}

/**Close lists
 * @param {Element} - Used button
 */
export function closeList(button) {
  // Closing of the lists
  switch (button.id) {
    case "ingredients__button":
      // Close the list of ingredient
      button.parentNode.lastChild.setAttribute(
        "class",
        "list-group display-none ingredients__list border-radius--bottom col-sm-12"
      );
      // Change of attribute class to have the right display
      crossCloseList(
        ingredientsTags,
        ingredientsInput,
        htmlAdd.ingredient.classAddListClose
      );

      break;
    case "ustensils__button":
      button.parentNode.lastChild.setAttribute(
        "class",
        "list-group display-none ustensils__list border-radius--bottom col-sm-12"
      );

      crossCloseList(
        ustensilsTags,
        ustensilsInput,
        htmlAdd.ustensil.classAddListClose
      );

      break;
    case "appliance__button":
      button.parentNode.lastChild.setAttribute(
        "class",
        "list-group display-none appliances__list border-radius--bottom col-sm-12 "
      );

      crossCloseList(
        applianceTags,
        applianceInput,
        htmlAdd.appliance.classAddListClose
      );

      break;
  }
}
