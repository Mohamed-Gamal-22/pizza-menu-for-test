import React, { Component } from "react";
import { pizzaData } from "./../../data";
import Pizza from "../Pizza/Pizza.jsx";

export default class Menu extends Component {
  render() {
    console.log(pizzaData);
    return (
      <>
        <div className="container my-4">
          <div className="row g-3 justify-content-center text-center">
            {pizzaData.map((pizza) => (
              <Pizza pizza={pizza} key={pizza.ingredients} />
            ))}
            <p className="mt-5">
              We're open from 12:00 to 22:00. Come visit us or order online.
            </p>
            <div className="text-center">
              <div className="btn btn-danger px-5 py-2">order</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
