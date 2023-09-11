import React, { Component } from "react";
import { pizzaData } from "./../../data";

export default class Menu extends Component {
  render() {
    console.log(pizzaData);
    return (
      <div className="container my-4">
        <div className="row g-3 justify-content-center text-center">
          {pizzaData.map((pizza) => {
            return (
              <div
                className="col-lg-3 col-md-4 col-sm-6"
                key={pizza.ingredients}
              >
                <div className="item bg-light p-2 rounded">
                  <img
                    className="w-100 mb-3 rounded"
                    src={pizza.photoName}
                    alt="pizza"
                  />
                  <h5 className="fw-bold text-uppercase text-danger">{pizza.name}</h5>
                  <p className="small">{[pizza.ingredients]}</p>
                  <p className="small fw-bold text-success">price : {pizza.price} $</p>
                </div>
              </div>
            );
          })}
        </div>
        <p className="mt-5">
          We're open from 12:00 to 22:00. Come visit us or order online.
        </p>
        <div className="text-center">
          <div className="btn btn-danger px-5 py-2">order</div>
        </div>
      </div>
    );
  }
}
