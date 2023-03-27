import React from "react";

import mealsImg from "../../assets/meals.jpg";

import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <React.Fragment>
      <header>
        <h1>Meals</h1>
        <button>Cart</button>
      </header>
      <div>
        <img src={mealsImg} alt="A table full of delicious food!" />
      </div>
    </React.Fragment>
  );
};

export default Header;
