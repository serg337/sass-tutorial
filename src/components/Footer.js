import React from "react";

import "../assets/scss/footer.scss";

function Footer() {
  return (
    <footer>
      <div className="container">
        <nav>
          <ul>
            <li>
              <a href="#jumbotron">Jumbotron</a>
            </li>
            <li>
              <a href="#palette">Palette</a>
            </li>
            <li>
              <a href="#buttons">Buttons</a>
            </li>
            <li>
              <a href="#typography">Typography</a>
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
    </footer>
  );
}

export default Footer;
