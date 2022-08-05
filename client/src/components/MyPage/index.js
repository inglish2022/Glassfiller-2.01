import React from "react";

function MyPage() {
  return (
<div className="all-cards">
      <h1>My Saved Recipes</h1>
      <div className="card">
        <div className="card-container">
          <div className="card-content">
          <h4>Drink-Name</h4>
          <p>Drink description or list of drink ingredients</p>
        </div>
        </div>
      </div>
      <div className="card">
        <div className="card-container">
          <div className="card-content">
          <h4>Drink-Name</h4>
          <p>Drink description or list of drink ingredients</p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-container">
          <div className="card-content">
          <h4>Drink-Name</h4>
          <p>Drink description or list of drink ingredients</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
