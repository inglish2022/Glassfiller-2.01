const { User, Recipe } = require("../models");
const Ingredient = require("../models/Ingredient");
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    users: async () => {
      return await User.find({}).populate("recipes");
    },
    recipes: async () => {
      return await Recipe.find({}).populate("ingredients");
    },
    ingredients: async () => {
      return await Ingredient.find({});
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
    addRecipe: async (parent, args, context) => {
      const recipe = await Recipe.create({
        ...args,
        username: context.user.username,
      });

      await User.findByIdAndUpdate(
        { _id: context.user._id },
        { $push: { recipes: recipe._id } },
        { new: true }
      );

      return recipe;
    },
  },
};

module.exports = resolvers;
