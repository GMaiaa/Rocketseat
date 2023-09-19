const knex = require("../database/knex");

class DishesController {
  async create(request, response) {
    const { title, description, ingredients, price, category } = request.body;

    const [dish_id] = await knex("dishes").insert({
      title,
      description,
      price,
      category,
    });

    const ingredientsInsert = ingredients.map((ingredient) => {
      return {
        dish_id,
        name: ingredient,
      };
    });

    await knex("ingredients").insert(ingredientsInsert);

    response.json();
  }

  async show(request, response) {
    const { id } = request.params;

    const dish = await knex("dishes").where({ id }).first();
    const ingredients = await knex("ingredients")
      .where({ dish_id: id })
      .orderBy("name");

    return response.json({
      ...dish,
      ingredients,
    });
  }

  async delete(request, response) {
    const { id } = request.params

    await knex("dishes").where({id}).delete()

    return response.json()
  }

  async index(request, response){
    const { title, ingredients, category } = request.query

    let dishes

    if(ingredients){
      const filterIngredients = ingredients.split(',').map(ingredient => ingredient.trim())

      dishes = await knex("ingredients")
      .select([
        "dishes.id",
        "dishes.title",
        "dishes.description",
        "dishes.price"
      ])
      .whereLike("dishes.title", `%${title}%`)
      .whereIn("name", filterIngredients)
      .innerJoin("dishes", "dishes.id", "ingredients.dish_id")
      .orderBy("dishes.title")
    } else{
      dishes = await knex("dishes").whereLike("title", `%${title}%`).orderBy("title")
    }
    

    return response.json(dishes)
  }
}

module.exports = DishesController;
