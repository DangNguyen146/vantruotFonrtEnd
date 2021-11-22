import React, { Component } from "react";
import CardItemListPage from "../../../components/CardItemListPage";
import { connect } from "react-redux";
import Loader from "./../../../components/Loader";

class ListDeckDetail extends Component {
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
    loading: state.listDecksReducer.loading,
    data: state.listDecksReducer.data,
  };
};

export default connect(mapStateToProps)(ListDeckDetail);
