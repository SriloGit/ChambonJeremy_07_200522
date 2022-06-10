class Search {
    constructor(recipes) {
        this.recipes = recipes
    }
    search(query) {
        return this.filterRecipe(query)
    }
}

class recipeNameSearch extends Search {
    constructor(recipes) {
        super(recipes)
    }
    filterRecipes(query) {
        return this.recipes.filter(recipes =>
            recipes.name.toLowerCase().includes(query.toLowerCase())
        )
    }
}

class recipeIngredientsSearch extends Search {
    constructor(recipes) {
        super(recipes)
    }
}

class recipeDevicesSearch extends Search {
    constructor(recipes) {
        super(recipes)
    }
}

class recipeUstensilsSearch extends Search {
    constructor(recipes) {
        super(recipes)
    }
}