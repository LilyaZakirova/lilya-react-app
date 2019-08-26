import React, { Component } from "react";

class Header extends Component {
    render() {
        return (
          <div>
            <h1>Header</h1>
            <ul className="header">
                <li><NavLink to="/">Main</NavLink></li>
                <li><NavLink to="/gallery">Gallery</NavLink></li>
                <li><NavLink to="/form">Form</NavLink></li>
            </ul>
          </div>
        );
      }
}

export default Header;