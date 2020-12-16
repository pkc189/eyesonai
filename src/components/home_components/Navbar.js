import React from "react";
import { FaHome } from "react-icons/fa";
import { IconContext } from "react-icons";
import "../../css/Navbar.css";
import { AiOutlineSearch } from "react-icons/ai";

import { Link, BrowserRouter as Router } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Router>
        <div className="Navbar">
          <IconContext.Provider
            value={{
              color: "5aa469",
              className: "Navbar__icon",
              size: "1.5rem"
            }}
          >
            <Link to="/">
              <FaHome />
            </Link>
          </IconContext.Provider>

          <div id="search">
            <form method="get" action="">
              <div className="search__input">
                <input type="text" placeholder="Search" required />

                <div className="search__input__button">
                  <button type="submit">
                    <IconContext.Provider
                      value={{
                        color: "5aa469",
                        className: "Search__icon",
                        size: "1.6rem"
                      }}
                    >
                      <AiOutlineSearch />
                    </IconContext.Provider>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Router>
    </>
  );
};

export default Navbar;
