import { html5, css, javascript, react, tailwindcss, bootstrap, styled_components, sass, git, github, spanish, english, german, payapi, scoot, maker, pod, myteam, officelite, devjobs, githubsearch, easybank } from "../assets";

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

export const timelineItems = [
    {
        id: "lorem",
        title: "lorem",
        subtitle: "lorem",
        date: "lorem",
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
        title: "styled components",
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