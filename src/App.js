import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" component={ContentContainer} />
      <Route exact path="/about" component={About} />
    </Router>
  );
}

export default App;
