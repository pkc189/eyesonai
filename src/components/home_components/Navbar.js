import React from "react";
import { FaHome } from "react-icons/fa";
import { IconContext } from "react-icons";
import "../../css/Navbar.css";
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  return (
    <>
      <div className="Navbar">
        <IconContext.Provider
          value={{ color: "F9D56E", className: "Navbar__icon", size: "1.5rem" }}
        >
          <FaHome />
        </IconContext.Provider>

        <div id="search">
          <form method="get" action="">
            <div className="search__input">
              <input type="text" placeholder="Search" required />

              <div className="search__input__button">
                <button type="submit">
                  <IconContext.Provider
                    value={{
                      color: "92929D",
                      className: "Search__icon",
                      size: "1.2rem"
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
    </>
  );
};

export default Navbar;
