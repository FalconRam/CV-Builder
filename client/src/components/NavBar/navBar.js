import React from "react";

import { useNavigate } from "react-router-dom";

import logo from "../../assets/icons8-resume-96px-logo-2.png";
import dashboard from "../../assets/icons8-dashboard-layout-48.png";
import profile from "../../assets/icons8-user-menu-male-64.png";
import templates from "../../assets/icons8-resume-template-50.png";
import logout from "../../assets/icons8-logout-30.png";
import more from "../../assets/icons8-menu-24.png";

import "./navBar.css";

const NavBar = () => {
  let user = true;

  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/home");
  };

  const handleDashboard = () => {
    navigate("/myDashboard");
  };

  const handleProfile = () => {
    navigate("/myProfile");
  };

  const handleTemplates = () => {
    navigate("/templates");
  };

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <>
      <nav className="navbar bg-body-tertiary mb-3">
        <div className="container-fluid">
          <span
            className="navbar-brand d-flex align-items-center logo fw-bold ms-2"
            onClick={handleHome}
          >
            <img
              src={logo}
              alt="Logo"
              className="d-inline-block align-text-topme-1 logoSize"
            />
            CV Builder
          </span>

          {/* From Medium to xxl Devices Component*/}
          {user && (
            <div role="navigation" className="d-none d-sm-none d-md-block">
              <ul className="nav d-flex align-items-center  justify-content-end nav-listItems">
                <li className="nav-item sideNavButton">
                  <span
                    className="nav-link d-flex align-items-center"
                    onClick={handleDashboard}
                  >
                    <img
                      src={dashboard}
                      alt="Logo"
                      className="d-inline-block align-text-top nav-logoSize me-1"
                    />
                    My Dashboard
                  </span>
                </li>
                <li className="nav-item sideNavButton">
                  <span
                    className="nav-link d-flex align-items-center"
                    onClick={handleProfile}
                  >
                    <img
                      src={profile}
                      alt="Logo"
                      className="d-inline-block align-text-top nav-logoSize me-1"
                    />
                    Profile
                  </span>
                </li>
                <li className="nav-item sideNavButton">
                  <span
                    className="nav-link d-flex align-items-center"
                    onClick={handleTemplates}
                  >
                    <img
                      src={templates}
                      alt="Logo"
                      className="d-inline-block align-text-top nav-logoSize me-1"
                    />
                    Templates
                  </span>
                </li>
                <li className="nav-item sideNavButton">
                  <span
                    className="nav-link d-flex align-items-center"
                    onClick={handleLogout}
                  >
                    <img
                      src={logout}
                      alt="Logo"
                      className="d-inline-block align-text-top nav-logoSize me-1"
                    />
                    Logout
                  </span>
                </li>
              </ul>
            </div>
          )}

          {/* Mobile and below mobile Component */}
          {user && (
            <div className="d-md-none dropdown">
              <button
                className="btn"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src={more} alt="more" title="More" className="more-icon" />
              </button>
              <ul className="dropdown-menu text-center">
                <li
                  className="nav-item sideNavButton"
                  onClick={handleDashboard}
                >
                  <span className="dropdown-item d-flex align-items-start">
                    <img
                      src={dashboard}
                      alt="Logo"
                      className="d-inline-block align-text-top nav-logoSize me-1"
                    />
                    My Dashboard
                  </span>
                </li>
                <li className="nav-item sideNavButton" onClick={handleProfile}>
                  <span className="dropdown-item d-flex align-items-start">
                    <img
                      src={profile}
                      alt="Logo"
                      className="d-inline-block align-text-top nav-logoSize me-1"
                    />
                    Profile
                  </span>
                </li>
                <li
                  className="nav-item sideNavButton"
                  onClick={handleTemplates}
                >
                  <span className="dropdown-item d-flex align-items-start">
                    <img
                      src={templates}
                      alt="Logo"
                      className="d-inline-block align-text-top nav-logoSize me-1"
                    />
                    Templates
                  </span>
                </li>
                <li className="nav-item sideNavButton" onClick={handleLogout}>
                  <span className="dropdown-item d-flex align-items-start">
                    <img
                      src={logout}
                      alt="Logo"
                      className="d-inline-block align-text-top nav-logoSize me-1"
                    />
                    Logout
                  </span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
