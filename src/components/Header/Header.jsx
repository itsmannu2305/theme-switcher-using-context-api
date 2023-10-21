import React, { useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import ThemeContext from "../../contexts/ThemeContext";

const Header = () => {
  const { themeModeHandle, themeMode } = useContext(ThemeContext);

  return (
    <div className="header absolute top-0 left-0 w-screen">
      <header className="header-menu container mx-auto flex justify-between items-center py-2">
        {/* --------- Logo --------- */}
        <div className="logo">
          <Link className="flex items-center gap-3" to="/">
            <img
              src="/src/assets/img/logo.png"
              width={50}
              height={50}
              alt="logo"
              className="inline-block border-2 border-cyan-600 rounded-full"
            />
            <span className="text-2xl tracking-[0.2em] font-extrabold text-cyan-600 font-primaryFont">
              INBIO.
            </span>
          </Link>
        </div>

        {/* ------------------- Navbar Menu ------------- */}
        <nav className="navbar-menu">
          <ul className="navbar flex gap-16 font-primaryFont tracking-wider font-medium text-gray-600 dark:text-white">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `transition-all duration-300 hover:text-cyan-500 ${
                    isActive && "text-cyan-600"
                  } `
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="about"
                className={({ isActive }) =>
                  `transition-all duration-300 hover:text-cyan-500 ${
                    isActive && "text-cyan-600"
                  }`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="portfolio"
                className={({ isActive }) =>
                  `${
                    isActive && "text-cyan-600"
                  } transition-all duration-300 hover:text-cyan-500`
                }
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="blog"
                className={({ isActive }) =>
                  `${
                    isActive && "text-cyan-600"
                  } transition-all duration-300 hover:text-cyan-500`
                }
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="contact"
                className={({ isActive }) =>
                  `${
                    isActive && "text-cyan-600"
                  } transition-all duration-300 hover:text-cyan-500`
                }
              >
                Contact
              </NavLink>
            </li>

            {/* -------------------- Dark and Light mode button ---------------- */}
            {themeMode === "dark" ? (
              <BsFillSunFill
                onClick={() => themeModeHandle()}
                className="cursor-pointer text-2xl"
              />
            ) : (
              <BsFillMoonStarsFill
                onClick={() => themeModeHandle()}
                className="cursor-pointer text-2xl"
              />
            )}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
