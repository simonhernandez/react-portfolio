import { html5, css, javascript, react, tailwindcss, bootstrap, styled_components, sass, git, github, spanish, english, german, payapi, scoot, maker, pod, myteam, officelite, devjobs, githubsearch, easybank, instagram, linkedin, github_svg, codepen } from "../assets";

export const navLinks = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "about",
      title: "About",
    },
    {
      id: "skills",
      title: "Skills",
    },
    {
      id: "portfolio",
      title: "Portfolio",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

export const socialLinks = [
    {
      id: "instagram",
      title: "Instagram",
      icon: instagram,
      link: "https://instagram.com/simonhb97/",
    },
    {
      id: "linkedin",
      title: "Linkedin",
      icon: linkedin,
      link: "https://linkedin.com/in/simonhernandezbarboza/",
    },
    {
      id: "github",
      title: "Github",
      icon: github_svg,
      link: "https://github.com/simonhernandez",
    },
    {
      id: "codepen",
      title: "Codepen",
      icon: codepen,
      link: "https://codepen.io/simonhernandez",
    },
  ];

export const about = [
    {
        id: 0,
        title: "Education",
        info: [
          {
            id: 0,
            title: "telecommunications engineering",
            subtitle: "universidad católica andrés bello",
            date: "oct. 2014 - oct. 2018",
          },
          {
            id: 1,
            title: "web development",
            subtitle: "platzi",
            date: "mar. 2020 - nov. 2020",
          },
          {
            id: 2,
            title: "web development",
            subtitle: "coursera",
            date: "may. 2022 - oct. 2022",
          },
        ]
    },
    {
        id: 1,
        title: "Work",
        info: [
          {
            id: 0,
            title: "implementation & support engineer",
            subtitle: "soutec LC.",
            date: "jun. 2018 - mar. 2020",
          },
          {
            id: 1,
            title: "freelance web developer",
            subtitle: "freelance",
            date: "nov. 2020 - oct. 2021",
          },
          {
            id: 2,
            title: "implementation & support engineer",
            subtitle: "soutec LC.",
            date: "nov. 2021 - may. 2022",
          },
        ]
    }
];

export const skills = [
    {
        id: "skill-1",
        icon: html5,
        title: "html5",
    },
    {
        id: "skill-2",
        icon: css,
        title: "css3",
    },
    {
        id: "skill-3",
        icon: javascript,
        title: "javascript",
    },
    {
        id: "skill-4",
        icon: react,
        title: "reactJS",
    },
    {
        id: "skill-5",
        icon: tailwindcss,
        title: "tailwindCSS",
    },
    {
        id: "skill-6",
        icon: bootstrap,
        title: "bootstrap",
    },
    {
        id: "skill-7",
        icon: styled_components,
        title: "styled C.",
    },
    {
        id: "skill-8",
        icon: sass,
        title: "scss",
    },
    {
        id: "skill-9",
        icon: git,
        title: "git",
    },
    {
        id: "skill-10",
        icon: github,
        title: "github",
    },
];

export const languages = [
    {
        id: "language-1",
        icon: spanish,
        title: "spanish",
    },
    {
        id: "language-2",
        icon: english,
        title: "english",
    },
    {
        id: "language-3",
        icon: german,
        title: "german",
    },
];

export const projects = [
    {
        id: "project-1",
        img: payapi,
        title: 'PayAPI',
        description: 'Four page website that showcases the features of the PayAPI solution, an API that allows business owners to accept online payments with ease.',
        technologies: ['html', 'scss', 'js'],
        link: {
            repo: 'https://github.com/simonhernandez/payapi',
            site: 'http://payapi.vercel.app/',
        },
    },
];