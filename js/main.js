import { recipes } from "../data/recipes.js";
import { crossOpen, crossClose } from "./utility/utils.js";
import { searchBar } from "./modules/searchbar.js";
import { gallery } from "./modules/gallery.js";
import { openList, closeList } from "./utility/openclosetagslist.js";

/** Init index */
async function init() {
  const tagsBtn = document.querySelectorAll(".tags__button");

  // Init gallery
  gallery(recipes);

  // Open and close tags list
  tagsBtn.forEach((button) =>
    button.addEventListener("click", function (e) {
      e.preventDefault();
      button.innerHTML = "";
      if (button.getAttribute("class") != "tags__button open") {
        crossOpen(button);
        openList(button);
      } else {
        crossClose(button);
        closeList(button);
      }
    })
  );

  searchBar(recipes);
}

init();