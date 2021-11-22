import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Search extends Component {
  render() {
    return (
      <div className="header-search w-100 wow animate__fadeInDown">
        <form className="input-group mb-3 w-50" style={{ left: "23%" }}>
          <input
            type="text"
            className="form-control"
            placeholder="Search anymore"
            aria-label="Search anymore"
            aria-describedby="basic-addon2"
          />
          <NavLink
            className="input-group-text btn btn-secondary"
            id="basic-addon2"
            type="submit"
            to="/search"
          >
            Search
          </NavLink>
        </form>
      </div>
    );
  }
}
