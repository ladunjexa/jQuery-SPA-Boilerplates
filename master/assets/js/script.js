let projectsList = [
  { name: "Graphique-Web", img: "graphique-mockup.png" },
  { name: "Surferline-Web", img: "surferline-mockup.png" },
  { name: "Talentdeco-Web", img: "talentdeco-mockup.png" },
];

let technologiesUsed = [
  { name: "HTML", img: "html_icon.svg" },
  { name: "CSS", img: "css_icon.svg" },
  { name: "JS", img: "js_icon.svg" },
  { name: "jQuery", img: "jquery_icon.svg" },
];

let githubRepoLink =
  "https://github.com/ladunjexa/jQuery-SPA-Boilerplates";

let buttonProps = {
  className:
    "bg-gradient-to-r from-gray-800 to-gray-500 hover:from-gray-500 hover:to-gray-400 text-white font-semibold py-1 px-2 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out",
  type: "button",
};

let techContainerClasses =
  "h-12 transform hover:scale-125 duration-300 ease-in-out";

let techContainer = document.querySelector(".technologies-container");
let portfolioList = document.querySelector(".portfolio-list");
let projectContainer = document.querySelector(".project-container");
let projectHref = document.querySelector(".project-href");
let projectHrefBtn = document.querySelector(".project-href-button");
let githubNavLink = document.querySelector(".github-button-link");

window.onload = function () {
  // Set github link
  githubNavLink.setAttribute("href", githubRepoLink);

  // Set technologies
  technologiesUsed.forEach((tech) => {
    let img = document.createElement("img");

    img.className = techContainerClasses;
    img.src = `master/assets/media/${tech.img}`;
    img.alt = `${tech.name} icon`;

    techContainer.appendChild(img);
  });

  // Set projects
  projectsList.forEach((project) => {
    let button = document.createElement("button");

    button.id = `button-${project.name}`;
    button.className = buttonProps.className;
    button.type = buttonProps.type;
    button.textContent = `${project.name.slice(0, project.name.length - 4)}`;
    button.onclick = () => loadProject(project);

    portfolioList.appendChild(button);
  });

  // Load random initial project
  loadProject(projectsList[Math.floor(Math.random() * projectsList.length)]);
};

// Load project
loadProject = (project) => {
  projectContainer.setAttribute(
    "src",
    `master/assets/media/projects/${project.img}`
  );
  projectHref.setAttribute(
    "href",
    `https://ladunjexa.github.io/jQuery-SPA-Boilerplates/${project.name}/}`
  );
  projectHrefBtn.innerHTML = `Go to ${project.name.replace("-", " ")}`;
};
