import React, { Component } from "react";

import "./App.css";
import Main from "./components/MainComponent"; //menu is every thing you import from menucomponent and you use it in the <menu/>
import {BrowserRouter} from 'react-router-dom'
class App extends Component {
 
 
  render() {
    return ( 
       <BrowserRouter>
       <div className='App'>
       <Main/>
      </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
