import React, { Component } from "react";
import HomeTemplate from "./container/HomeTemplate";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { routeHome } from "./router";
import BackToTop from "./components/BackToTop";

import { connect } from "react-redux";
import { USER_LOGIN_SUCCESS } from "./container/HomeTemplate/AccUser/Login/modules/constant";

import { LoadLaiAction } from "./components/CardItem/Modules/action";
import { createAction } from "./container/HomeTemplate/AccUser/Login/modules/actionforLogin";
import PageNotFound from "./container/PageNotFound";

class App extends Component {
  render() {
    const showLayoutHome = (route) => {
      if (route && route.length > 0) {
        return route.map((item, index) => {
          return (
            <HomeTemplate
              key={index}
              exact={item.exact}
              path={item.path}
              Component={item.component}
            />
          );
        });
      }
    };

    return (
      <BrowserRouter>
        <Switch>
          {showLayoutHome(routeHome)}
          <Route path="" component={PageNotFound} />
        </Switch>
        <BackToTop />
      </BrowserRouter>
    );
  }
  _getLoginInLocal = () => {
    const user = localStorage.getItem("userKH");
    if (user) {
      this.props.dispatch(createAction(USER_LOGIN_SUCCESS, JSON.parse(user)));
    }
  };
  _getSanPhamDaDat = () => {
    const hangDat = JSON.parse(localStorage.getItem("hangDat"));
    if (hangDat) {
      hangDat.map((van) => {
        this.props.dispatch(LoadLaiAction(van));
      });
    }
  };
  componentDidMount() {
    this._getLoginInLocal();
    this._getSanPhamDaDat();
  }
}
export default connect()(App);
