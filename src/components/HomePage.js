import React, { Component } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";
// import "../assets/css/bootstrap.min.css";
import "../assets/css/jquery-ui.css";
import "../assets/css/font-awesome.min.css";
// import "../assets/css/owl.carousel.min.css";
import "../assets/css/slicknav.min.css";
import "../assets/css/magnificpopup.css";
import "../assets/css/typography.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";
import logo from "../assets/img/icon/logo.png";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        {/* preloader area start */}
        {/* <div id="preloader">
          <div className="spinner" />
        </div> */}
        {/* preloader area start */}
        {/* header area start -->*/}
        <header id="header">
          <div className="header-area">
            <div className="container">
              <div className="row">
                <div className="menu-area">
                  <div className="col-md-3 col-sm-12 col-xs-12">
                    <div className="logo">
                      <a href="index.html">
                        <img src={logo} alt="Zeedapp - App Landing Template" />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-9 hidden-xs hidden-sm">
                    <div className="main-menu">
                      <nav className="nav-menu">
                        <ul>
                          <li className="active">
                            <a href="#home">Home</a>
                          </li>
                          <li>
                            <a href="#feature">Features</a>
                          </li>
                          <li>
                            <a href="#screenshot">Screenshot</a>
                          </li>
                          <li>
                            <a href="#pricing">Pricing</a>
                          </li>
                          <li>
                            <a href="#team">Team</a>
                          </li>
                          <li>
                            <a href="#download">Download</a>
                          </li>
                          <li>
                            <a href="#blog">Blog</a>
                          </li>
                          <li>
                            <a href="#contact">Contact</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="col-sm-12 col-xs-12 visible-sm visible-xs">
                    <div className="mobile_menu" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/*<!-- header area end -->*/}
      </div>
    );
  }
}
