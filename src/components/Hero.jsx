import React from "react";

import { Wrapper, Button, Socials } from "../components";
import { layout, typography, spacing } from "../styles/style";
import { socialLinks } from "../constants";
import { simonHero, dots, tailwindcss_mobile, react_mobile, javascript_mobile, sass_mobile, git_mobile, tailwindcss, react, git, sass, javascript } from "../assets";

const Hero = () => {
  return (
    <section id="hero" className={`${spacing.paddingY} bg-primary_very_light`}>
      <Wrapper styles={`${layout.wrapper} flex flex-col-reverse md:flex-row md:justify-between md:items-center`}>
        {/* Text Container */}
        <div className="space-y-2 ss:space-y-4">
          <h1 className={`${typography.heading1}`}>
            Hi, <br />I am <span className="text-primary">Simon</span> <br />
            <span id="dynamic_text">Frontend Dev</span>
          </h1>
          <Button styles={layout.button}>Download CV</Button>
          <p className="text-sm">
            Want to work together?{" "}
            <strong className="text-primary">Contact me</strong>
          </p>
          <Socials socials={socialLinks} styles={`flex gap-1`} color={'gray'} />
        </div>

        {/* Image Container */}
        <div className="relative">
          <img src={dots} alt="" className="w-1/3 absolute left-1 -top-4" />
          <img src={simonHero} alt="An image of Simon Hernandez" className="w-full max-w-[673px]" />
          <img src={dots} alt="" className="w-1/3 absolute right-1 bottom-0" />
          <div className="absolute bg-white w-[50px] h-[50px] rounded-full shadow-md flex justify-center items-center left-0 bottom-10 ss:hidden">
            <img src={git_mobile} alt=""/>
          </div>
          <div className="absolute bg-white w-[50px] h-[50px] rounded-full shadow-md flex justify-center items-center left-12 bottom-1 ss:hidden">
            <img src={tailwindcss_mobile} alt=""/>
          </div>
          <div className="absolute bg-white w-[50px] h-[50px] rounded-full shadow-md flex justify-center items-center right-28 -bottom-4 ss:hidden">
            <img src={react_mobile} alt=""/>
          </div>
          <div className="absolute bg-white w-[50px] h-[50px] rounded-full shadow-md flex justify-center items-center right-14 bottom-2 ss:hidden">
            <img src={javascript_mobile} alt=""/>
          </div>
          <div className="absolute bg-white w-[50px] h-[50px] rounded-full shadow-md flex justify-center items-center right-0 top-28 ss:hidden">
            <img src={sass_mobile} alt=""/>
          </div>
          <div className="absolute bg-white w-[80px] h-[80px] rounded-full shadow-md ss:flex justify-center items-center left-10 bottom-16 hidden">
            <img src={git} alt=""/>
          </div>
          <div className="absolute bg-white w-[80px] h-[80px] rounded-full shadow-md ss:flex justify-center items-center left-36 bottom-2 hidden">
            <img src={tailwindcss} alt=""/>
          </div>
          <div className="absolute bg-white w-[80px] h-[80px] rounded-full shadow-md ss:flex justify-center items-center right-64 -bottom-6 hidden">
            <img src={react} alt=""/>
          </div>
          <div className="absolute bg-white w-[80px] h-[80px] rounded-full shadow-md ss:flex justify-center items-center right-36 bottom-12 hidden">
            <img src={javascript} alt=""/>
          </div>
          <div className="absolute bg-white w-[80px] h-[80px] rounded-full shadow-md ss:flex justify-center items-center right-10 bottom-36 hidden">
            <img src={sass} alt=""/>
          </div>

        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
