const MAIN_PATH = "master/assets";

export const CONFIG = {
  assets: {
    css: `${MAIN_PATH}/css/style.css`,
    js: `${MAIN_PATH}/js/script.js`,
    media: `${MAIN_PATH}/media`,
    projects: `${MAIN_PATH}/media/projects`,
    tech: `${MAIN_PATH}/media/tech`,
  },

  ghRepo: {
    name: "jQuery-SPA-Boilerplates",
    user: "ladunjexa",
  },
};

export const webData = {
  title: "ladunjexa — jQuery SPA Boilerplates",

  navbar: {
    title: {
      span: "jQuery SPA Boilerplates",
    },
    githubLink: `https://github.com/${CONFIG.ghRepo.user}/${CONFIG.ghRepo.name}`,
  },

  hero: {
    title: {
      heading1: "Build 3 Well-designed Websites with",
      span: "HTML, CSS and jQuery.",
    },
    subtitle: {
      a: {
        text: "Templates",
        href: "https://github.com/imfunniee/fimbo/",
      },
      span: "based on Fimbo Kit, refactored by ladunjexa.",
    },
  },

  dialog: {
    headline: "Projects",
    buttonProps: {
      className:
        "bg-gradient-to-r from-gray-800 to-gray-500 hover:from-gray-500 hover:to-gray-400 text-white font-semibold py-1 px-2 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out",
      activeClassName:
        "from-indigo-800 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 focus:ring-indigo-500",
      type: "button",
    },
  },

  techstack: {
    divProps: {
      className: "h-12 transform hover:scale-125 duration-300 ease-in-out",
    },
  },
};

export const technologiesData = [
  { name: "HTML", img: "html_icon.svg" },
  { name: "CSS", img: "css_icon.svg" },
  { name: "JS", img: "js_icon.svg" },
  { name: "jQuery", img: "jquery_icon.svg" },
];

export const projectsData = [
  { name: "Graphique-Web", img: "graphique-mockup.png" },
  { name: "Surferline-Web", img: "surferline-mockup.png" },
  { name: "Talentdeco-Web", img: "talentdeco-mockup.png" },
];
