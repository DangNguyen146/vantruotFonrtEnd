import React, { Component } from "react";
import { WOW } from "wowjs";
import Slider from "../Slider";
import Search from "../Search";
import Product from "../Product";
import Footer from "../Footer";
import ListItem from "../ListItem";

export default class HomePage extends Component {
  componentDidMount() {
    const wow = new WOW({
      offset: 100,
      mobile: true,
      live: true,
    });

    wow.init();
  }
  render() {
    return (
      <div style={{ marginTop: 60 }}>
        <Slider />
        <Search />
        <Product />
        <ListItem />
        <Footer />
      </div>
    );
  }
}
