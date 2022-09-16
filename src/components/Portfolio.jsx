import React, { useState } from "react";

import { Wrapper, Project } from "../components";
import { layout, typography, spacing } from "../styles/style";
import { projects } from "../constants";

const Portfolio = () => {
  const [currentStartIndex, setCurrentStartIndex] = useState(0);
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

        <div className="relative">
          <ul className="flex flex-wrap justify-center gap-y-8 gap-x-4 overflow-hidden py-4">
            {projects
              .slice(currentStartIndex, currentStartIndex + MAX_SHOWN_CARDS)
              .map((project, index) => {
                return (
                  <li key={project.id}>
                    <Project {...project} />
                  </li>
                );
              })}
          </ul>
          <button
          className="absolute -left-4 top-0 bottom-0 my-auto text-[32px] text-primary bg-primary_very_light w-10 h-10 rounded-full border-primary border-2 flex justify-center items-center shadow-md"
              onClick={() =>
                setCurrentStartIndex((prev) =>
                  currentStartIndex === 0 ? 0 : prev - 1
                )
              }
            >
              {'<'}
            </button>
            <button
            className="absolute -right-4 top-0 bottom-0 my-auto text-[32px] text-primary bg-primary_very_light w-10 h-10 rounded-full border-primary border-2 flex justify-center items-center shadow-md"
              onClick={() =>
                setCurrentStartIndex((prev) =>
                  currentStartIndex === projects.length - MAX_SHOWN_CARDS
                    ? prev
                    : prev + 1
                )
              }
            >
              {'>'}
            </button>
          <div className="flex justify-between mt-4">
            
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Portfolio;
