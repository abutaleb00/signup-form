import React, { Component } from "react";
import Logo from "../assets/logo.jpg";
const logo = require("../assets/logo.jpg");
class Header extends Component {
  render() {
    return (
      <>
        <nav
          className="navbar navbar-expand-lg navbar-dark"
          style={{
            width: "100%",
            background: "#FFFFFF",
            padding: "20px",
            color: "#000",
            boxShadow: "0 2px 2px -2px rgba(0,0,0,.2)",
          }}
        >
          <div className="container">
            <a
              className="navbar-brand"
              href="index.html"
              style={{ color: "#000" }}
            >
              <img src={Logo} width="150px" alt="Logo" />
            </a>
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>
      </>
    );
  }
}

export default Header;
