import React, { Component } from "react";
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <Router forceRefresh>
        <div>
          <div className="footer-wrap">
            <div id="footer-container">
              <div id="foot-1">
                <div className="foot-logo">
                  <img
                    src={require("./assets/img/camacop-footer.png")}
                    alt="camacop"
                    width="80"
                    height="80"
                  />
                </div>
              </div>
              <div id="foot-2">
                <h3>menu</h3>
                <ul>
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
                      to="ContactUs"
                    >
                      contact us
                    </NavLink>
                  </li>
                </ul>
                <div id="test"></div>
              </div>
              <div id="foot-3">
                <h3>information</h3>
                <p>
                  <label>Address:</label>Purok 1, Taguima,Tudela ,Mis.Occ.,
                  Tudela, Philippines
                </p>
                <p>
                  <label>Phone:</label>
                  <a href="mailto: 12345678901">12345678901</a>
                </p>
                <p>
                  <label>Email:</label>
                  <a href="mailto: canulo1234@gmail.com">
                    canulo1234@gmail.com
                  </a>
                </p>
              </div>
              <div id="foot-4">
                <h3>church service</h3>
                <p>
                  <label>Sunday:</label>9:00am - 11:30am
                </p>
              </div>
              <div id="foot-5">
                <h3>social media</h3>
                <div className="fb-wrapper">
                  <a
                    href="https://www.facebook.com/profile.php?id=100067697591300"
                    target="__blank"
                  >
                    <p>Facebook</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div id="copy-right-wrap">
            <div className="copy-right-container">
              <a
                href="https://www.facebook.com/jhoncarlo.canulo"
                target="_blank"
                rel="noopener"
              >
                <span>J</span>C
              </a>
            </div>
          </div>
          <a
            href="#"
            id="back-top"
            aria-label="back-top"
            style={{ backgroundImage: "url(/img/top-bottom.png)" }}
          ></a>
        </div>
      </Router>
    );
  }
}

export default Footer;
