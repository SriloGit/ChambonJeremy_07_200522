// Recipes Card builder

function articleBuilder(recipe) {
    let content = document.querySelector("#gallery");
    content.insertAdjacentHTML(
      "beforeend",
      `<article>        
      <div class="cardtext">
        <h2 class="cardtext-recipe-name" >${recipe.name}</h2>
        <span class="cardtext-cooking-time">
        <span class="cardtext-cooking-time-number">${recipe.time} min</span>
        </span>
        <div class = "cardtext-ingredients">
        <ul id="cardtext-ingredients-list-${recipe.id}" class="cardtext-ingredients-list"></ul>
        </div>
        <div class = "cardtext-description">${recipe.description}
      </div>
      
    </article>`
    );

    // Used to add the correct unit of measurement
    
    let ingredientsList = content.querySelector(
      "#cardtext-ingredients-list-" + recipe.id
    );
  
    // Simplify ingredients quantity with correct unit of measurement
  
    function recipeIngredientsQuantityMeasurement(ingredient) {
      if (ingredient.quantity) {
        if (ingredient.unit) {
          switch (ingredient.unit) {
            case "grammes":
              ingredientsList.insertAdjacentHTML(
                "beforeend",
                `<li>${ingredient.ingredient} : ${ingredient.quantity} g</li>`
              );
              break;
            case "cuillères à soupe":
              ingredientsList.insertAdjacentHTML(
                "beforeend",
                `<li>${ingredient.ingredient} : ${ingredient.quantity} cuillères</li>`
              );
              break;
              case "cuillère à soupe":
              ingredientsList.insertAdjacentHTML(
                "beforeend",
                `<li>${ingredient.ingredient} : ${ingredient.quantity} cuillère</li>`
              );
              break;
              case "cuillère à café":
              ingredientsList.insertAdjacentHTML(
                "beforeend",
                `<li>${ingredient.ingredient} : ${ingredient.quantity} cuillère</li>`
              );
              break;
            case "cuillères à café":
              ingredientsList.insertAdjacentHTML(
                "beforeend",
                `<li>${ingredient.ingredient} : ${ingredient.quantity} cuillères</li>`
              );
              break;
            default:
              ingredientsList.insertAdjacentHTML(
                "beforeend",
                `<li>${ingredient.ingredient} : ${ingredient.quantity} ${ingredient.unit}</li>`
              );
          }
        } else {
          ingredientsList.insertAdjacentHTML(
            "beforeend",
            `<li>${ingredient.ingredient} : ${ingredient.quantity}</li>`
          );
        }
      } else {
        ingredientsList.insertAdjacentHTML(
          "beforeend",
          `<li>${ingredient.ingredient}</li>`
        );
      }
    }
  // Add the correct unit for each ingredient in the recipe
    recipe.ingredients.forEach((ingredient) =>
    recipeIngredientsQuantityMeasurement(ingredient)
    );
  }
  
  // Get all the recipes and create the card for each
  function galleryBuilder(recipes) {
    recipes.forEach((recipe) => articleBuilder(recipe));
  }
  
  // Init
  
  async function init() {
  
    galleryBuilder(recipes);
  }

  init();