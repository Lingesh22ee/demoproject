import React from "react";
import './scss/project.scss'
import icon from './img/AU.svg.png'
function Header(){
    return(
        <>
        <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a href="#" className="navbar-brand ">
            <img src={icon}/>  <span className="header fw-bold">AWESOME UI</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse font-weight-bold" id="navmenu">
            <ul className="navbar-nav ms-auto align-items-center ">
              <li className="nav-item px-3">
                <a href="#home" className="nav-link text-black">
                  ABOUT US
                </a>
              </li>
              <li className="nav-item px-3">
                <a href="#home" className="nav-link text-black">
                  <span className="capitalize">CONTACT US</span>
                </a>
              </li>
              <li className="nav-item px-3">
                <a href="#home" className="nav-link text-black">
                  STORE
                </a>
              </li>
              <li className="nav-item px-3">
                <a href="#home" className="nav-link text-black">
                  USE CASES
                </a>
              </li>
              <button className="nav-item px-3 bg-success">
                <a href="#home" className="nav-link  text-white  ">
                  REGISTER
                </a>
              </button>
            </ul>
          </div>
        </div>
      </nav>
        </>
    )
}
export default Header;