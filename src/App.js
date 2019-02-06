import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="logo-box">
            <img src="logo-green.png" className="logo" alt="logo" />
          </div>
          <div className="text-box">
            <h1 className="heading-primary">
              <span className="heading-primary-main">
                Welcome to Clear Cut Analytics
              </span>
              <span className="heading-primary-sub">
                In particular, the garbled words of lorem ipsum bear an
                unmistakable resemblance
              </span>
              <span className="heading-primary-sub">
                to sections 1.10.32–33 of Cicero's work, with the most notable
                passage excerpted below:
              </span>
            </h1>

            <button className="btnAction">Click me</button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
