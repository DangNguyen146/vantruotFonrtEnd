import { Button } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import { browserHistory } from "react-router";
import { GiamSoLuong, TangSoLuong, HuySanPham } from "./Modules/action";
import { Link } from "react-router-dom";

class SanPhamMua extends Component {
  renderHTML = () => {
    if (this.props.dangSachVanDangDat.length !== 0) {
      return this.props.dangSachVanDangDat.map((item, index) => {
        return (
          <>
            <div className="col-12">
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
            </div>
            {index + 1 < this.props.dangSachVanDangDat.length ? (
              <div className="bg-dark w-100 my-4" style={{ height: 2 }}></div>
            ) : (
              ""
            )}
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
        <div
          className="navbar navbar-expand-lg SanPhamMua"
          data-toggle="modal"
          data-target="#SanPhamMuaModal"
        >
          <div className="SanPhamMua-item">
            <i className="fa fa-shopping-cart" />
          </div>
        </div>

        <div
          className="modal fade"
          id="SanPhamMuaModal"
          tabIndex={-1}
          aria-labelledby="SanPhamMuaModal"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Sản phẩm đã mua</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="container-fluid">
                  <div className="row">{this.renderHTML()}</div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <Link
                  className="btn btn-dark"
                  type="button"
                  to="/order"
                  data-dismiss="modal"
                >
                  ORDER
                </Link>
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
export default connect(mapStateToProps, mapDispatchToProps)(SanPhamMua);
