import "./components/assets/js/script.js";
import "./nav-header.css";
import "./components/assets/css/style.css";
import "./components/assets/css/footer.css";
import Footer from "./components/Footer";
import Pubnav from "./components/Pubnav";
import Revslider from "./components/Revslider.jsx";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Contact from "./components/ContactUs";
import Reports from "./components/Reports.jsx";
import Home from "./components/Home.jsx";
import Pastor from "./components/Pastor.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Pubnav />
          <div className="progress-bar"></div>
        </header>

        <div id="revslider-wrap">
          <Revslider />
        </div>
        <Switch>
          <div id="content">
            <Route exact path="/">
              <Redirect to="/Home" />
            </Route>
            <Route path="/Home">
              <Home />
            </Route>
            <Route path="/Pastor">
              <Pastor />
            </Route>
            <Route path="/Reports">
              <Reports />
            </Route>
            <Route path="/contactUs">
              <Contact />
            </Route>
          </div>
        </Switch>

        <footer>
          <Footer />
        </footer>
      </Router>
    </div>
  );
}

export default App;
