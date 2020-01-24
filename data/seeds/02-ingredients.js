
exports.seed = function(knex, Promise) {
  return knex('ingredients').insert([
    {id: 1, name: "bread"},
    {id: 2, name: "butter"},
    {id: 3, name: "cheese"},
    {id: 4, name: "noodles"},
    {id: 5, name: "sauce"}
  ])
 
};
