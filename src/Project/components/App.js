// React Imports
import React from "react";
import { withRouter } from "react-router-dom";
import Router from "../routes/routes";
import { ToastContainer } from "react-toastify";

// Stylesheet Imports
import "../commonstyles/common.scss";
import "react-toastify/dist/ReactToastify.css";


class App extends React.Component {
  componentDidMount() {
    
  }

  render() {
    return (
      <div className="App">
        <ToastContainer autoClose={3000} />
        <Router />
      </div>
    );
  }
}

export default withRouter(App);
