import { Button } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import { GiamSoLuong, TangSoLuong, HuySanPham } from "./Modules/action";
import { Link } from "react-router-dom";

class QuanLiDonHang extends Component {
  renderHTML = () => {
    if (this.props.dangSachVanDangDat.length !== 0) {
      return this.props.dangSachVanDangDat.map((item, index) => {
        return (
          <>
            <div className="col-12 ">
              <div className="row">
                <div className="col-3">
                  <img className="w-100" src={item.hinhAnh} alt="" />
                </div>
                <div className="col-9">
                  <div className="row">
                    <div className="col-5">Tên sản phẩm: </div>
                    <div className="col-7">
                      <b className="pb-0">{item.tenVan}</b>
                    </div>
                    <div className="col-5">Giá sản phẩm: </div>
                    <div className="col-7">
                      <i className="pb-0">{item.giaVan} VNĐ</i>
                    </div>
                    <div className="col-12 col-md-5">Số lượng sản phẩm: </div>
                    <Button
                      className="col-2 px-0 bg-secondary text-light"
                      onClick={() => {
                        this.props.giamSoLuong(item);
                      }}
                    >
                      -
                    </Button>
                    <div className="col-2 text-center px-2">
                      <p className="pb-0  mb-0 mt-2 ">{item.soLuong}</p>
                    </div>
                    <Button
                      className="col-2 px-0 bg-secondary text-light"
                      onClick={() => {
                        this.props.tangSoLuong(item);
                      }}
                    >
                      +
                    </Button>
                    <div
                      className="col-12 "
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        this.props.huySanPham(item);
                      }}
                    >
                      <i>Hủy mua sản phẩm</i>
                    </div>
                  </div>
                </div>
              </div>
              {index + 1 < this.props.dangSachVanDangDat.length ? (
                <div className="bg-dark w-100 my-4" style={{ height: 2 }}></div>
              ) : (
                ""
              )}
            </div>
          </>
        );
      });
    } else {
      return <h5>Chưa có sản phẩm nào được mua</h5>;
    }
  };
  render() {
    return (
      <>
        <div style={{ marginTop: 90 }}>
          <section className="container">
            <Link className="text-decoration-none" to="/">
              <h4 className="d-inline text-dark">Trang chủ </h4>
            </Link>
            <i class="fa fa-angle-double-right"></i>
            <Link className="text-decoration-none" to="/quanlidonhang">
              <h4 className="d-inline text-dark"> Quản lí đơn hàng</h4>
            </Link>
          </section>
          <div style={{ height: 1 }} className="bg-dark mt-2 mb-4"></div>
          <div className="container">
            <div className="row shadow rounded">
              <div className="col-12 mt-4">
                <h2 className="text-center">Quản lí đơn hàng</h2>
              </div>
              <div className="col-12 col-md-8 my-3">
                <div className="row">{this.renderHTML()}</div>
              </div>
              <div className="col-12 col-md-4">
                <h3>Chi tiết đơn hàng</h3>
                <p>Tổng số lượng: ...</p>
                <p>Tính năng đang phát triển</p>
                <Button className="btn btn-dark bg-dark text-light px-5">
                  Đặt hàng
                </Button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    dangSachVanDangDat: state.datHangReducer.dangSachVanDangDat,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    giamSoLuong: (van) => {
      dispatch(GiamSoLuong(van));
    },
    tangSoLuong: (van) => {
      dispatch(TangSoLuong(van));
    },
    huySanPham: (van) => {
      dispatch(HuySanPham(van));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(QuanLiDonHang);
