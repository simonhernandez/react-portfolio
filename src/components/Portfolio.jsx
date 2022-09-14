import React, { useState } from "react";

import { Wrapper, Project } from "../components";
import { layout, typography, spacing } from "../styles/style";
import { projects } from "../constants";

const Portfolio = () => {
  const [currentStartIndex, setCurrentStartIndex] = useState(0)
  const MAX_SHOWN_CARDS = 4;

  return (
    <section
      id="portfolio"
      className={`${spacing.paddingY} text-center md:text-left`}
    >
      <Wrapper styles={`${layout.wrapper} space-y-8 md:space-y-24`}>
        <header className="text-center max-w-xs mx-auto">
          <h2 className={typography.heading2}>Portfolio</h2>
          <p>
            Here you will find some of my best work on frontend web development.
          </p>
        </header>

        <div></div>

        <div>
          <ul className="flex flex-wrap justify-around gap-y-8 gap-x-0">
            {projects.slice(currentStartIndex, currentStartIndex +  MAX_SHOWN_CARDS).map((project, index) => {
              return (
                <li key={project.id}>
                  <Project {...project} />
                </li>
              );
            })}
          </ul>
        </div>
      </Wrapper>
    </section>
  );
};

export default Portfolio;
