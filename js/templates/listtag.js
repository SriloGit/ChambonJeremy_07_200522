/**Class to create the lists of tags*/
export class ListTag {
  /** Create a list for tags 
   * @param {Array} recipes - Recipes
   */
  constructor(recipes) {
    this._recipes = recipes;
    this._ingredients = recipes.ingredients;
    this._appliances = recipes.appliances;
    this._ustensils = recipes.ustensils;
  }

  /** Create list of ingredients
   * @return {HTMLUListElement} - List of ingredients
   */
  createListIngredients() {
    const $wrapper = document.createElement("ul");
    $wrapper.setAttribute(
      "class",
      "list-group display-none ingredients__list border-radius--bottom col-sm-12"
    );

    const ingredientList = `
      ${this._ingredients}
            `;

    $wrapper.innerHTML = ingredientList;
    return $wrapper;
  }

  /** Create list of apppliance
   * @return {HTMLUListElement} - List of appliance
   */
  createListAppliance() {
    const $wrapper = document.createElement("ul");
    $wrapper.setAttribute(
      "class",
      "list-group display-none appliances__list border-radius--bottom col-sm-12 "
    );

    const applianceList = `
      ${this._appliances}
            `;

    $wrapper.innerHTML = applianceList;
    return $wrapper;
  }

  /** Create list of ustensils
   * @return {HTMLUListElement} - List of ustensils
   */
  createListUstensils() {
    const $wrapper = document.createElement("ul");
    $wrapper.setAttribute(
      "class",
      "list-group display-none ustensils__list border-radius--bottom col-sm-12"
    );

    const ustensilsList = `
      ${this._ustensils}
            `;

    $wrapper.innerHTML = ustensilsList;
    return $wrapper;
  }
}
