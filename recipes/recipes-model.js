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
    .select('recipe_ingredients.quantity', 'recipe_ingredients.id', "ingredients.id", 'ingredients.name')
    .where({'ingredient_id': id})
    .then(ingredients => {
        if (ingredients) {
            return ingredients
        } else {
            return null
        }
    })
}

function getInstructions(id) {
    return db('recipes')
    .where('id', id)
    .first();
    
}