import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="section__container footer__container">
        <div className="footer__col">
          <h4>CONTACT INFO</h4>
          <p>
            <span>
              <i className="ri-map-pin-2-fill"></i>
            </span>
            123, London Bridge Street, London
          </p>
          <p>
            <span>
              <i className="ri-mail-fill"></i>
            </span>
            support@unityx.com
          </p>
          <p>
            <span>
              <i className="ri-phone-fill"></i>
            </span>
            (+012) 3456 789
          </p>
        </div>

        <div className="footer__col">
          <h4>COMPANY</h4>
          <a href="/">Home</a>
          <a href="/">About Us</a>
          <a href="/">Work With Us</a>
          <a href="/">Our Blogs</a>
          <a href="/">Terms & Condition</a>
        </div>

        <div className="footer__col">
          <h4>USEFUL LINK</h4>
          <a href="/">Help</a>
          <a href="/">Track your order</a>
          <a href="/">Search</a>
          <a href="/">Category</a>
          <a href="/">Shop</a>
        </div>

        <div className="footer__col">
          <h4>SOCIAL MEDIA</h4>
          <a href="/">Facebook</a>
          <a href="/">Instagram</a>
          <a href="/">Twitter</a>
          <a href="/">LinkedIn</a>
          <a href="/">YouTube</a>
        </div>
      </footer>

      <div className="footer__bar">
        Copyright © 2024 by Unityx. All rights reserved.
      </div>
    </>
  );
};

export default Footer;
