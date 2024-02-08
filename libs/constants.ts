import javascript from "@/public/javascript.svg";
import discordjs from "@/public/discordjs.svg";
import mongodb from "@/public/mongodb.svg";
import nodejs from "@/public/nodejs.svg";
import typescript from "@/public/typescript.svg";
import react from "@/public/react.svg";
import aws from "@/public/aws.svg";
import python from "@/public/python.svg";
import flask from "@/public/flask.svg";
import { IExperience } from "./types";

export const firstName = "Lev";
export const lastName = "Koganov";
export const tagLine = "Full-Stack developer";
export const textDescription =
  "I'm a Full Stack Developer with 3 years of hands-on experience designing, developing and implementing applications and solutions using a range of technologies and programming languages.";
export const navBarItems = ["About", "Projects", "Experience", "Contact"];
export const coreTech = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node.JS",
  "HTML",
  "CSS",
  "Next.js",
  "Redux",
  "Express",
  "MongoDB",
  "GitHub",
  "GitLab",
  "Jira",
  "Figma",
];
export const secondaryTech = [
  "Python",
  "Java",
  "C#",
  "PHP",
  "Wordpress",
  "AWS",
  "Unity",
  "Docker",
  "MySQL",
  "Linux",
];

export const projectsInfo = [
  {
    projectId: 1,
    header: "Discord Chat - Bot",
    description:
      "Designed to enchance user experience within Discord server. Developed with foucus on flexibility, scalability and user engagement. Offers a diverse range of features tailored to meet the needs of varius Discord communities. It`s a versatile Discord bot that's currently running and utilized by a thriving community of 500+ active users.",
    stack: {
      icons: [nodejs, typescript, mongodb, discordjs],
      names: ["Node.JS", "TypeScript", "MongoDB", "Discord.JS"],
    },
    link: "https://github.com/Levkoganov/discord_bot_ts",
  },
  {
    projectId: 2,
    header: "Crypto Currency - Interface",
    description:
      "Provide a seamless and intuitive interface for users to interact with various aspects of the cryptocurrency ecosystem. The primary goal of this project is to offer users a comprehensive platform where they can monitor real-time cryptocurrency market data.",
    stack: {
      icons: [javascript, nodejs, react, mongodb, aws],
      names: ["JavaScript", "Node.JS", "React", "MongoDB", "AWS"],
    },
    link: "https://github.com/Levkoganov/bitcoin_currency_graph",
  },
  {
    projectId: 3,
    header: "Blog - Application",
    description:
      "Dynamic and responsive web application designed to allow users to create, publish, and manage their own blogs. It encompasses both the front-end and back-end components necessary for a fully functional blogging experience.",
    stack: {
      icons: [python, flask, react, typescript],
      names: ["Python", "Flask", "React", "TypeScript"],
    },
    link: "https://github.com/Levkoganov/BLOXROUTE-blog-application",
  },
  {
    projectId: 4,
    header: "Social Media - Application",
    description:
      "Social media platform designed to connect users with their friends, family and interests in a dynamic and engaging environment. The platform offers a range of features to facilitate communication, content sharing and community building.",
    stack: {
      icons: [nodejs, javascript, mongodb, react],
      names: ["Node.JS", "JavaScript", "MongoDB", "React"],
    },
    link: "https://github.com/Levkoganov/mini_facebook",
  },
];

export const experience: IExperience[] = [
  {
    id: 1,
    companyName: "PlaySmart",
    workDuration: "2021 - 2022",
    title: "Fullstack Developer",
    location: "Israel",
    description:
      "Developed a web gaming system from scratch using a high veraity of technologies. Worked closely with the CRM team, implementing web serivies, creating an interactive interface and REST API.",
    companywebsite: "https://www.playsmart.co.il/games-home/",
    technologies: [
      "Node.JS",
      "PHP",
      "JavaScript",
      "JQuery",
      "Wordpress",
      "MongoDB",
      "MySQL",
      "BitBucket",
      "Git",
      "Jira",
    ],
  },

  {
    id: 2,
    companyName: "Wizdome",
    workDuration: "2022 - 2023",
    title: "Fullstack Developer",
    location: "Israel",
    description:
      "Developed a user interface for a cyber security company. Integtating with a complex cyber security engine that warns and prevent security breaches.",
    technologies: [
      "React",
      "Node.JS",
      "Express",
      "Redux",
      "MongoDB",
      "TypeScript",
      "Docker",
      "GitHub",
      "Git",
      "Jira",
      "Linux",
    ],
  },
  {
    id: 3,
    companyName: "Matrix",
    workDuration: "2023",
    title: "Frontend Developer",
    location: "Israel",
    description:
      "Developed a interface from scratch for a Bank clearing center. Worked on a tight sceduale according to specification.",
    technologies: ["React", "TypeScript", "Mobx", "Figma", "GitLab", "Git", "Jira"],
  },
];
