/** Display error message
 * @param {string} errorMessage - Text of the error message
 */
 export function errorMessage(errorMessage) {
    const recipesSection = document.querySelector("#recipes");
  
    const errorSearch = document.createElement("p");
    errorSearch.setAttribute("class", "errorSearch");
    errorSearch.innerHTML = errorMessage;
    recipesSection.appendChild(errorSearch);
  }
  
  /** Change the arrow direction when the list is open
   * @param {Element} button - Clicked button
   */
  export function crossOpen(button) {
    const arrowUp = document.createElement("i");
    arrowUp.setAttribute("class", "fa-solid fa-angle-up");
    button.appendChild(arrowUp);
    button.setAttribute("class", "tags__button open");
  }
  
  /** Change the arrow direction when the list is closed
   * @param {Element} button - Clicked button
   */
  export function crossClose(button) {
    const arrowDown = document.createElement("i");
    arrowDown.setAttribute("class", "fa-solid fa-angle-down");
    button.appendChild(arrowDown);
    button.setAttribute("class", "tags__button");
  }
  
  /** Get the tag dataset
   * @return {ParentNode} dataset.ingredient || dataset.ustensil || dataset.appliance
   */
  export function tagDataset(item) {
    if (item.dataset.ingredient) {
      return item.dataset.ingredient;
    } else if (item.dataset.ustensil) {
      return item.dataset.ustensil;
    } else {
      return item.dataset.appliance;
    }
  }
  
  /** Function to avoid adding the same tag
   * @param {string} htmlAddListItemOpen - CSS
   */
  export function updateTagsListIngredient(htmlAddListItemOpen) {
    let tagsChoosenIngredient = Array.from(
      document.querySelectorAll(".tag__item--ingredient")
    );
    let tagsListIngredient = Array.from(
      document.querySelectorAll(".ingredient__item")
    );
    if (tagsChoosenIngredient.length >= 1) {
      for (let i = 0; i < tagsChoosenIngredient.length; i++) {
        for (let y = 0; y < tagsListIngredient.length; y++) {
          if (tagsListIngredient[y].dataset.ingredient.includes(tagsChoosenIngredient[i].dataset.ingredient)){
            tagsListIngredient[y].setAttribute("class", htmlAddListItemOpen);
          }
        }
      }
    }
  }
  
  /** Function to avoid adding the same tag
   * @param {string} htmlAddListItemOpen - CSS
   */
  export function updateTagsListUstensil(htmlAddListItemOpen) {
    let tagsChoosenUstensil = Array.from(
      document.querySelectorAll(".tag__item--ustensil")
    );
    let tagsListUstensil = Array.from(
      document.querySelectorAll(".ustensil__item")
    );
    if (tagsChoosenUstensil.length >= 1) {
      for (let i = 0; i < tagsChoosenUstensil.length; i++) {
        for (let y = 0; y < tagsListUstensil.length; y++) {
          if (
            tagsListUstensil[y].dataset.ustensil.includes(
              tagsChoosenUstensil[i].dataset.ustensil
            )
          ) {
            tagsListUstensil[y].setAttribute("class", htmlAddListItemOpen);
          }
        }
      }
    }
  }
  
  /** Function to avoid adding the same tag
   * @param {string} htmlAddListItemOpen - CSS
   */
  export function updateTagsListAppliance(htmlAddListItemOpen) {
    let tagsChoosenAppliance = Array.from(
      document.querySelectorAll(".tag__item--appliance")
    );
    let tagsListAppliance = Array.from(
      document.querySelectorAll(".appliance__item")
    );
    if (tagsChoosenAppliance.length >= 1) {
      for (let i = 0; i < tagsChoosenAppliance.length; i++) {
        for (let y = 0; y < tagsListAppliance.length; y++) {
          if (
            tagsListAppliance[y].dataset.appliance.includes(
              tagsChoosenAppliance[i].dataset.appliance
            )
          ) {
            tagsListAppliance[y].setAttribute("class", htmlAddListItemOpen);
          }
        }
      }
    }
  }
  /** Function to search the name of a recipe in array
   * @param {string} recipes - Recipe name
   * @param {string} input - Input of user
   * @return {boolean} result - Input exist in array
   */
  export function isInputInRecipes(recipes, input){
    let result = false;
    for (let i =0; i < recipes.length; i++){
      for (let y=0; y < input.length; y++){
        if(input[y] !== recipes[i+y]){
          result = false
          break;
        }else{
          result = true
        }
      }
    }
    return result;
  }

  export function isInputInRecipes2(recipes, input){
    let match = 0;
    for (let i =0; i < recipes.length; i++){
      for (let y=0; y < input.length; y++){
        if(input[y] !== recipes[i+y]){
          match++;
        }
        if(match === input.length){
          return true;
        }
      }
      return false;
    }
  }
/** Function to search the name of a recipe in array
   * @param {string} input - Input of user
   * @param {string} recipes - Recipe name
   * @return {boolean} result - Input exist in array
   */
  export function includes(input, recipe){
    let match = 0;
    
    for(let j=0; j<recipe.length; j++) { //on parcours chaque élément de la longue chaine de caract dans laquelle on fouille
      if(recipe[j] === input[0]) { // Lorsqu'on tombe sur un caractère qui correspond au premier caractère de la chaine saisie,
        for(let k=0; k<input.length; k++) { // on parcours simultanément la chaine saisie a partir du début et la chaine de base à partir de la position où on a trouvé un caractère commun au premier,
          if(input[k] === recipe[k+j]) {
            match ++; // on compte le nombre de caractère qui coincident
          }
        }
        if (match === input.length) return true; // si la somme des coincidences correspond à la somme taille de la chaine saisie, alors on a trouvé une occurence
      }
    }
    
    return false; // Si l'excécution du code arrive ici, cela signifie qu'il n'y a pas d'occurence.
  }