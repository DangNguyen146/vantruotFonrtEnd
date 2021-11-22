import React, { Component } from "react";
import Footer from "./../Footer";

export default class index extends Component {
  render() {
    return (
      <div style={{ marginTop: 90 }}>
        <section className="container">
          <h4 className="d-inline">Trang chủ </h4>
          <i class="fa fa-angle-double-right"></i>
          <h4 className="d-inline"> Tìm kiếm</h4>
        </section>
        <div style={{ height: 1 }} className="bg-dark mt-2 mb-4"></div>
        <section className="container" style={{ minHeight: 426 }}>
          <h3>Không tìm thấy kết quả cần tìm</h3>
        </section>
        <Footer />
      </div>
    );
  }
}
