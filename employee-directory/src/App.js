// main dependencies
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
// import pages here
import Directory from "./pages/Directory";
// import components here

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Directory}/>
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
