import javascript from "@/public/javascript.svg";
import discordjs from "@/public/discordjs.svg";
import mongodb from "@/public/mongodb.svg";
import nodejs from "@/public/nodejs.svg";
import typescript from "@/public/typescript.svg";
import react from "@/public/react.svg";
import aws from "@/public/aws.svg";
import python from "@/public/python.svg";
import flask from "@/public/flask.svg";

export const firstName = "Lev";
export const lastName = "Koganov";
export const tagLine = "creative software developer";
export const textDescription = `I've started coding in 2020. Since then i been building, scaling, developing and desining software for some pretty cool companies. I also teach people to paint online
(incase you've got an empty canvas layin' around 🎨). Let's connect!`;
export const navBarItems = ["About", "Project", "Experience", "Contact"];
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
      "Designed to enchance user experience within Discord server. Developed with foucus on flexibility scalability, and user engagement, offers a diverse range of features tailored to meet the needs of varius Discord communities. It`s a versatile Discord bot that's currently running and utilized by a thriving community of 500+ active users.",
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
      "Social media platform designed to connect users with their friends, family, and interests in a dynamic and engaging environment. The platform offers a range of features to facilitate communication, content sharing, and community building.",
    stack: {
      icons: [nodejs, javascript, mongodb, react],
      names: ["Node.JS", "JavaScript", "MongoDB", "React"],
    },
    link: "https://github.com/Levkoganov/mini_facebook",
  },
];
