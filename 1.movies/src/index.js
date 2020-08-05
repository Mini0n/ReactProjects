// console.log('1.Movies')
// console.log('At slow speed we all seem focused')

import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import List from "./containers/List";

const App = () => {
  return (
    <div className="container-fluid">
      <h1>
        <nav className="navbar sticky-top navbar-light bg-dark">
          <h1 className="navbar-brand text-light">Movies</h1>
        </nav>
      </h1>

      <List />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
