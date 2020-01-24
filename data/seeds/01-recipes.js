
exports.seed = function(knex, Promise) {
  return knex('recipes').insert([
    {id: 1, title: "Grilled Cheese", steps: "Put it in the pan and cook it"},
    {id : 2, title: "Spaghetti", steps: "boil noodles and heat sauce"}
  ])
  

};
