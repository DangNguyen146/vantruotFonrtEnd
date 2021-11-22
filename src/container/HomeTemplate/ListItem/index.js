import React, { Component } from "react";
import Slider from "react-slick";
import Loader from "./../../../components/Loader";
import CardItem from "./../../../components/CardItem";
import { connect } from "react-redux";
import { fetchListDecksApi } from "./modules/action";

class ListItem extends Component {
  componentDidMount() {
    this.props.fetchListDecks();
  }
  renderHTML = (temp, resposive) => {
    const { loading, data } = this.props;
    if (loading) return <Loader />;
    return (
      data &&
      data.slice(temp, temp + resposive).map((item, i) => {
        return <CardItem key={i} van={item} />;
      })
    );
  };

  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    };
    const renderSlides = (resposive) => {
      let arr = [0];
      for (let i = 1; i <= 5; i++) {
        arr.push(i);
      }
      let temp1 = -resposive;
      const { loading } = this.props;
      if (loading) return <Loader />;
      return arr.map(() => (
        <div>
          <div className="row mx-0">
            {this.renderHTML((temp1 += resposive), resposive)}
          </div>
        </div>
      ));
    };
    return (
      <>
        <section className="product mt-4 wow fadeInRight" data-wow-delay="0.3s">
          <div className="container">
            <h2 className="text-center" style={{ fontSize: "3rem" }}>
              FEATURE PRODUCT
            </h2>
            <div className="slickProduct">
              <Slider
                ref={(c) => (this.slider = c)}
                {...settings}
                s
                className="d-none d-md-block"
              >
                {renderSlides(8)}
              </Slider>
              <Slider
                ref={(c) => (this.slider = c)}
                {...settings}
                s
                className="d-block d-md-none"
              >
                {renderSlides(4)}
              </Slider>
            </div>
          </div>
        </section>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.listDecksReducer.loading,
    data: state.listDecksReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchListDecks: () => {
      dispatch(fetchListDecksApi());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
