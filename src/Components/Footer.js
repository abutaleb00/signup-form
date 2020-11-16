import React, { Component } from "react";

class Footer extends Component {
  render(props) {
    return (
      <>
        <footer
          className="footer-content"
          style={{ width: "100%", marginTop: "25px", background: "#ffffff" }}
        >
          <div className="container" style={{ marginTop: "100px" }}>
            <div className="footer-copyright text-center py-3">
              © 2020 Copyright:
              <a href="#"> Reliance partner</a>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
