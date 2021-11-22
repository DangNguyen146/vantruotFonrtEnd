import React, { Component } from "react";
import CardItemListPage from "../../../components/CardItemListPage";
import Loader from "../../../components/Loader";
import { connect } from "react-redux";

class ListWheelDetail extends Component {
  renderHTML = (page) => {
    const { loading, data } = this.props;
    if (loading) return <Loader />;
    return (
      data &&
      data.slice(page * 12, page * 12 + 12).map((item, index) => {
        return (
          <>
            <div className="col-6 col-md-3">
              <CardItemListPage key={index} van={item} />
            </div>
          </>
        );
      })
    );
  };
  render() {
    const { page } = this.props;
    return <div className="row">{this.renderHTML(page)}</div>;
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.listWheelsReducer.loading,
    data: state.listWheelsReducer.data,
  };
};

export default connect(mapStateToProps)(ListWheelDetail);
