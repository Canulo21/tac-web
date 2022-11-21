import React, { Component } from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

class Pubnav extends Component {
  render() {
    return (
      <Router forceRefresh>
        <div id="navigation-wrap">
          <div className="nav-logo">
            <NavLink to="/Home">
              <img
                src={require("./assets/img/camacop-footer.png")}
                alt="camacop"
                width="80"
                height="80"
              />
            </NavLink>
          </div>
          <div className="menu-container">
            <ul id="menu-link">
              <li>
                <NavLink
                  reloaddocument="true"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                  to="/Home"
                >
                  home
                </NavLink>
              </li>
              <li>
                <NavLink
                  reloaddocument="true"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                  to="/Pastor"
                >
                  pastors
                </NavLink>
              </li>
              <li>
                <NavLink
                  reloaddocument="true"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                  to="/Reports"
                >
                  reports
                </NavLink>
              </li>
              <li>
                <NavLink
                  reloaddocument="true"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                  to="/ContactUs"
                >
                  contact us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </Router>
    );
  }
}

export default Pubnav;
