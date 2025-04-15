import React from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "./ui/Button";
import logo from "/src/assets/logo.png";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md bg-white shadow-sm px-4">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="SmartFarm Logo" height="50" />
        </Link>

        {/* Botão toggle para telas pequenas */}
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

        {/* Links da Navbar (Home, Serviços e Produtos*/}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto fw-bold">
            <li className="nav-item">
              <NavLink className="nav-link mx-3" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link mx-3" to="/services">
                Serviços
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link mx-3" to="/products">
                Produtos
              </NavLink>
            </li>
          </ul>
          
          {/* Botão de Login */}          
          <div className="d-flex">
            <Link to="/login">
              <Button className="ms-2">ENTRAR</Button>
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
};