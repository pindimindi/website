import React, { Component } from "react";
import logo from "./images/logo-green-1x.png";
import home from "./images/home.svg";

// const Navbar = () => {
//   return (
//     <div className="navigation">
//       <div className="logo-box">
//         <img src={logo} className="logo" alt="logo" />
//       </div>
//       <span className="option">Option1</span>
//       <span className="option">Option2</span>
//       <span className="option">Option3</span>
//     </div>
//   );
// };

class Navbar extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this.context);
  }

  handleClick(e) {
    console.log("EVENT", e.target.innerText);
  }
  render() {
    return (
      <div className="navigation">
        <div className="logo-box">
          <img src={logo} className="logo" alt="logo" />
        </div>
        <div className="home-box">
          <img src={home} className="home" />
        </div>
        <a className="option" href="#section-1">
          Option1
        </a>
        <a className="option" href="#section-2">
          Option2
        </a>
        <a className="option" href="#section-3">
          Option3
        </a>
      </div>
    );
  }
}
export default Navbar;
