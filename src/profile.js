// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if false, animation plays everytime element comes on screen
  once: true,
};
// Change your display name on tha landing display
const header = {
  name: "Rohit",
};
const background = {
  // Options: Snow or Particle
  type: "Snow",
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me";
const about = {

  paragraph:
    "I am a Full Stack Web Developer,currently doing my internship at Levyne as a Frontened Developer and at Arconn as a Software Developer.I also do open-source contribution during my free time. Beside that I am  a Competitive programmer at codechef with a rating of 3 ⭐,5 ⭐ on HackerRank,2 ⭐ on Leetcode.",
  codechef: "https://www.codechef.com/users/rohitraje_123",
  hackerRank: "https://www.hackerrank.com/rp589006",
  leetcode: "https://leetcode.com/rohitraje/",
};

    paragraph: "I am a self taught Full Stack Web Developer.I have done an internship at Arconn at a position of software developer and currently doing my internship at Levyne as a Frontened Developer.I also do open-source contribution during my free time. Beside that I am  a Competitive programmer at codechef with a rating of 3 ⭐,5 ⭐ on HackerRank,2 ⭐ on Leetcode.",
    codechef:"https://www.codechef.com/users/rohitraje_123",
    hackerRank: "https://www.hackerrank.com/rp589006",
    leetcode: "https://leetcode.com/rohitraje/"
}

// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: "HTML5",
    faClass: "fab fa-html5",
  },
  {
    name: "CSS3",
    faClass: "fab fa-css3",
  },
  {
    name: "Javascript",
    faClass: "fab fa-js",
  },
  {
    name: "SASS",
    faClass: "fab fa-sass",
  },
  {
    name: "Node",
    faClass: "fab fa-node",
  },
  {
    name: "Python",
    faClass: "fab fa-python",
  },
  {
    name: "Java",
    faClass: "fab fa-java",
  },
  {
    name: "PHP",
    faClass: "fab fa-php",
  },
  {
    name: "My-Sql",
    faClass: "fas fa-database",
  },
  {
    name: "React-Js",
    faClass: "fab fa-react",
  },
  {
    name: "NPM",
    faClass: "fab fa-npm",
  },
  {
    name: "Heroku",
    faClass: "fas fa-h-square",
  },
  {
    name: "MongoDB",
    faClass: "fas fa-database",
  },
];
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Past Projects";
const projects = [

  {
    // Add image in './styles/images.css' in #project1
    id: "project1",
    name: "Frontened Projects",
    skills: ["HTML, CSS, JS"],
    url: "https://github.com/rohit-raje-786/MY-PROJECTS",
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project2",
    name: "Quiz App",
    skills: ["HTML, CSS, JS"],
    url: "https://github.com/rohit-raje-786/Quiz-App",
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project3",
    name: "Music App",
    skills: ["HTML, CSS, JS"],
    url: "https://github.com/rohit-raje-786/Music-App",
  },
  {
    // Add image in './styles/images.css' in #project4
    id: "project4",
    name: "Jump Game",
    skills: ["HTML, CSS, JS, REACTJS"],
    url: "https://github.com/rohit-raje-786/Jump-Game",
  },
  {
    // Add image in './styles/images.css' in #project5
    id: "project5",
    name: "Go Corona Go",
    skills: ["HTML, CSS, EJS, REACTJS, MONGODB, NODEJS"],
    url: "https://github.com/rohit-raje-786/gocoronago",
  },
  {
    // Add image in './styles/images.css' in #project6
    id: "project6",
    name: "Recipe App",
    skills: ["HTML, CSS, REACTJS"],
    url: "https://github.com/rohit-raje-786/Recipe-App",
  },
  {
    // Add image in './styles/images.css' in #project6
    id: "project7",
    name: "Face-mask Detection",
    skills: ["OpenCV, Tensorflow"],
    url: "https://github.com/rohit-raje-786/face-mask-detection",
  },
];


const section4Title = "My Work";
const miscellaneous = [
  {
    // Add image in './styles/images.css' in #misc1
    id: "work1",
    name: "Ceedmy.com",
    url: "https://www.ceedmy.com/",
  },
  {
    // Add image in './styles/images.css' in #misc2
    id: "work2",
    name: "WhiteBoard",
    url: "https://rohit-patil-whiteboard.netlify.app/",
  }
];

const section5Title = "Get in Touch";
const contact = {
  pitch:
    " I’m always down for hearing about new projects, so feel free to drop me a line.",
  copyright: "Rohit Patil",
  ContactNo: "7021007903",
  Gmail: "rp589006@gmail.com",
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  github: "https://github.com/rohit-raje-786",
  linkedin: "https://www.linkedin.com/in/rohit-patil-576216192",

  resume:
    "https://drive.google.com/file/d/1sVxQnV4vJiOjVEOcYc2NHuscnI4m8agu/view?usp=sharing",
};
// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  miscellaneous,
  contact,
  social,
  section2title,
  section3Title,
  section4Title,
  section5Title,
};
