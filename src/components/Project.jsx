import React from "react";
import { typography } from "../styles/style";

const Project = ({ id, img, title, description, technologies, link }) => {
  return (
    <div className="project w-[250px] mx-auto shadow-lg rounded-2xl overflow-hidden text-left md:col-span-6 lg:col-span-4">
      <div className="overflow-hidden">
        <img
          src={img}
          alt={`A Preview Image of a the ${title} Project`}
        />
      </div>

      <div className="p-2 space-y-2 md:p-4">
        <ul className="flex justify-start items-center">
          {technologies.map((technology, index) => {
            return (
                <li key={index} className={`bg-primary_light py-[2.777px] px-[8.333px] rounded-sm text-[12px] font-bold text-primary ${technologies.length - 1 !== index ? 'mr-1' : ''}`}>{technology}</li>
            )
          })}
        </ul>

        <h4 className={`${typography.heading4} truncate`}>{title}</h4>

        <p className={`text-[12px] h-[50px] overflow-hidden relative`}>
          {description}
          <div className="absolute -bottom-1 right-0">...</div>
        </p>

        <div className="flex justify-between items-center">
          <a
            href={link.repo}
            className="btn btn--ghost btn--small w-[48%] flex justify-center items-center border border-primary rounded-sm py-2"
            target="_blank"
          >
            <span className="text-[12px] mr-2 uppercase text-primary font-bold">View Code</span>
            <i className="bx bx-link-external"></i>
          </a>

          <a
            href={link.site}
            className="btn btn--ghost btn--small w-[48%] flex justify-center items-center border border-primary rounded-sm py-2"
            target="_blank"
          >
            <span className="text-[12px] mr-2 uppercase text-primary font-bold">View Site</span>
            <i className="bx bx-link-external"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
