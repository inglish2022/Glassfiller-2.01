const userSeed = require("./userSeed.json");
const recipeSeed = require("./recipeSeed.json");
const ingredientSeed = require("./ingredientSeed.json");
const db = require("../config/connection");
const  { User, Ingredient, Recipe} = require("../models");


db.once("open", async () => {
  try {
    await User.deleteMany({});
    await Recipe.deleteMany({});
    await Ingredient.deleteMany({});

    await Ingredient.create(ingredientSeed);
    await Recipe.create(recipeSeed);
    await User.create(userSeed);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("all done!");
  process.exit(0);
});
