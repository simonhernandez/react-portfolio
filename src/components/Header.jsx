import React from "react";

import { Wrapper, Navbar } from "../components";

import { layout } from "../styles/style";

const Header = () => {
  return (
    <header className={`${layout.header}`}>
      <Wrapper styles={layout.wrapper}>
        <Navbar />
      </Wrapper>
    </header>
  );
};

export default Header;
