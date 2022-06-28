/**Gallery creation by the research*/
export class Research {
    /** Search creation
     * @param {Array} recipes - Recipes
     * @param {string} research - Search bar value
     */
    constructor(recipes, research) {
      this._recipes = recipes;
      this._research = research.toLowerCase();
    }
  
    /** Find the recipes and add them in a array
     * @return {array} Array of the correct recipes
     */
      researchSort() {
        let recipesArray = this._recipes.filter((recipe) => {
          let ingredientArray = recipe.ingredients.map((item) =>
            item.ingredient.toLowerCase()
          );
          return (
            recipe.name.toLowerCase().includes(this._research) ||
            recipe.description.toLowerCase().includes(this._research) ||
            ingredientArray.join().includes(this._research)
          );
        });
      return recipesArray;
    }
}