import React, { Component } from "react";

class Navbar extends Component {
  
  button() {
    const appbutton = document.getElementById("nav-ham-icon");
    const options = document.querySelector(".nav-options");
    /**
     * checks of options are displayed (if true => runs stated code esle reund redundent code)
     */
    if (appbutton.classList.contains("ham-active") === true) {
      // removals
      appbutton.classList.remove("ham-active");
      options.classList.remove("options-active");
      //addition
      appbutton.classList.add("nav-ham-icon");
    } else {
      // additions
      appbutton.classList.add("ham-active");
      options.classList.add("options-active");
      // removals
      appbutton.classList.remove("nav-ham-icon");
    }
  }

  state = {};
  render() {
    return (
      <div className="nav">
        <section className="nav-options">
          <div className="nav-options-option">discography</div>
          <div className="nav-options-option">news</div>
          <div className="nav-options-option">tours</div>
        </section>
        <div  className="nav-ham">
          <div id="nav-ham-icon" className="nav-ham-icon" onClick={() => this.button()}>
            |
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
