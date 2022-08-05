import React, { useState } from "react";

import { useMutation } from '@apollo/client';
import { ADD_RECIPE } from '../../utils/mutations';
import { QUERY_RECIPES } from '../../utils/queries';

function RecipeForm() {
  const [formData, setFormData] = useState({
    title: "",
    definition: ""
  })
  const [characterCount, setCharacterCount] = useState(0);

  const [addRecipe, { error }] = useMutation(ADD_RECIPE, {
    update(cache, { data: { addRecipe } }) {
      // read what's currently in the cache
      const { recipes } = cache.readQuery({ query: QUERY_RECIPES });

      // prepend the newest thought to the front of the array
      cache.writeQuery({
        query: QUERY_RECIPES,
        data: { recipes: [addRecipe, ...recipes] }
      });
    }
  });

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addRecipe({
        variables: { ...formData,  },
      });

      // clear form value
      setFormData({ ...formData, title: "", definition: "" })
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };

  function handleChange(event) {
    const value = event.target.value;
    setFormData({
      ...formData,
      [event.target.name]: value
    });
    if (event.target.value.length <= 280) {
      setCharacterCount(event.target.value.length);
    }
  }

  return (
    <form className="login-form" onSubmit={handleFormSubmit}>
      <label>
        Recipe Title:
        <br />
        <input value={formData.title} type="text" name="title" onChange={handleChange} className="input-field" />
      </label>
      <p
        className={`m-0 ${characterCount === 280 || error ? 'text-error' : ''}`}
      >
        Character Count: {characterCount}/280
        {error && <span className="ml-2">Something went wrong...</span>}
      </p>
      <label >
        Cocktail Definition:
        <br />
        <textarea
          placeholder="Decribe your cocktail:"
          defaultValue={formData.definition}
          className="definition input-field"
          onChange={handleChange}
        />
      </label>
      
      <input type="submit" value="Submit" className="action" />
      
    </form>
  );
};


export default RecipeForm;