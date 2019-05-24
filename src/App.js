import React from "react"
import "./App.css"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Navbar2 from "./components/Navbar2"
import Home from "./components/Home"
import About from "./components/About"

function App() {
  return (
    <Router>
      <Navbar2 />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </Router>
  )
}

export default App
