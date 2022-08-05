const { Schema, model } = require('mongoose');
const { serializeInteger } = require('whatwg-url');

const recipeSchema = new Schema(
    {
        title: {
            type: String,
            required: 'You need to have a title!',
            minlength: 1,
            maxlength: 280
        },
        definition: {
            type: String,
            required: 'You need to define your cocktail!',
            minlength: 1,
            maxlength: 280
        },
        username: {
            type: String,
            ref: 'User',
        },
        // user will be limited by an array of strings from front end
        ingredients: {
            type: [String]
        }
    }
);

const Recipe = model('Recipe', recipeSchema);

module.exports = Recipe;