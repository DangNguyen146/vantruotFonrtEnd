import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Blog extends Component {
  render() {
    return (
      <>
        <div style={{ marginTop: 90 }}>
          <section className="container">
            <Link className="text-decoration-none" to="/">
              <h4 className="d-inline text-dark">Trang chủ </h4>
            </Link>
            <i class="fa fa-angle-double-right"></i>
            <Link className="text-decoration-none" to="/blog">
              <h4 className="d-inline text-dark"> Blog</h4>
            </Link>
          </section>
          <div style={{ height: 1 }} className="bg-dark mt-2 mb-4"></div>
          <h2 className="text-center">BLOG</h2>
          <section className="container mt-4" style={{ minHeight: 500 }}>
            <div className="row">
              <Link
                className="col-12 col-sm-6 col-md-3 mr-5 w-100 shadow rounded text-decoration-none text-dark"
                style={{ minHeight: 300 }}
                to="/LichSuTruotVan"
              >
                <h4 className="mt-4">Tin tức</h4>
                <img
                  className="w-100"
                  src="//bizweb.dktcdn.net/thumb/large/100/345/407/articles/1.jpg?v=1558766862103"
                  alt="LỊCH SỬ TRƯỢT VÁN"
                ></img>
                <h5 className=" mt-2 mb-1">LỊCH SỬ TRƯỢT VÁN</h5>
                <p>
                  Đây là những cột mốc của câu chuyện mà chúng tôi làm rõ và
                  đồng thời giúp bạn hiễu rõ để gần gũi hơn với bộ môn này hơn
                  thông qua lịch sử...
                </p>
              </Link>
            </div>
          </section>
        </div>
      </>
    );
  }
}
