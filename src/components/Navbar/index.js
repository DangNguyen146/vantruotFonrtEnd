import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import User from "./User";

export default class NavbarHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ishandel: true,
    };
  }

  render() {
    return (
      <div className="nav-bar">
        <nav className="navbar navbar-expand-lg navbar-light container-fluid shadow">
          <div className="container">
            <NavLink className="navbar-brand" to="/">
              <img src="./img/Logo.png" style={{ width: 50 }} alt="" />
            </NavLink>
            <div className=" d-flex d-lg-none">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarvanTruot"
                aria-controls="navbarvanTruot"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
            </div>
            <div
              className="collapse navbar-collapse"
              style={{ flexGrow: "0" }}
              id="navbarvanTruot"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active font-weight-bold"
                    aria-current="page"
                    to="/"
                  >
                    HOME
                  </NavLink>
                </li>
                <li className="nav-item dropdown font-weight-bold">
                  <a
                    className="nav-link dropdown-toggle font-weight-bold"
                    id="navbarDropdownSKATEBOARDS"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    SKATEBOARDS
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownSKATEBOARDS"
                  >
                    <NavLink
                      className="dropdown-item font-weight-bold"
                      to="/deck/0"
                    >
                      DECK
                    </NavLink>
                    <NavLink
                      className="dropdown-item font-weight-bold"
                      to="/truck/0"
                    >
                      TRUCKS
                    </NavLink>
                    <NavLink
                      className="dropdown-item font-weight-bold"
                      to="/wheel/0"
                    >
                      WHEELS
                    </NavLink>
                  </div>
                </li>
                <li className="nav-item font-weight-bold">
                  <NavLink className="nav-link font-weight-bold" to="/blog">
                    BLOG
                  </NavLink>
                </li>
                <li className="nav-item font-weight-bold">
                  <NavLink className="nav-link font-weight-bold" to="/contact">
                    CONTACT
                  </NavLink>
                </li>
              </ul>

              <div className="collapse d-flex m-0 p-0 font-weight-bold">
                <User />
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
