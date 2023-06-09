import React from "react";
import RoutesFunction from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
      <div >
        <Router>
          <RoutesFunction/>
        </Router>
      </div>
    );
}

export default App;