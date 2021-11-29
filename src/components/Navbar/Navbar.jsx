import React, { Component } from "react";
//import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

// let Btb3tStateMnStoreLlPropsHina = (state) => {
//   console.log(state);
//   return { token: state.token };
// };

class Navbar extends Component {
  logOut = () => {
    localStorage.clear();
  };

  render() {
    let token = localStorage.getItem("token");
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-transpernt">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              MyCima
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            ></button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link " aria-current="page" to="/home">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/movies">
                    Movies
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink className="nav-link " to="/tv">
                    Tv
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  {(() => {
                    if (token) {
                      return (
                        <NavLink
                          onClick={this.logOut}
                          className="nav-link "
                          id="logout"
                          aria-current="page"
                          to="/login"
                        >
                          Logout
                        </NavLink>
                      );
                    }
                  })()}
                  {/* {token && (
                    <NavLink
                      onClick={this.logOut}
                      className="nav-link "
                      id="logout"
                      aria-current="page"
                      to="/login"
                    >
                      Logout
                    </NavLink>
                  )} */}

                  {!token && (
                    <NavLink
                      id="reg"
                      className="nav-link "
                      aria-current="page"
                      to="/register"
                    >
                      Register
                    </NavLink>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
// connect(Btb3tStateMnStoreLlPropsHina)(Navbar);
