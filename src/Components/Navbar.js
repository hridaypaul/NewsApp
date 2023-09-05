import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => { 
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand fw-bold " to="/">NewsApp</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link mx-3" to="/about">About</Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Category
                  </Link>
                  <ul className="dropdown-menu">
                    <li className="nav-item "> <Link className="nav-link mx-3" to="/business">Business</Link></li>
                    <li className="nav-item "> <Link className="nav-link mx-3" to="/entertainment">Entertainment</Link></li>
                    <li className="nav-item "> <Link className="nav-link mx-3" to="/general">General</Link></li>
                    <li className="nav-item "> <Link className="nav-link mx-3" to="/health">Health</Link></li>
                    <li className="nav-item "> <Link className="nav-link mx-3" to="/science">Science</Link></li>
                    <li className="nav-item "> <Link className="nav-link mx-3" to="/sports">Sports</Link></li>
                    <li className="nav-item "> <Link className="nav-link mx-3" to="/technology">Technology</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  
}
export default NavBar
