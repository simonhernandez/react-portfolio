import React, { useState } from "react";
// import {Carousel} from 'flowbite-react'

import { Wrapper, Timeline, Carousel } from "../components";
import { layout, typography, spacing } from "../styles/style";
import { about } from "../constants";
import { simonHero, about_01, about_02, about_03 } from "../assets";

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentTab = about.find((aboutItem) => {
    return aboutItem.id === currentIndex;
  });

  return (
    <section
      id="about"
      className={`${spacing.paddingY} text-center md:text-left`}
    >
      <Wrapper styles={`${layout.wrapper} space-y-8 md:space-y-24`}>
        <header className="text-center">
          <h2 className={typography.heading2}>About me</h2>
        </header>
        <div className="flex flex-col md:flex-row md:justify-between md:gap-10">
          {/* text-container */}
          <div className="flex-1 h-56 sm:h-64 xl:h-80 2xl:h-96">
            {/* <Carousel slideInterval={5000}>
              <img src={about_01} alt="" className="object-fill"/>
              <img src={about_02} alt="" className="object-fill"/>
              <img src={about_03} alt="" className="object-fill"/>
            </Carousel> */}
            <Carousel />
          </div>

          {/* image-container */}
          <div className="space-y-4 w-full max-w-[550px] m-auto">
            <h3 className={`${typography.heading3}`}>
              I am <span className="text-primary">Simon Hernandez</span>
            </h3>
            <p>
              ... a 23 year old Frontend Developer with a Bachelor's Degree in
              Telecommunication Engineering.
            </p>
            <p>
              I am proactive, organized and self-taught, capable of performing
              tasks that require team work, problem solving, and strong
              communication skills.
            </p>
            <p>Passionate about web technologies, telematics and baseball.</p>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default About;
