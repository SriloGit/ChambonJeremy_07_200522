import { Research } from "../class/research.js";
import { gallery, displayData, clearGallery } from "./gallery.js";
import { errorMessage } from "../utility/utils.js";
import { clearTagsOpen } from "../utility/tagsutils.js";

/** Init the search
 * @param {Array} recipes - Recipes
 */
export function searchBar(recipes) {
  // User use the search bar first
  const researchInput = document.getElementById("searchBar");
  const researchForm = document.getElementById("searchForm");

  // Event at submit
  researchForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Research value
    const research = researchInput.value;

    // Check if there is 3 letter
    const regexSup3letters = new RegExp(
      "^[:a-zA-ZÀ-ž0-9\\^\\(\\)\\?\\!\\+\\*,\\.\\'\"/°\\s]{3,}$"
    );
      // Test the research value with the regex
    if (regexSup3letters.test(research)) {
      // Get the correct recipes
      const recipesResearch = new Research(recipes, research);
      const newRecipes = recipesResearch.researchSort();
      gallery(newRecipes);
      return newRecipes;
    } else {
      clearGallery();
      errorMessage("Veuillez entrer au minimum 3 lettres pour votre recherche");
      displayData(recipes);
    }
  });
  researchForm.addEventListener("input", (event) => {
    event.preventDefault();

    const research = researchInput.value;
    clearTagsOpen();
    if (research.length >= 3) {
      const recipesResearch = new Research(recipes, research);
      const newRecipes = recipesResearch.researchSort();
      gallery(newRecipes);
      return newRecipes;
    } else {
      gallery(recipes);
    }
  });
}