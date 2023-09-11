import React, { Component } from "react";
import { pizzaData } from "./../../data";
import Pizza from "../Pizza/Pizza.jsx";

export default class Menu extends Component {
  render() {
    let hour = new Date().getHours();
    let openHour = 12;
    let cloesHour = 22;
    const isOpen = hour >= openHour && hour < cloesHour;
    console.log(pizzaData);
    return (
      <>
        <div className="container my-4">
          <div className="row g-3 justify-content-center text-center">
            {pizzaData.map((pizza) => (
              <Pizza pizza={pizza} key={pizza.ingredients} />
            ))}
            {isOpen ? (
              <>
                <p className="mt-5 text-success fw-bold">
                  We are open, Come visit us or order online.
                </p>
                <div className="text-center">
                  <div className="btn btn-danger px-5 py-2 text-capitalize">
                    order now !
                  </div>
                </div>
              </>
            ) : (
              <>
                <p className="mt-5 mb-0 text-danger fw-bold">
                  We're Closed For Now !
                </p>
                <p className="text-danger fw-bold">
                We Happy to serve you  from 12:00PM to 22:00PM. 
                </p>
              </>
            )}
          </div>
        </div>
      </>
    );
  }
}
