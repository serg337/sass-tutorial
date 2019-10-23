import React from "react";

import "../assets/scss/forms.scss";

function Forms() {
  return (
    <section id="forms">
      <div className="container">
        <h1>Forms</h1>
        <form>
          <div className="form-group">
            <label for="inputName">Name</label>
            <input
              className="form-control"
              type="text"
              id="inputName"
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <label for="inputEmail">Email</label>
            <input
              className="form-control"
              type="email"
              id="inputEmail"
              placeholder="Email"
            />
          </div>
          <div class="form-group">
            <label for="selectSite">Site</label>
            <select class="form-control" id="selectSite">
              <option>Choose...</option>
              <option>lynda.com</option>
              <option>raybo.org</option>
              <option>iviewsource.com</option>
            </select>
          </div>
          <div class="checkbox">
            <label>Email Blast</label>
            <input id="inputAddList" type="checkbox" />
          </div>
          <div class="form-group">
            <label for="inputComments">Comments</label>
            <textarea class="form-control" id="inputComments"></textarea>
          </div>
          <input type="submit" value="submit" />
        </form>
      </div>
    </section>
  );
}

export default Forms;
