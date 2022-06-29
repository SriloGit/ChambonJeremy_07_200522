/**Gallery creation by the research*/

import { includes } from "../utility/utils.js";
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
      let recipesArray = [];
      //let recipesIndex = 0;
  
      for (let i = 0; i < this._recipes.length; i++) {
        if (
          // check if the research value is the recipe existing in the database
          includes(this._research,this._recipes[i].name) || includes(this._research,this._recipes[i].description)
        ) {
          // add the recipe in the new array
          recipesArray.push(this._recipes[i]);
          //recipesIndex++;
        } else {
          // check if the research value is an ingredients existing in the database
          for (let y = 0; y < this._recipes[i].ingredients.length; y++) {
            if (
              includes(this._research,this._recipes[i].ingredients[y].ingredient)
            ) {
              // add the recipe in the new array
              recipesArray.push(this._recipes[i]);
              //recipesIndex++;
            }
          }
        }
      }
      return recipesArray;
    }
  }