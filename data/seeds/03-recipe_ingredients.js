
exports.seed = function(knex, Promise) {
  return knex('recipe_ingredients').insert([
    {id: 1, recipe_id: 1, ingredient_id: 1, quantity: "2 slices"},
    {id: 2, recipe_id: 1, ingredient_id: 2, quantity: "3 Tbs"},
    {id: 3, recipe_id: 1, ingredient_id: 3, quantity: "1-2 slices"},
    {id: 4, recipe_id: 2, ingredient_id: 4, quantity: "Half a box?"},
    {id: 5, recipe_id: 2, ingredient_id: 5, quantity: "Really depends, just guess"},
  ])

};
