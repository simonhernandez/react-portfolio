import React from "react";

import { Wrapper, Project } from "../components";
import { layout, typography, spacing } from "../styles/style";
import { projects } from "../constants";

const Portfolio = () => {
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
          <ul className="flex flex-wrap justify-between gap-8">
            {projects.map((project, index) =>{
              return (
                <li key={project.id}>
                  <Project {...project} />
                </li>
              )
            })}
          </ul>
        </div>
      </Wrapper>
    </section>
  );
};

export default Portfolio;
