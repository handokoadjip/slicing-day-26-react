import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <footer>
      <div className="container-fluid">
        <div className="row align-items-center h-vh-50 p-5">
          <div className="col-lg-4">
            <div className="wrapper">
              <div className="copyright d-block d-lg-flex justify-content-lg-between align-items-lg-center text-center mb-3 mb-lg-0">
                <p className="mp-0 fs-5 text-black">Lorem ipsum dolor</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="wrapper d-flex justify-content-center mb-3 mb-lg-0">
              <Link
                className="navbar-brand text-center text-black fs-2 mp-0 fw-bolder ls-5px"
                to="#"
              >
                Nanimarquina
              </Link>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="d-flex justify-content-center align-items-center">
              <Link className="text-decoration-none mx-2 circle-icon" to="#">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link className="text-decoration-none mx-2 circle-icon" to="#">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link className="text-decoration-none mx-2 circle-icon" to="#">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link className="text-decoration-none mx-2 circle-icon" to="#">
                <i className="fab fa-pinterest"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="row align-items-center pb-5">
          <div className="col-lg-12 d-flex justify-content-center">
            <div className="wrapper">
              <ul className="text-uppercase d-inline mp-0">
                <li className="d-inline">
                  <Link
                    className="nav-link fs-7 fw-bold d-lg-inline d-block text-fade-2 text-center"
                    to="#"
                  >
                    lorem
                  </Link>
                </li>
                <li className="d-inline">
                  <Link
                    className="nav-link fs-7 fw-bold d-lg-inline d-block text-fade-2 text-center"
                    to="#"
                  >
                    ipsum
                  </Link>
                </li>
                <li className="d-inline">
                  <Link
                    className="nav-link fs-7 fw-bold d-lg-inline d-block text-fade-2 text-center"
                    to="#"
                  >
                    dolor
                  </Link>
                </li>
                <li className="d-inline">
                  <Link
                    className="nav-link fs-7 fw-bold d-lg-inline d-block text-fade-2 text-center"
                    to="#"
                  >
                    sit
                  </Link>
                </li>
                <li className="d-inline">
                  <Link
                    className="nav-link fs-7 fw-bold d-lg-inline d-block text-fade-2 text-center"
                    to="#"
                  >
                    amet
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row align-items-center bg-copy py-4 px-2 shadow-top">
          <div className="col-lg-12 d-flex justify-content-center">
            <div className="wrapper">
              <p className="m-0 text-fade-3 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default index;
