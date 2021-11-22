import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import ListTruckDetail from "./listTruckDetail";
import Footer from "../Footer";
import { connect } from "react-redux";
import { fetchListTrucksApi } from "./modules/action";

class DetaiPageTruck extends Component {
  componentDidMount() {
    this.props.fetchListTrucks();
  }
  constructor(props) {
    super(props);
    this.state = {
      page1: parseInt(this.props.match.params.id),
      page2: parseInt(this.props.match.params.id) + 1,
      page3: parseInt(this.props.match.params.id) + 2,
    };
  }
  render() {
    return (
      <>
        <div style={{ marginTop: 90 }}>
          <section className="container">
            <Link className="text-decoration-none" to="/">
              <h4 className="d-inline text-dark">Trang chủ </h4>
            </Link>
            <i class="fa fa-angle-double-right"></i>
            <Link className="text-decoration-none" to="/truck/0">
              <h4 className="d-inline text-dark"> Truck</h4>
            </Link>
          </section>
          <div style={{ height: 1 }} className="bg-dark mt-2 mb-4"></div>

          <div className="container shadow-lg py-5" style={{ minHeight: 1110 }}>
            <h1 className="text-center">TRUCKS</h1>
            <ListTruckDetail key="0" page={this.props.match.params.id} />
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-center ">
                <li
                  className={
                    parseInt(this.props.match.params.id) === 0
                      ? "page-item disabled"
                      : "page-item"
                  }
                >
                  <NavLink
                    className="page-link text-dark"
                    to={"/truck/" + parseInt(this.props.match.params.id - 1)}
                  >
                    Previous
                  </NavLink>
                </li>
                <li className="page-item">
                  <NavLink
                    className="page-link text-dark"
                    to={"/truck/" + this.state.page1}
                  >
                    {this.state.page1}
                  </NavLink>
                </li>
                <li className="page-item">
                  <NavLink
                    className="page-link text-dark"
                    to={"/truck/" + this.state.page2}
                  >
                    {this.state.page2}
                  </NavLink>
                </li>
                <li className="page-item">
                  <NavLink
                    className="page-link text-dark"
                    to={"/truck/" + this.state.page3}
                  >
                    {this.state.page3}
                  </NavLink>
                </li>
                <li
                  className={
                    parseInt(this.props.match.params.id) > 1
                      ? "page-item disabled"
                      : "page-item"
                  }
                >
                  <NavLink
                    className="page-link text-dark"
                    to={
                      "/truck/" +
                      parseInt(parseInt(this.props.match.params.id) + 1)
                    }
                  >
                    Next
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchListTrucks: () => {
      dispatch(fetchListTrucksApi());
    },
  };
};
const mapStateToProps = (state) => {
  return {
    loading: state.listTrucksReducer.loading,
    data: state.listTrucksReducer.data,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DetaiPageTruck);
