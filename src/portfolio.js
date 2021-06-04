import emoji from 'react-easy-emoji';

import googlelogo from './assets/img/icons/common/google.svg'
import github from './assets/img/icons/common/github.svg'
import airbnb from './assets/img/icons/common/airbnbLogo.png'

export const greetings = {
  "name": "Dev C. Krishna",
  "title": "Hi all, I'm Dev",
  "description": "A passionate Full Stack Web Developer and Mobile App Developer having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Python / Django  and some other cool libraries and frameworks and Cross Platform Mobile Apps With Flutter.",
  "resumeLink": "https://drive.google.com/file/d/1_dJui9Ea_kui_bz7Oj5rbn4b50x7DUia/view?usp=sharing"
}

export const openSource = {
  githubUserName: 'devckrishna',
};

export const contact = {

}

export const socialLinks = {

  "github": "https://github.com/devckrishna",
  "linkedin": "https://www.linkedin.com/in/dev-c-krishna-8385a51ab/",
  "instagram": "https://www.instagram.com/dev__2403/"
}

export const skillsSection = {
  title: 'What I do',
  subTitle: 'I AM A CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  skills: [
    emoji(
      '⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications'
    ),
    emoji('⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks'),
    emoji(
      '⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean'
    ),
  ],

  softwareSkills: [
    {
      skillName: 'html-5',
      fontAwesomeClassname: 'vscode-icons:file-type-html',
    },
    {
      skillName: 'css3',
      fontAwesomeClassname: 'vscode-icons:file-type-css',
    },
    {
      skillName: 'sass',
      fontAwesomeClassname: 'logos:sass',
    },
    {
      skillName: 'JavaScript',
      fontAwesomeClassname: 'logos:javascript',
    },
    {
      skillName: 'TypeScript',
      fontAwesomeClassname: 'logos:typescript-icon',
    },
    {
      skillName: 'reactjs',
      fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
    },
    {
      skillName: 'nodejs',
      fontAwesomeClassname: 'logos:nodejs-icon',
    },
    {
      skillName: 'flutter',
      fontAwesomeClassname: 'logos:flutter',
    },

    {
      skillName: 'npm',
      fontAwesomeClassname: 'vscode-icons:file-type-npm',
    },
    {
      skillName: 'sql-database',
      fontAwesomeClassname: 'vscode-icons:file-type-sql',
    },
    {
      skillName: 'mongoDB',
      fontAwesomeClassname: 'vscode-icons:file-type-mongo',
    },
    {
      skillName: 'aws',
      fontAwesomeClassname: 'logos:aws',
    },
    {
      skillName: 'firebase',
      fontAwesomeClassname: 'logos:firebase',
    },
    {
      skillName: 'django',
      fontAwesomeClassname: 'logos:django',
    },
    {
      skillName: 'python',
      fontAwesomeClassname: 'logos:python',
    },
    {
      skillName: 'git',
      fontAwesomeClassname: 'logos:git-icon',
    },
    {
      skillName: 'docker',
      fontAwesomeClassname: 'logos:docker-icon',
    },
    {
      skillName: 'kotlin',
      fontAwesomeClassname: 'logos:kotlin',
    },
  ],
}


export const SkillBars = [
  {
    Stack: 'Frontend', //Insert stack or technology you have experience in
    progressPercentage: '80', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '88',
  },
  {
    Stack: 'Programming',
    progressPercentage: '90',
  },
]

export const educationInfo = [
  {
    schoolName: 'Netaji Subhas University Of Technology',
    subHeader: 'B.Tech Electrical Engineering',
    duration: 'August 2019 - August 2023',
    // desc: 'Participated in the research of XXX and published 3 papers.',
    // descBullets: [
    //   'Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit',
    //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    // ],
  },

  {
    schoolName: 'Arwachin Bharti Bhawan',
    subHeader: 'XII PCM',
    duration: 'May 2017 - May 2018',
    // desc:
    //   'Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...',
    // descBullets: ['Lorem ipsum dolorfdg sit amet, consectetur adipiscing elit'],
  },
]

export const experience = [
  // {
]

export const projects = [
  {
    name: "Grex",
    desc: "It is a collaboration tool that organizes your projects into boards inspired from Trello.com  Used React.js for FrontEnd and Redux for state management and Used Node.js And Express for BackEnd MongoDB for storing data.Made use of JsonWebTokens for User-Authentication.",
    link: {
      name: "Link",
      url: "http://grexdev.herokuapp.com/"
    }
  },
  {
    name: "Extreme-Joy",
    desc: "It is an online E-Commerce WebApp Where people can buy smartphones, laptops and other accessories and pay using Credit/Debit cards Used Django-REST for building the BackEnd and React and Redux for FrontEnd and StateManagement  Made Use of PayPal for payment integration",
    link: {
      name: "Link",
      url: "https://extremejoy.herokuapp.com/"
    }
  },
  {
    name: "Chess-Engine",
    desc: " Built A Chess-Engine using PyGame  AI which abides by all the rules of chess ranging from pawn promotion to castling. Applied Min-Max algorithm along with Alpha-Beta prunning.  can look up to a depth of 8-ply to search for a smart possible move in an efficient manner",
    link: {
      name: "Link",
      url: "https://github.com/devckrishna/chessEngine"
    }
  },
  {
    name: "Kailo",
    desc: "  The objective of this application is to quantify your stress level, suggest appropriate methods to tackle it and connect you with people Used Flutter for building the app and Firebase for User-Authentication and storing data. Collaborated with two peers for building the app in a Hackathon",
    link: {
      name: "Link",
      url: "https://github.com/devckrishna/KailoHackOn"
    }
  }
]