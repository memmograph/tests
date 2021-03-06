import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Discover from "./components/pages/Discover"
import About from "./components/pages/About"
import Search from "./components/pages/Search"
import Navtab from "./components/Navtab"


function App() {
  return (
    <Router>
      <div>
        <Navtab />
        <Route exact path="/" component={About} />
        <Route exact path="/discover" component={Discover} />
        <Route exact path="/search" component={Search} />
      </div>
    </Router>
  );
}

export default App;
