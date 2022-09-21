import React, { useState } from "react";

import { layout, typography } from "../styles/style";
import { navLinks } from "../constants";
import { iconSun, iconMoon } from "../assets";
import useDarkMode from "../hooks/useDarkMode";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <nav className={`${layout.navbar}`}>
      <a href="/" className="">
        <strong>Simon H.</strong>
      </a>

      <div
        className={`fixed ss:hidden top-16 ${toggle ? 'right-0' : 'right-[-80%]'} bottom-0 w-4/5 bg-dark text-white p-4 transition-all duartion-500 flex flex-col justify-between items-center`}
      >
        <ul>
          {navLinks.map((navlink, index) => {
            return (
              <li
                key={navlink.id}
                className={`py-1 px-2 rounded text-center leading-none hover:text-primary ${
                  index !== navLinks.length - 1 ? "mb-4" : ""
                }`}
              >
                <a href={`#${navlink.id}`}>{navlink.title}</a>
              </li>
            );
          })}
        </ul>

        <button onClick={() => setTheme(colorTheme)}>
          {colorTheme === 'light' ? <img src={iconSun} /> : <img src={iconMoon} />}
        </button>
      </div>

      <div className="hidden ss:flex justify-between">
        <ul className="flex gap-8 mr-8 pr-8 border-r-2 border-primary">
          {navLinks.map((navlink) => {
            return (
              <li
                key={navlink.id}
                className={`${typography.text_sm} font-bold border-b-2 border-transparent hover:border-primary transition-colors`}
              >
                <a href={`#${navlink.id}`}>{navlink.title}</a>
              </li>
            );
          })}
        </ul>

        <button onClick={() => setTheme(colorTheme)}>
        {colorTheme === 'light' ? <img src={iconSun} /> : <img src={iconMoon} />}
        </button>
      </div>

      <button className={`toggle-btn ${toggle ? 'toggle' : ''} block ss:hidden`} onClick={() => setToggle((prev) => !prev)}>
        <div></div>
        <div></div>
        <div></div>
      </button>
    </nav>
  );
};

export default Navbar;
