import React from "react";

function Buttons() {
  return (
    <section id="buttons">
      <div className="container">
        <h1>Buttons using @each</h1>
        <button className="btn-default">Default</button>
        <button className="btn-cool">Cool</button>
        <button className="btn-hot">Hot</button>
      </div>
      <div className="container">
        <h1>Buttons using the Array</h1>
        <button className="btn-one">One</button>
        <button className="btn-two">Two</button>
        <button className="btn-three">Three</button>
        <button className="btn-awesome">Awesome</button>
      </div>
    </section>
  );
}

export default Buttons;
