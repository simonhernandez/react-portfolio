import { html5, css, javascript, react, tailwindcss, bootstrap, styled_components, sass, git, github, spanish, english, german, payapi, scoot, maker, pod, myteam, officelite, devjobs, githubsearch, easybank, instagram, linkedin, github_svg, codepen, Instagram } from "../assets";

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
    {
        id: "project-2",
        img: myteam,
        title: 'MyTeam',
        description: 'Four page website that showcases MyTeam. A platform that allows you to Build & manage distributed teams like no one else.',
        technologies: ['html', 'scss', 'js'],
        link: {
            repo: 'https://github.com/simonhernandez/myTeamMultiPage',
            site: 'https://my-team-multi-page.vercel.app/',
        },
    },
    {
        id: "project-3",
        img: devjobs,
        title: 'devjobs',
        description: 'Four page website that showcases the features of the PayAPI solution, an API that allows business owners to accept online payments with ease.',
        technologies: ['react', 'tailwind', 'react-router'],
        link: {
            repo: 'https://github.com/simonhernandez/devjobs-dashboard',
            site: 'https://devjobs-dashboard.vercel.app/',
        },
    },
    {
        id: "project-4",
        img: easybank,
        title: 'easybank',
        description: 'Four page website that showcases the features of the PayAPI solution, an API that allows business owners to accept online payments with ease.',
        technologies: ['react', 'scss', 'mobile-first'],
        link: {
            repo: 'https://github.com/simonhernandez/easybank',
            site: 'https://easybank-seven-theta.vercel.app/',
        },
    },
    {
        id: "project-5",
        img: scoot,
        title: 'Scoot',
        description: 'Multipage website that showcases the Scoot App. An app that makes urban mobility easier, simple and fun.',
        technologies: ['html', 'scss', 'js'],
        link: {
            repo: 'https://github.com/simonhernandez/scootMultiPage',
            site: 'https://scoot-multi-page.vercel.app/',
        },
    },
    {
        id: "project-6",
        img: maker,
        title: 'Maker Landing Page',
        description: 'Single Landing Page that showcases Maker. A freelancing platform that helps you find the best independant professionals.',
        technologies: ['html', 'scss', 'js'],
        link: {
            repo: 'https://github.com/simonhernandez/marker-landingpage',
            site: 'https://marker-landingpage.vercel.app/',
        },
    },
    {
        id: "project-7",
        img: githubsearch,
        title: 'Github Search',
        description: 'Four page website that showcases the features of the PayAPI solution, an API that allows business owners to accept online payments with ease.',
        technologies: ['react', 'tailwind', 'axios'],
        link: {
            repo: 'https://github.com/simonhernandez/githubsearch',
            site: 'https://githubsearch-psi.vercel.app/',
        },
    },
    {
        id: "project-8",
        img: officelite,
        title: 'Officelite',
        description: 'Four page website that showcases the features of the PayAPI solution, an API that allows business owners to accept online payments with ease.',
        technologies: ['html', 'scss', 'js'],
        link: {
            repo: 'https://github.com/simonhernandez/officelite',
            site: 'https://officelite.vercel.app/',
        },
    },
    {
        id: "project-9",
        img: pod,
        title: 'Pod Landing Page',
        description: 'Four page website that showcases the features of the PayAPI solution, an API that allows business owners to accept online payments with ease.',
        technologies: ['html', 'tailwind', 'js'],
        link: {
            repo: 'https://github.com/simonhernandez/podLandingPage',
            site: 'https://pod-landing-page.simonhernandez.vercel.app/',
        },
    },
];