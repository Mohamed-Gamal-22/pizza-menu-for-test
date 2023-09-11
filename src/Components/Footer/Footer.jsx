import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <h6 className="bg-dark my-0 p-3 text-white text-center text-capitalize fw-bold">
        mohamed gamal <span className="text-danger">&copy; copyright</span>{" "}
        reserved for practice
      </h6>
    );
  }
}
