import React from "react";

import "../assets/scss/lists.scss";

function Lists() {
  return (
    <section id="lists">
      <div className="container">
        <h1>Lists</h1>
        <article>
          <h2>Unordered</h2>
          <ul>
            <li>dolor sit amet</li>
            <li>
              adipisicing elit
              <ul>
                <li>Incidunt ut nostrum</li>
                <li>
                  fuga impedit blanditiis
                  <ul>
                    <li>aspernatur nulla</li>
                    <li>illo pariatur sequi</li>
                  </ul>
                </li>
                <li>Incidunt ut nostrum</li>
                <li>consectetur adipisicing</li>
              </ul>
            </li>
            <li>animi consectetur</li>
            <li>itaque placeat</li>
          </ul>
        </article>

        <article>
          <h2>Ordered</h2>
          <ol>
            <li>dolor sit amet</li>
            <li>
              adipisicing elit
              <ol>
                <li>Incidunt ut nostrum</li>
                <li>
                  fuga impedit blanditiis
                  <ol>
                    <li>aspernatur nolla</li>
                    <li>illo pariatur sequi</li>
                  </ol>
                </li>
                <li>Incidunt ut nostrum</li>
                <li>consectetur adipisicing</li>
              </ol>
            </li>
            <li>animi consectetur</li>
            <li>itaque placeat</li>
          </ol>
        </article>
      </div>
    </section>
  );
}

export default Lists;
