import { TagChoose } from "../Class/tagchoose.js";
import { Tags } from "../models/tags.js";
import { ListTag } from "../templates/listtag.js";

/** Creation of tags
 * @param  {array} recipes - Recipes
 */
export function tagsUtils(recipes) {
  //Creation of class
  const tagsGet = new Tags(recipes);
  const template = new ListTag(tagsGet);
  return template;
}

/**Search by tag
 * @param  {array} recipes - Recipes
 * @param {string} tag - Tag to find in recipes
 */
export function searchTag(recipes, tag) {
  const recipesResearch = new TagChoose(recipes, tag);
  const newRecipes = recipesResearch.tagChoosen();
  return newRecipes;
}

/** Clear the list of tag */
export function clearTagsLists() {
  document.getElementById("ingredients__form").lastChild.remove();
  document.getElementById("ustensils__form").lastChild.remove();
  document.getElementById("appliance__form").lastChild.remove();
}
