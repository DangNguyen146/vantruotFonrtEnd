import { Button } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import { DatHangAction } from "./Modules/action";
import { NavLink } from "react-router-dom";

class CardItem extends Component {
  render() {
    const { van } = this.props;
    return (
      <>
        <div className="productitem col-6 col-sm-3 overflow-hidden ">
          <div className="item-content">
            <div className="product-img align-items-center">
              <img src={van.hinhAnh} className="h-100" alt="" />
              <div className="item-hover text-center w-100 ">
                <div className="ms-5 mt-5 text-center item-hover-hover">
                  <Button
                    className="ms-5 mb-2 w-25 p-2 text-center border shadow item-hover-item bg-product"
                    onClick={() => {
                      this.props.datVan({
                        _id: van._id,
                        maVan: van.maVan,
                        tenVan: van.tenVan,
                        giaVan: van.giaVan,
                        hinhAnh: van.hinhAnh,
                        moTa: van.moTa,
                        danhGia: van.danhGia,
                        soLuong: 1,
                      });
                      this.setState({
                        show: true,
                      });
                    }}
                  >
                    <i className="fa fa-shopping-cart" />
                  </Button>
                  <div className="ms-5 mb-2 w-25 p-2 text-center border shadow item-hover-item bg-product">
                    <i className="fa fa-search-plus" />
                  </div>
                  <Button className="ms-5 mb-2 w-25 p-2 text-center border shadow item-hover-item bg-product">
                    <i className="fa fa-ice-cream" />
                  </Button>
                </div>
              </div>
            </div>
            <NavLink
              className="product-content text-center nav-link text-dark"
              to={"/detail/" + this.props.van._id}
            >
              <h5>{van.tenVan}</h5>
              <p>{van.giaVan}Đ</p>
            </NavLink>
          </div>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    datVan: (van) => {
      dispatch(DatHangAction(van));
    },
  };
};
export default connect(null, mapDispatchToProps)(CardItem);
