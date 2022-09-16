import React from "react";
import { Instagram, Linkedin, Github, Codepen } from "../assets";

const Socials = ({ socials, styles, color }) => {
  return (
    <ul className={styles}>
      {socials.map((social) => {
        return (
          <li key={social.id}>
            <a href={social.link} target="_blank" className="social-link">
              { social.id === 'instagram' && <Instagram fill={color} />}
              { social.id === 'linkedin' && <Linkedin fill={color} />}
              { social.id === 'github' && <Github fill={color} />}
              { social.id === 'codepen' && <Codepen fill={color} />}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
