/**Class to create a new gallery with the tag research input*/
export class TagInput {
  /** Create the research
   * @param {NodeList} list - List of tags to sort
   * @param {string} research - Research value
   */
  constructor(list, research) {
    this._list = list;
    this._research = research.trim().toLowerCase();
  }

  /**Find ingredients matching the research
   * @return {} List of ingredients matching the research
   */
  listIngredient() {
    let listArray = [];
    let ingredientItem;

    this._list.forEach((li) => {
      if (li.dataset.ingredient.toLowerCase().includes(this._research)) {
        ingredientItem = `
        <li data-ingredient="${li.dataset.ingredient}" class ="list-group-item background-primary ingredient__item col-4 col-sm-4 display-inline"> ${li.dataset.ingredient} </li>`;

        listArray.push(ingredientItem);
      }
    });
    return listArray.join(" ");
  }

  /**Find ustensils matching the research
   * @return {} List of ustensils matching the research
   */
  listUstensils() {
    let listArray = [];
    let ustensilItem;
    this._list.forEach((li) => {
      if (li.dataset.ustensil.toLowerCase().includes(this._research)) {
        ustensilItem = `
        <li data-ustensil="${li.dataset.ustensil}" class ="list-group-item background-tertiary col-4 col-sm-6 col-lg-6 display-inline ustensil__item"> ${li.dataset.ustensil} </li>`;

        listArray.push(ustensilItem);
      }
    });

    return listArray.join(" ");
  }

  /**Find appliance matching the research
   * @return {} List of appliance matching the research
   */
  listAppliance() {
    let listArray = [];
    let applianceItem;
    this._list.forEach((li) => {
      if (li.dataset.appliance.toLowerCase().includes(this._research)) {
        applianceItem = `
        <li data-appliance="${li.dataset.appliance}" class ="list-group-item background-secondary col-4 col-sm-6 col-lg-12 display-inline appliance__item"> ${li.dataset.appliance} </li>`;

        listArray.push(applianceItem);
      }
    });

    return listArray.join(" ");
  }
}
