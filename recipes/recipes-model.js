const db = require('../data/db-config');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db.select("*").from('recipes')
}

function getShoppingList(id) {
    return db('ingredients')
    .join('recipe_ingredients')
    .select('recipe_ingredients.quantity', 'recipe_ingredients_id', "ingredients.id", 'ingredients.name')
    .where({'ingredient_id': id})
    .then(ingredients => {
        if (ingredients) {
            return ingredients
        } else {
            return null
        }
    })
}

function getInstructions() {
    return db('recipe_ingredients').join('recipes')
    .select('recipes.steps', 'recipes.recipes_id', 'recipe_ingredients.quantity').where('recipe_id', id)
}