import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { LogoutApi } from "./../../../container/HomeTemplate/AccUser/Login/modules/actionforLogin";

class User extends Component {
  componentDidMount() {
    localStorage.setItem("createAcc", JSON.stringify("true"));
  }
  handelOnLogout = () => {
    this.props.fectchLogOut();
  };
  render() {
    if (this.props.userLoginReducer) {
      return (
        <div id="propDownUser">
          <div className="d-none d-md-block text-center ">
            <li className="nav-item dropdown" style={{ listStyle: "none" }}>
              <a
                className="nav-link dropdown-toggle text-dark"
                href="#"
                id="username"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Chào, {this.props.userLoginReducer.user.hoTen}
              </a>
              <div className="dropdown-menu" aria-labelledby="username">
                <a className="dropdown-item" href="#">
                  <NavLink
                    className="btn btn-redorange btn-focus"
                    to="/quanlidonhang"
                  >
                    Quản lí đơn hàng
                  </NavLink>
                </a>
                <a className="dropdown-item" href="#">
                  <NavLink
                    className="btn btn-redorange btn-focus"
                    onClick={() => {
                      this.handelOnLogout();
                    }}
                    to="/"
                  >
                    Đăng xuất
                  </NavLink>
                </a>
              </div>
            </li>
          </div>

          <div className="d-block d-md-none">
            <p className="mb-1 text-redorange">
              Chào, {this.props.userLoginReducer.hoTen}
            </p>
            <NavLink
              className="btn btn-redorange btn-focus"
              to="/quanlidonhang"
            >
              Quản lí đơn hàng
            </NavLink>
            <NavLink
              className="btn btn-redorange btn-focus"
              onClick={() => {
                this.handelOnLogout();
              }}
              to="/"
            >
              Đăng xuất
            </NavLink>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <NavLink
            className="btn btn-redorange btn-focus mr-2 rounded p-0 m-0"
            type="submit"
            to="/login"
          >
            <button className="btn bubbly-button me-3 border border-light">
              Đăng nhập / Đăng kí
            </button>
          </NavLink>
        </div>
      );
    }
  }
}
const mapStapToProps = (state) => {
  return {
    userLoginReducer: state.userLoginReducer.data,
    err: state.userLoginReducer.err,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fectchLogOut: () => {
      dispatch(LogoutApi());
    },
  };
};

export default connect(mapStapToProps, mapDispatchToProps)(User);
