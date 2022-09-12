import React from "react";
import { typography } from "../styles/style";

const Project = ({ id, img, title, description, technologies, link }) => {
  return (
    <div className="min-w-[300px] max-w-[350px] mx-auto shadow-project rounded-md overflow-hidden text-left md:col-span-6 lg:col-span-4">
      <div className="overflow-hidden">
        <img
          src={img}
          alt={`A Preview Image of a the ${title} Project`}
          className=" scale-110 transition-all"
        />
      </div>

      <div className="p-2 space-y-2">
        <ul className="flex justify-start items-center">
          {technologies.map((technology, index) => {
            return (
                <li key={index} className={`bg-primary_light py-[2.777px] px-[8.333px] rounded-sm ${technologies.length - 1 !== index ? 'mr-1' : ''}`}>{technology}</li>
            )
          })}
        </ul>

        <h4 className={`${typography.heading4}`}>{title}</h4>

        <p className={`${typography.text_sm}`}>
          {description}
        </p>

        <div className="flex justify-between items-center">
          <a
            href={link.repo}
            className="btn btn--ghost btn--small w-[48%] flex justify-center items-center"
            target="_blank"
          >
            <span className="text_xs mr-2">View Code</span>
            <i className="bx bx-link-external"></i>
          </a>

          <a
            href={link.site}
            className="btn btn--ghost btn--small"
            target="_blank"
          >
            <span className="text-xs">View Site</span>
            <i className="bx bx-link-external"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
