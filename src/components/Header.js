import React from "react";

function Header() {
  return (
    <header>
      <div className="container">
        <nav>
          <div className="branding">
            <h1>Table of Contents</h1>
          </div>
          <ul>
            <li>
              <a href="#jumbotron">Jumbotron</a>
            </li>
            <li>
              <a href="#typography">Typography</a>
            </li>
            <li>
              <a href="#buttons">Buttons</a>
            </li>
            <li>
              <a href="#lists">Lists</a>
            </li>
            <li>
              <a href="#media">Media</a>
            </li>
            <li>
              <a href="#tables">Tables</a>
            </li>
            <li>
              <a href="#forms">Forms</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
