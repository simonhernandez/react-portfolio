import React from "react";

import { Wrapper } from "../components";
import { spacing, layout, typography } from "../styles/style";
import { skills, languages } from "../constants";
import { frontend, languages_svg, html5 } from "../assets";

const Skills = () => {
  return (
    <section
      id="skills"
      className={`${spacing.paddingY} bg-primary_very_light text-center md:text-left`}
    >
      <Wrapper styles={`${layout.wrapper} space-y-8 md:space-y-24`}>
        <header className="text-center">
          <h2 className={typography.heading2}>Skills</h2>
        </header>

        <section className="space-y-8 md:flex md:flex-row-reverse md:justify-between md:space-y-0">
          {/* Image Container */}
          <div className="flex-1">
            <img src={frontend} alt="An illustration of a person coding" className="w-full max-w-[320px] m-auto md:max-w-[457px] md:m-0 md:ml-auto" />
          </div>

          {/* Text Container */}
          <div className="space-y-4 w-full max-w-[550px] m-auto md:m-0">
            <h3 className={`${typography.heading3} text-primary`}>Frontend Development</h3>
            <p>
              I began my coding journey early on as a college freshman after
              taking a couple of programming courses. <br /> Eventually ended up
              teaching myself about the web and the technologies that it is
              built upon.
            </p>
            <p>
              I am curiosity-driven, detail-oriented and a lover of clean,
              organized and well-written code.
            </p>
            <div>
              <ul className="flex flex-wrap justify-between">
                {skills.map((skill) => {
                  return (
                    <li key={skill.id} className="flex flex-col justify-center items-center">
                      <div className="bg-white w-[80px] h-[80px] rounded-full shadow-md flex justify-center items-center">
                        <img src={skill.icon} alt="skill" />
                      </div>
                      <small className="capitalize">{skill.title}</small>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>
        <section className="space-y-8 md:flex md:flex-row md:justify-between md:space-y-0">
          {/* Image Container */}
          <div className="flex-1">
            <img src={languages_svg} alt="An illustration of people speaking" className="w-full max-w-[320px] m-auto md:max-w-[457px] md:m-0 md:mr-auto"/>
          </div>

          {/* Text Container */}
          <div className="space-y-4 w-full max-w-[550px] m-auto">
            <h3 className={`${typography.heading3} text-primary`}>Languages</h3>
            <p>I speak a total of 3 languages.</p>
            <p>
              Spanish as mother language, English and German at an advanced
              level, both spoken and written.
            </p>
            <div>
              <ul className="flex flex-wrap justify-between md:justify-start md:gap-4">
                {languages.map((language) => {
                  return (
                    <li key={language.id} className="flex flex-col justify-center items-center">
                      <div className="bg-white w-[80px] h-[80px] rounded-full shadow-md flex justify-center items-center">
                        <img src={language.icon} alt="language" />
                      </div>
                      <small className="capitalize">{language.title}</small>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>
      </Wrapper>
    </section>
  );
};

export default Skills;
