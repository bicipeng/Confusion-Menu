import React, { Component } from "react";

import "./App.css";
import Main from "./components/MainComponent"; //menu is every thing you import from menucomponent and you use it in the <menu/>


class App extends Component {
 
 
  render() {
    return (
      <div>
       <Main/>
      </div>
    );
  }
}

export default App;
