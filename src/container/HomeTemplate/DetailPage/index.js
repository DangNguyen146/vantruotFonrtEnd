import { Button } from "@material-ui/core";

import React, { Component } from "react";
import { connect } from "react-redux";

import Footer from "../Footer";

import { DatHangAction } from "./Modules/action";
import { fetchItemsApi } from "./modules2/action";
import Loader from "../../../components/Loader";
import { Link } from "react-router-dom";
import Mota from "./Mota";

class DetailPage extends Component {
  componentDidMount() {
    this.props.fetchListItems(this.props.match.params.id);
  }
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  renderHTML = () => {
    const { data, loading } = this.props;
    if (loading) return <Loader />;
    return (
      data && (
        <>
          <div className="col-12 col-md-4 rounded shadow">
            <img src={data.hinhAnh} className="w-100" alt="" />
          </div>
          <div className="d-none d-md-block col-1"></div>
          <div className="col-12 col-md-7 text-dark mt-5">
            <div className="row mt-5">
              <div className="col-4 text-dark">Tên sản phẩm: </div>
              <div className="col-8">
                <b className="pb-0 text-dark">{data.tenVan}</b>
              </div>
              <div className="col-4 text-dark">Giá sản phẩm: </div>
              <div className="col-8">
                <i className="pb-0 text-dark">{data.giaVan}</i>
              </div>

              <div className="col-4 text-dark">Đánh giá: </div>
              <div className="col-8">
                <i className="pb-0 text-warning">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </i>
              </div>
              <div className="col-2 mt-3">
                <Button
                  className="w-100  p-2 text-center border shadow item-hover-item bg-product"
                  onClick={() => {
                    this.props.datVan({
                      _id: data._id,
                      maVan: data.maVan,
                      tenVan: data.tenVan,
                      giaVan: data.giaVan,
                      hinhAnh: data.hinhAnh,
                      moTa: data.moTa,
                      danhGia: data.danhGia,
                      soLuong: 1,
                    });
                    this.setState({
                      show: true,
                    });
                  }}
                >
                  <i className="fa fa-shopping-cart text-dark" />
                </Button>
              </div>
              <div className="col-1 d-block d-md-none"></div>
              <div className="col-2 mt-3">
                <Button className="w-100 p-2 text-center border shadow item-hover-item bg-product">
                  <i className="fa fa-search-plus text-dark" />
                </Button>
              </div>
              <div className="col-1 d-block d-md-none"></div>
              <div className="col-2 mt-3">
                <Button className="w-100  p-2 text-center border shadow item-hover-item bg-product">
                  <i className="fa fa-ice-cream text-dark" />
                </Button>
              </div>
            </div>
          </div>
          <div className="d-block d-md-none col-12 py-2"></div>
        </>
      )
    );
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
            <Link className="text-decoration-none">
              <h4 className="d-inline text-dark"> Sản phẩm </h4>
            </Link>
            <i class="fa fa-angle-double-right"></i>
            <Link className="text-decoration-none">
              <h4 className="d-inline text-dark"> Chi tiết </h4>
            </Link>
          </section>
          <div style={{ height: 1 }} className="bg-dark mt-2 mb-4"></div>

          <div className="container rounded shadow mb-5">
            <div className="row">{this.renderHTML()}</div>
          </div>
        </div>
        <section className="container">
          <Mota />
        </section>
        <Footer />
        <div
          className="position-fixed bottom-0 right-0 p-3"
          style={{ zIndex: 999, right: 0, bottom: 0 }}
        >
          <div
            id="liveToast"
            className={
              this.state.show === true ? "toast fade show" : "toast fade hide"
            }
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            data-delay={2000}
          >
            <div className="toast-header">
              <strong className="mr-auto">Black Sonia</strong>
              <small>A later</small>
              <button
                onClick={() => {
                  this.setState({
                    show: false,
                  });
                }}
                type="button"
                className="ml-2 mb-1 close"
                data-dismiss="toast"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="toast-body">Bạn vừa thêm vào giỏ hàng</div>
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    dangSachVanDangDat: state.datHangReducer.dangSachVanDangDat,
    loading: state.listItemsReducer.loading,
    data: state.listItemsReducer.data,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    datVan: (van) => {
      dispatch(DatHangAction(van));
    },
    fetchListItems: (_id) => {
      dispatch(fetchItemsApi(_id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
