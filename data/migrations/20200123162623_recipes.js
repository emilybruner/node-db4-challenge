
exports.up = async function(knex) {
  await knex.schema.createTable("recipes", (table) => {
      table.increments("id").unique()
      table.string("title").notNullable()
      table.string("steps").notNullable()

  })

  await knex.schema.createTable("ingredients", (table) => {
    table.increments("id").unique()
    table.string("name").notNullable()

})

  await knex.schema.createTable("recipe_ingredients", (table) => {
      table.increments("id").unique()
      table.integer("recipe_id")
      .notNullable()
      .references("id")
      .inTable("recipes")
      table.integer("ingredient_id")
      .notNullable()
      .references("id")
      .inTable("ingredients")
      table.string("quantity").notNullable()

  })

  
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("recipe_ingredients")
    await knex.schema.dropTableIfExists("ingredients")
    await knex.schema.dropTableIfExists("recipes")

};
