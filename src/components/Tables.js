import React from "react";

function Tables() {
  return (
    <section id="tables">
      <div className="container">
        <h1>Tables</h1>
        <table className="table">
          <caption>Table Caption</caption>
          <thead>
            <tr>
              <th scope="column">Name</th>
              <th scope="column">Features</th>
              <th scope="column">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Elit</th>
              <td>Dolor, sit, amet, consectetur</td>
              <td>$98.07</td>
            </tr>
            <tr>
              <th scope="row">Ipsum</th>
              <td>Adipisicing, elit, lorem</td>
              <td>$847.88</td>
            </tr>
            <tr>
              <th scope="row">Consectetur</th>
              <td>Adio velit quae sapiente </td>
              <td>$.99</td>
            </tr>
            <tr>
              <th scope="row">Adipisicing</th>
              <td>Voluptate, placeat totam</td>
              <td>$5.99</td>
            </tr>
            <tr>
              <th scope="row">Reprehenderit</th>
              <td>Fugit delectus asperiores</td>
              <td>$99.77</td>
            </tr>
            <tr>
              <th scope="row">Ipsum</th>
              <td>Eius temporibus expedita</td>
              <td>$38.59</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Tables;
