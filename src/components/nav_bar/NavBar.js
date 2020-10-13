import React, { useState } from "react";
import navBarData from "./navBarData";
import "./nav-style.css";

function NavBar() {
  const [navData] = useState(navBarData);
  const [navLinkActive, setNavLinkActive] = useState(false);

  window.addEventListener("resize", (e) => {
    if (window.innerWidth < 800 && navLinkActive === true)
      horizontalNavHandler();
  });

  let horizontalNavHandler = () => {
    setNavLinkActive(!navLinkActive);
  };

  return (
    <>
      <nav className="navbar">
        <div>
          <div className="navbar__logo"></div>

          <div
            className={`navbar__menu  ${navLinkActive && "navbar-menu-active"}`}
          >
            <div
              className=" navbar-menu__overlay"
              onClick={horizontalNavHandler}
            ></div>

            <ul className="navbar-menu__links">
              <ul>
                {navData.map((link, i) => (
                  <li className="nav_links" key={i}>
                    <a
                      href={link.url}
                      onClick={() => {
                        horizontalNavHandler();
                      }}
                    >
                      {link.link_text}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="hire-us">Hire Us</div>
            </ul>
          </div>

          <div className="navbar_hamburger-btn" onClick={horizontalNavHandler}>
            <div
              className={`${navLinkActive && " navbar_hamburger-btn__line1"}`}
            ></div>
            <div
              className={`${navLinkActive && "navbar_hamburger-btn__line2"}`}
            ></div>
            <div
              className={`${navLinkActive && "navbar_hamburger-btn__line3"}`}
            ></div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default NavBar;
