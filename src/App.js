import React from "react"
import "./App.css"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import About from "./Components/About"

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </Router>
  )
}

export default App
