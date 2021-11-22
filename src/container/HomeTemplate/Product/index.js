import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Product extends Component {
  render() {
    return (
      <>
        <section className="intro mt-4 wow animate__fadeInDown">
          <div className="container">
            <h2 className="text-center mb-0" style={{ fontSize: "3rem" }}>
              PRODUCT
            </h2>
            <div className="row">
              <div className="col-6 col-md-4 mb-2 product-img-item">
                <Link to="/deck/0">
                  <img src="./img/banner-1.png" className="w-100" alt="" />
                </Link>
              </div>
              <div className="col-6 col-md-4 mb-2 product-img-item">
                <Link to="/truck/0">
                  <img src="./img/banner-2.png" className="w-100" alt="" />
                </Link>
              </div>
              <div className="d-block d-md-none col-3" />
              <div className="col-6 col-md-4 mb-2 product-img-item">
                <Link to="/wheel/0">
                  <img src="./img/banner-3.png" className="w-100" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="wow fadeInLeft">
          <div className="container cover">
            <img src="./img/banner.png" className="w-100" alt="" />
          </div>
        </section>
      </>
    );
  }
}
