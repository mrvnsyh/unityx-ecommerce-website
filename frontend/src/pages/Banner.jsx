import React from "react";
import { Link } from "react-router-dom";

import bannerImg from "../assets/header.png";
const Banner = () => {
  return (
    <div className="section__container header__container">
      <div className="header__content z-30">
        <h4 className="uppercase" style={{ color: "var(--text-dark)" }} >UP TO 20% Discount on</h4>
        <h1>Men's Fashion</h1>
        <p style={{ textAlign: "justify", color: "var(--text-dark)" }}>
          Discover the Perfect Look! Step into style with our wide selection of
          accessories, trendy clothing collections, and fashionable footwear.
        </p>
        <p style={{ textAlign: "justify", color: "var(--text-dark)" }}>
          Shop now and transform your wardrobe with the latest trends and
          timeless classics!
        </p>

        <button className="btn">
          <Link to="/shop">EXPLORE NOW</Link>
        </button>
      </div>
      <div className="header__image">
        <img src={bannerImg} alt="banner image" />
      </div>
    </div>
  );
};

export default Banner;
