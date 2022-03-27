import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <nav className="navbar fixed-top bg-white navbar-light px-4">
      <div className="container-fluid px-0 d-flex justify-content-between">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <Link
          className="navbar-brand text-center text-primary fs-2 mp-0 fw-bolder ls-5px"
          to="#"
        >
          Nanimarquina
        </Link>

        <div className="d-flex justify-content-center align-items-center d-none d-lg-block">
          <Link className="text-decoration-none text-muted me-4" to="#">
            <i className="fas fa-heart"></i>
          </Link>
          <Link className="text-decoration-none text-muted" to="#">
            <i className="fas fa-search"></i>
          </Link>
        </div>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav text-uppercase">
            <li className="nav-item px-0 px-lg-4">
              <Link
                className="nav-link text-end text-lg-center fw-bold"
                aria-current="page"
                to="#"
              >
                home
              </Link>
            </li>
            <li className="nav-item px-0 px-lg-4">
              <Link className="nav-link text-end text-lg-center" to="#">
                pages
              </Link>
            </li>
            <li className="nav-item px-0 px-lg-4">
              <Link className="nav-link text-end text-lg-center" to="#">
                elements
              </Link>
            </li>
            <li className="nav-item px-0 px-lg-4">
              <Link className="nav-link text-end text-lg-center" to="#">
                blog
              </Link>
            </li>
            <li className="nav-item px-0 px-lg-4">
              <Link className="nav-link text-end text-lg-center" to="#">
                portofolio
              </Link>
            </li>
            <li className="nav-item px-0 px-lg-4">
              <Link className="nav-link text-end text-lg-center" to="#">
                shop
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default index;
