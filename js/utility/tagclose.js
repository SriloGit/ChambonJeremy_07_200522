import { gallery } from "../modules/gallery.js";
import { tagDataset, crossClose } from "./utils.js";
import { closeList } from "./openclosetagslist.js";
import { recipes } from "../../data/recipes.js";
import { Research } from "../class/research.js";
import { searchTag } from "./tagsutils.js";

/** Close tags list
 * @param {HTMLElement} tagsList - CSS
 * @param {HTMLElement} input - Used input
 * @param {string} classAddListClose - CSS
 */
export function crossCloseList(tagsList, input, classAddListClose) {
  input.setAttribute("class", classAddListClose);
  tagsList.parentNode.setAttribute("class", "col-sm-4 col-lg-2");
}

/** Close tag
 * @param {string} classAddTagItemClose - CSS
 * @param {Array} recipesSearch - Sorted recipes
 */
export function tagClose(classAddTagItemClose, recipesSearch, button) {
  let tagsCross = document.querySelectorAll(".svg__close");

  // Add event to each cross
  tagsCross.forEach((cross) =>
    cross.addEventListener("click", function (event) {
      event.preventDefault();

      // Get tags
      let item = cross.parentNode;
      tagsCross = document.querySelectorAll(".svg__close");

      cross.parentNode.remove();
      item.setAttribute("class", classAddTagItemClose);

      button.querySelector("i").remove();
      closeList(button);
      crossClose(button);

      let searchbarValue = document.getElementById("searchBar").value;

      // If there is more than 1 tag
      if (tagsCross.length > 1) {
        // Check value in searchbar
        if (searchbarValue) {
          // More than 3 letters ?
          const regexSup3letters = new RegExp(
            "^[:a-zA-ZÀ-ž0-9\\^\\(\\)\\?\\!\\+\\*,\\.\\'\"/°\\s]{3,}$"
          );

          if (regexSup3letters.test(searchbarValue)) {
            // Get the matching recipes
            const recipesResearch = new Research(recipes, searchbarValue);
            let newRecipes = recipesResearch.researchSort();
            let recipesAfterTag = newRecipes;

            // Research with remaining tags
            tagsCross.forEach((cross) => {
              let tag = tagDataset(item);
              let tagShow = tagDataset(cross.parentNode);
              if (tagShow != tag) {
                recipesAfterTag = searchTag(recipesAfterTag, tagShow);
                return recipesAfterTag;
              }
            });

            gallery(recipesAfterTag);
          }
          event.stopImmediatePropagation();
        } else {
          //Research with remaining tags
          let recipesAfterTag = recipes;
          tagsCross.forEach((cross) => {
            let tag = tagDataset(item);
            let tagShow = tagDataset(cross.parentNode);
            if (tagShow != tag) {
              recipesAfterTag = searchTag(recipesAfterTag, tagShow);
              return recipesAfterTag;
            }
          });

          gallery(recipesAfterTag);
          event.stopImmediatePropagation();
        }

        // No more tags but an input
      } else if (tagsCross.length <= 1 && searchbarValue) {
        // More than 3 letters ?
        const regexSup3letters = new RegExp(
          "^[:a-zA-ZÀ-ž0-9\\^\\(\\)\\?\\!\\+\\*,\\.\\'\"/°\\s]{3,}$"
        );

        if (regexSup3letters.test(searchbarValue)) {
          // Get the matching recipes
          const recipesResearch = new Research(recipes, searchbarValue);
          let newRecipes = recipesResearch.researchSort();
          gallery(newRecipes);
          event.stopImmediatePropagation();
        }

        // No tag, searchbar empty display all recipes
      } else {
        gallery(recipes);
        event.stopImmediatePropagation();
      }
    })
  );
}
