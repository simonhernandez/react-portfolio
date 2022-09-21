import React from "react";

import { Wrapper, Socials } from "../components";
import { layout, typography, spacing } from "../styles/style";
import { navLinks, socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer className={`${spacing.paddingY} text-center md:text-left bg-dark_100 text-white`}>
      <Wrapper styles={`${layout.wrapper} flex flex-col space-y-10 md:flex-row md:justify-between md:items-center md:space-y-0`}>
        <div className="brand">
          <h2 className={`${typography.heading2} text-primary`}>
            <a href="/">Simon Hernandez</a>
          </h2>
          <small className="copyright">
            &copy; 2022 copyright all rights reserved
          </small>
        </div>

        <nav>
          <ul className="md:flex md:flex-wrap md:justify-between md:max-w-[180px]">
            {navLinks.map((navlink, index) => {
              return (
                <li
                  key={navlink.id}
                  className={`py-1 px-2 rounded text-center text-sm leading-none hover:text-primary md:basis-[89px] md:text-left ${
                    index !== navLinks.length - 1 ? "mb-4" : ""
                  }`}
                >
                  <a href={`#${navlink.id}`}>{navlink.title}</a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex justify-center items-center">
          <Socials socials={socialLinks} styles={`flex gap-4`} color={'white'} />
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
