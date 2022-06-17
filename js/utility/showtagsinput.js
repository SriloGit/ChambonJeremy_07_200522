import { openList } from "./openclosetagslist.js";
import { crossOpen } from "./utils.js";

/** Display list of tags matching the input
 * @param {any} arrayList - Tags list
 * @param {Element} tagsList - Where to display the list
 * @param {HTMLElement} btn - Selected button to open the list
 * @param {string} errorMessageInput - Error message
 */
export function showTagsInput(arrayList, tagsList, btn, errorMessageInput) {
  if (arrayList.length >= 1) {
    tagsList.innerHTML = "";
    tagsList.innerHTML = arrayList;
    openList(btn);
    btn.innerHTML = "";
    crossOpen(btn);
  } else {
    tagsList.innerHTML = "";
    tagsList.innerHTML = errorMessageInput;
  }
}
