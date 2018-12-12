import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer" className="container">
      <div className="row">
        <div className="col-lg-12">
          <ul className="list-unstyled">
            <li className="float-lg-right">
              <a href="#top" className="btn btn-secondary">
                Back to top
              </a>
            </li>
          </ul>
          <p>
            Made by <a href="#">Ryantha Purba</a>.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
