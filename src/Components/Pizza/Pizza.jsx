import React, { Component } from "react";

export default class Pizza extends Component {
  render() {
    let { ingredients, photoName, name, price, soldOut } = this.props.pizza;
    return (
      <div className="col-lg-3 col-md-4 col-sm-6">
        <div
          className={
            soldOut ? "item bg-light p-2 rounded" : "bg-light p-2 rounded pointer"
          }
        >
          <img className="w-100 mb-3 rounded" src={photoName} alt="pizza" />
          <h5 className="fw-bold text-uppercase text-danger">{name}</h5>
          <p className="small">{[ingredients]}</p>
          {soldOut ? (
            <p className="small fw-bold text-danger">SOLD OUT</p>
          ) : (
            <p className="small fw-bold text-primary"> price : {price}</p>
          )}
        </div>
      </div>
    );
  }
}
