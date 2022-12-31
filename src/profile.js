// Change website animations
const animation = {
	// make it false to switch off fade-up animation
	animate: true,
	// animation playing duration
	duration: 750,
	// if false, animation plays everytime element comes on screen
	once: true
};
// Change your display name on tha landing display
const header = {
	name: 'Rohit'
};
const background = {
	// Options: Snow or Particle
	type: 'Snow'
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = 'About Me';
const about = {
	paragraph:
		'I am a Self taught Full Stack Web Developer,currently pursuing B-TECH from KJ Somaiya College Of Engineering majoring in Information Technology.I have an experience of more than a year in web and app development and had interned at multiple startups,beside this I am also a MLH Prep Fellow.During my free time I like to solve problems on Leetcode and GFG which helps me to brush up my coding skills.I am a keen learner and always like to explore new technology and stack.Currently looking for full time roles 👨‍💻.',
	codechef: 'https://www.codechef.com/users/rohitraje_123',
	hackerRank: 'https://www.hackerrank.com/rp589006',
	leetcode: 'https://leetcode.com/rohitraje/',
	GFG: 'https://auth.geeksforgeeks.org/user/RohitPatil6/practice',
	codeforces: 'https://codeforces.com/profile/raje_123'
};

// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
	{
		name: 'HTML5',
		faClass: 'fab fa-html5'
	},
	{
		name: 'CSS3',
		faClass: 'fab fa-css3'
	},
	{
		name: 'Javascript',
		faClass: 'fab fa-js'
	},
	{
		name: 'SASS',
		faClass: 'fab fa-sass'
	},
	{
		name: 'Node',
		faClass: 'fab fa-node'
	},
	{
		name: 'Python',
		faClass: 'fab fa-python'
	},
	{
		name: 'Java',
		faClass: 'fab fa-java'
	},
	{
		name: 'PHP',
		faClass: 'fab fa-php'
	},
	{
		name: 'My-Sql',
		faClass: 'fas fa-database'
	},
	{
		name: 'React-Js',
		faClass: 'fab fa-react'
	},
	{
		name: 'NPM',
		faClass: 'fab fa-npm'
	},
	{
		name: 'Heroku',
		faClass: 'fas fa-h-square'
	},
	{
		name: 'MongoDB',
		faClass: 'fas fa-database'
	}
];
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = 'Past Projects';
const projects = [
	{
		// Add image in './styles/images.css' in #project1
		id: 'project1',
		name: 'Frontened Projects',
		skills: ['HTML, CSS, JS'],
		url: 'https://github.com/rohit-raje-786/MY-PROJECTS'
	},
	{
		// Add image in './styles/images.css' in #project2
		id: 'project2',
		name: 'Quiz App',
		skills: ['HTML, CSS, JS'],
		url: 'https://github.com/rohit-raje-786/Quiz-App'
	},
	{
		// Add image in './styles/images.css' in #project3
		id: 'project3',
		name: 'Music App',
		skills: ['HTML, CSS, JS'],
		url: 'https://github.com/rohit-raje-786/Music-App'
	},
	{
		// Add image in './styles/images.css' in #project4
		id: 'project4',
		name: 'Jump Game',
		skills: ['HTML, CSS, JS, REACTJS'],
		url: 'https://github.com/rohit-raje-786/Jump-Game'
	},
	{
		// Add image in './styles/images.css' in #project5
		id: 'project5',
		name: 'Go Corona Go',
		skills: ['HTML, CSS, EJS, REACTJS, MONGODB, NODEJS'],
		url: 'https://github.com/rohit-raje-786/gocoronago'
	},
	{
		// Add image in './styles/images.css' in #project6
		id: 'project6',
		name: 'Recipe App',
		skills: ['HTML, CSS, REACTJS'],
		url: 'https://github.com/rohit-raje-786/Recipe-App'
	},
	{
		// Add image in './styles/images.css' in #project6
		id: 'project8',
		name: 'Google Forms Clone',
		skills: ['ReactJs,MaterialUI,Antd'],
		url: 'https://github.com/rohit-raje-786/Google-Forms-Clone'
	},
	{
		// Add image in './styles/images.css' in #project6
		id: 'project9',
		name: 'Blockchain App',
		skills: ['ReactJs,Solidity,Bootstrap,Ethereum'],
		url: 'https://github.com/rohit-raje-786/Blockchain'
	},
	{
		// Add image in './styles/images.css' in #project6
		id: 'project10',
		name: 'ERC20-Based Token',
		skills: ['ReactJs,Solidity,Ethereum,Ganache'],
		url: 'https://github.com/rohit-raje-786/ERC20-RPToken'
	},
	{
		// Add image in './styles/images.css' in #project6
		id: 'project11',
		name: 'DropBox Using Blockchain',
		skills: ['ReactJs,Solidity,Web3,Ethereum,Hardhat'],
		url: 'https://github.com/rohit-raje-786/DropBox'
	},
	{
		// Add image in './styles/images.css' in #project6
		id: 'project12',
		name: 'Lottery Game Using Blockchain',
		skills: ['ReactJs,Material-UI,Solidity,Ethereum'],
		url: 'https://github.com/rohit-raje-786/Lottery-Game'
	},
	{
		// Add image in './styles/images.css' in #project6
		id: 'project13',
		name: 'NFT Minter',
		skills: ['ReactJs,Solidity,Hardhat,Ethereum'],
		url: 'https://github.com/rohit-raje-786/NFT-MINTER'
	},
	{
		// Add image in './styles/images.css' in #project6
		id: 'project14',
		name: 'Fake Product Identification Using Blockchain',
		skills: ['ReactJs,Solidity,Hardhat,Ethereum'],
		url: 'https://github.com/rohit-raje-786/Fake-product-identification'
	}
];

const section4Title = 'My Work';
const miscellaneous = [
	{
		// Add image in './styles/images.css' in #misc1
		id: 'work1',
		name: 'Ceedmy.com',
		url: 'https://ceedmyacademy.herokuapp.com/'
	},
	{
		// Add image in './styles/images.css' in #misc2
		id: 'work2',
		name: 'WhiteBoard',
		url: 'https://rohit-patil-whiteboard.netlify.app/'
	},
	{
		// Add image in './styles/images.css' in #misc3
		id: 'work3',
		name: 'React App Task',
		url: 'https://react-app-rohit.netlify.app/'
	},
	{
		// Add image in './styles/images.css' in #misc3
		id: 'work4',
		name: 'Meeting-Scheduler App(with google-auth)',
		url: 'https://appointment-scheduler-frontend.herokuapp.com/'
	}
];

const section5Title = 'Get in Touch';
const contact = {
	pitch: ' I’m always down for hearing about new projects, so feel free to drop me a line.',
	copyright: 'Rohit Patil',
	Gmail: 'rp589006@gmail.com'
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
	github: 'https://github.com/rohit-raje-786',
	linkedin: 'https://www.linkedin.com/in/rohit-patil-576216192',
	twitter: 'https://twitter.com/rohitpatil_123',

	resume: 'https://drive.google.com/file/d/10vO3Ewa0yl4ERaSWf3pa9O_L9CqVMzBa/view?usp=sharing'
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
	section5Title
};
