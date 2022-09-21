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
      className={`${spacing.paddingY} text-center md:text-left dark:bg-dark_100`}
    >
      <Wrapper styles={`${layout.wrapper} space-y-8 md:space-y-8`}>
        <header className="text-center max-w-xs mx-auto">
          <h2 className={`${typography.heading2} heading-underline`}>Portfolio</h2>
          <p>
            Here you will find some of my best work on frontend web development.
          </p>
        </header>

        {/* <div></div> */}

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
          
          <div className="flex justify-center mt-4">
          <button
            className=" top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            onClick={() =>
              setCurrentStartIndex((prev) =>
                currentStartIndex === 0 ? 0 : prev - 1
              )
            }
          >
            <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-primary/60 dark:bg-gray-800/30 group-hover:bg-primary/40 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-primary dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
              <span class="sr-only">Previous</span>
            </span>
          </button>
          <button
            className=" top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            onClick={() =>
              setCurrentStartIndex((prev) =>
                currentStartIndex === projects.length - MAX_SHOWN_CARDS
                  ? prev
                  : prev + 1
              )
            }
          >
            <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-primary/60 dark:bg-gray-800/30 group-hover:bg-primary/40 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-primary dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Portfolio;
