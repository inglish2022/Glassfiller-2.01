import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const RecipeList = ({ recipes, title }) => {
  const [show, setShow] = useState(false);

  return (
    <main className="all-cards">
      <div className="card-container">
        <h1>{title}</h1>
        {recipes &&
          recipes.map((recipe) => (
            <div key={recipe._id} className="card">
              <div className="card-content"> 
              <p> {recipe.title} </p>
              <p>{recipe.definition}</p>

              {show ? (
                <div>
                  <p><FontAwesomeIcon icon={faUser} color="#4d4d4e" /><br />Recipe Submitted by: {recipe.username} </p>
                  <ul>
                    {recipe.ingredients.map((ingredient, i) => (
                      <li> {ingredient}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
              </div>
              <div className="button-container"> 
              <div className="button-center"> 
                <button className="action" key={recipe._id} onClick={() => setShow(!show)}>
                Show Recipe
              </button>
              </div>
              </div>  
            </div>
          ))}
      </div>
    </main>
  );
};


export default RecipeList;
