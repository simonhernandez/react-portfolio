import React, { useState, useEffect } from "react";

import { Wrapper, Timeline, Carousel } from "../components";
import { layout, typography, spacing } from "../styles/style";
import { about, aboutInfo } from "../constants";

const About = () => {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev !== aboutInfo.length - 1 ? prev + 1 : 0))
    }, 4000);
  
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className={`${spacing.paddingY} text-center md:text-left dark:bg-dark_100 transition duration-500`}
    >
      <Wrapper styles={`${layout.wrapper} space-y-8 md:space-y-24`}>
        <header className="text-center">
          <h2 className={`${typography.heading2} heading-underline`}>About me</h2>
        </header>
        <div className="flex flex-col md:flex-row md:justify-between md:gap-10">
          {/* text-container */}
          <div className="flex-1 h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel info={aboutInfo} startIndex={startIndex} setStartIndex={setStartIndex} style={`mb-6 max-w-[430px] mx-auto md:max-w-none md:mb-0`}/>
          </div>

          {/* image-container */}
          <div className="space-y-4 w-full max-w-[550px] m-auto">
            <h3 className={`${typography.heading3}`}>
              I am <span className="text-primary">Simon Hernandez</span>
            </h3>
            {aboutInfo.map((item, index) => {
              return (
                <p>{index === startIndex && item.text}</p>
              )
            })}


          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default About;
