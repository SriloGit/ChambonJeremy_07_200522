/**Class to create a new gallery with the tag research*/
export class TagChoose {
  /** Create the research
   * @param {Array} recipes - Recipes
   * @param {string} research - Research value
   */
  constructor(recipes, research) {
    this._recipes = recipes;
    this._research = research.toLowerCase();
  }

  /**Find the correct recipes and add them to a new array
   * @return {array} New array with recipes
   */
  tagChoosen() {
    let recipesArray = this._recipes.filter((recipe) => {

      // Get the ingredient in lower case
      let ingredientArray = recipe.ingredients.map((item) =>
        item.ingredient.toLowerCase()
      );

      let ustensilsArray = recipe.ustensils.map((ustensil) =>
        ustensil.toLowerCase()
      );

      return (
        recipe.appliance.toLowerCase().includes(this._research) ||
        ustensilsArray.includes(this._research) ||
        ingredientArray.includes(this._research)
      );
    });

    return recipesArray;
  }
}
