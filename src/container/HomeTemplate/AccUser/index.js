import React, { Component } from "react";
import CreateAcc from "./CreateAcc";
import Login from "./Login";

export default class AccUser extends Component {
  render() {
    return (
      <section id="login" style={{ marginTop: 55 }}>
        <div className="container container-select">
          <div className="forms-container">
            <div className="signin-signup">
              <Login history={this.props.history} />
              <CreateAcc history={this.props.history} />
            </div>
          </div>
          <div className="panels-container">
            <div className="panel left-panel">
              <div className="content">
                <h3>Chưa có tài khoản?</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Debitis, ex ratione. Aliquid!
                </p>
                <button
                  className="btn transparent"
                  id="sign-up-btn"
                  onClick={() => {
                    const container =
                      document.querySelector(".container-select");
                    container.classList.add("sign-up-mode");
                  }}
                >
                  Đăng kí
                </button>
              </div>
              <div className="image"></div>
            </div>
            <div className="panel right-panel">
              <div className="content">
                <h3>Đã có tài khoản ?</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum laboriosam ad deleniti.
                </p>
                <button
                  className="btn transparent"
                  id="sign-in-btn"
                  onClick={() => {
                    const container =
                      document.querySelector(".container-select");
                    container.classList.remove("sign-up-mode");
                  }}
                >
                  Đăng nhập
                </button>
              </div>
              <div className="image"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
