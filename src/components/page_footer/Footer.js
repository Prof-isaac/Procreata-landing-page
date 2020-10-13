import React from "react";
import { company } from "./footerData";
import img from "../images-&-icons/logo.svg";

import "./footer-style.css";
import SocialFollow from "../social_follow/SocialFollow";


function Footer() {
  return (
    <footer>
      <div className="page-footer">
        <div className="page-footer_1st-child">
          <div className="footer-logo">
            <img src={img} />
          </div>
          <SocialFollow />
        </div>

        <div className="page-footer_2nd-child">
          <div className="company_title">Company</div>
          <ul>
            {company.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="page-footer_3rd-child">
          <div className="legal_title">Legal</div>
          <div>Cookies Policy</div>
          <div>Privacy Policy</div>
        </div>
        <div className="page-footer_4th-child"></div>
      </div>

      <div className="cookie">
        <div className="cookie-title">This website uses cookies</div>
        <div className="prevacy-policy">
          {" "}
          We use cookies to personalise content and ads, to provide social media
          features and to analyse our traffic. We also share information about
          your use of our site with our social media, advertising and analytics
          partners who may combine it with other information that you’ve
          provided to them or that they’ve collected from your use of their
          services. Check Privacy Policy <a href="#ers">Privacy Policy</a>.{" "}
        </div>
      </div>
      <div className="right">© Procredita 2020, all rights reserved</div>
    </footer>
  );
}

export default Footer;
