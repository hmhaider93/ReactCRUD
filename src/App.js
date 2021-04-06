import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home"
import ExercisePage from "./components/ExercisePage"
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Route path="/" exact component={Home}/>
        <Route path="/exercises" exact component={ExercisePage}/>
      </div>
    </Router>
  );
}

export default App;
