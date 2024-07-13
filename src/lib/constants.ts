import type { Site, Page, Project } from './types'

export const loaderAnimation = [
  '.loader',
  { opacity: [1, 0], pointerEvents: 'none' },
  { easing: 'ease-out' },
]

export const LINKS = {
  github: 'https://github.com/KTarun003',
  linkedin: 'https://www.linkedin.com/in/k-tarun-reddy-a37848249/',
  mail: 'mailto:tarunreddyk036@gmail.com',
}

// Global
export const SITE: Site = {
  TITLE: 'K Tarun Reddy',
  DESCRIPTION:
    'Portfolio of K Tarun Reddy',
  AUTHOR: 'K Tarun Reddy',
}

// Work Page
export const WORK: Page = {
  TITLE: 'Work',
  DESCRIPTION: 'Places I have worked.',
}

// Blog Page
export const BLOG: Page = {
  TITLE: 'Blog',
  DESCRIPTION: 'Writing on topics I am passionate about.',
}

// Projects Page
export const PROJECTS: Project[] = [
  {
    name:"FinMan",
    description:"Android app for financial institutions to manage anddistribute loans and process repayments.",
    img:"/finman.jpg",
    repository:"https://github.com/KTarun003/finman"
  },
  {
    name:"iCube",
    description:"Web application for students to learn latest technologies, network with their peers and collaborate on projects.",
    img:"/icube.png",
    repository:"https://github.com/KnowvationLearnings/Intellexus"
  },
  {
    name:"Sim8085",
    description:"Android app that simulates 8085 micro processor for program executions.",
    img:"/sim8085.webp",
    repository:"https://github.com/KTarun003/Sim8085"
  },
  {
    name:"IntraScOM",
    description:"Web ERP for schools to track the operations and manage the day-to-day operations.",
    img:"/interscom.png",
    repository:"https://github.com/KTarun003/InterScOM"
  },
]

// Search Page
export const SEARCH: Page = {
  TITLE: 'Search',
  DESCRIPTION: 'Search all posts and projects by keyword.',
}

export const EXPERIENCE = [
  {
    company: 'Teckinfo Solutions Pvt Ltd',
    location: 'Gurgaon, HR, IN',
    position: 'Software Developer',
    start: 'Sept 2023',
    link: 'https://www.teckinfo.com/',
    end: 'Current',
    tasks: [
      'Integration IA services with react and tailwind css',
      'Development and build of DB with mongoDB',
    ],
  },
  {
    company: 'Teckinfo Solutions Pvt Ltd',
    location: 'Gurgaon, HR, IN',
    position: 'Associate Software Developer',
    link: 'https://www.teckinfo.com/',
    start: 'Sept 2022',
    end: 'Sept 2023',
    tasks: [
      'Development of the Spot2 platform with the use of React, Redux, and Material UI',
      'Development map with the use of Google Maps API',
      'Development internal platform with the use of React, Redux, and Material UI',
      'Testing and debugging',
    ],
  },
]
