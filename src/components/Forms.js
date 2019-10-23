import React from "react";

function Forms() {
  return (
    <section id="forms">
      <div className="container">
        <h1>Forms</h1>
        <form>
          <div className="form-group">
            <label htmlFor="inputName">Name</label>
            <input
              className="form-control"
              type="text"
              id="inputName"
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputEmail">Email</label>
            <input
              className="form-control"
              type="email"
              id="inputEmail"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="selectSite">Site</label>
            <select className="form-control" id="selectSite">
              <option>Choose...</option>
              <option>lynda.com</option>
              <option>raybo.org</option>
              <option>iviewsource.com</option>
            </select>
          </div>
          <div className="checkbox">
            <label>Email Blast</label>
            <input id="inputAddList" type="checkbox" />
          </div>
          <div className="form-group">
            <label htmlFor="inputComments">Comments</label>
            <textarea className="form-control" id="inputComments"></textarea>
          </div>
          <input type="submit" value="submit" />
        </form>
      </div>
    </section>
  );
}

export default Forms;
