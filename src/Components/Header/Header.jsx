import React, { Component } from "react";
import "./Header.module.css";

export default class Header extends Component {
  render() {
    return (
      <>
        <h1 className="text-center fw-bold bg-danger text-white p-3 text-capitalize">
          react pizza menu test
        </h1>
        <h3 className="text-center fw-bold  text-white text-uppercase mt-5">
          our menu
        </h3>
        <p className="my-5">
          Authentic Italian cuisine. 6 creative dishes to choose from. All from
          our stone oven, all organic, all delicious.
        </p>
      </>
    );
  }
}
