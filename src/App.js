import React, { Component } from "react";

import "./App.css";
import Main from "./components/MainComponent"; //menu is every thing you import from menucomponent and you use it in the <menu/>
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";
const store = ConfigureStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
