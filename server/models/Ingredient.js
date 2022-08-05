const { Schema, model } = require("mongoose");

const IngredientSchema = new Schema({
  name: [
    {
      type: String,
    },
  ],
});

const Ingredient = model("Ingredient", IngredientSchema);

module.exports = Ingredient;
