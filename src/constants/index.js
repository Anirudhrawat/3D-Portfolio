import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "Mobile App Developer",
      icon: mobile,
    },
    {
      title: "Machine Learning",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "IT Student Assistant Dean’s Office",
      company_name: "California State University, Dominguez Hills",
      icon: starbucks,
      iconBg: "#FFFFFF",
      date: "September 2023 - Present",
      work: [
        "Managed and updated websites for 10 distinct departments, resulting in a 20% increase in user engagement across all sites.",
        "Experienced in greeting and assisting a diverse range of visitors at the dean's office, ensuring needs were met with a high level of customer service.",
        {
          point: "Developed an automated tool to improve work status visibility, leading to a 40% reduction in manual updates and a 60% faster ticket response through integrated email notifications. ",
          tags : [
            {
            name: "angular",
            color: "blue-text-gradient",
            },
            {
              name: "firebase",
              color: "pink-text-gradient",
            }
          ]
        }
      ]
    },
    {
      title: "Student Assistant PHP Web Developer",
      company_name: "California State University, Dominguez Hills",
      icon: starbucks,
      iconBg: "#FFFFFF",
      date: "February 2023 - September 2024",
      work: [
        {
          point: "Developed and enhanced 5+ websites and managed databases, optimizing data storage and retrieval. ",
          tags : [
            {
            name: "php",
            color: "green-text-gradient",
            },
            {
              name: "mysql",
              color: "pink-text-gradient",
            }
          ]
        },
        {
          point: "Deployed and maintained 3 web servers using cPanel and Plesk, ensuring uninterrupted website availability. ",
          tags : [
            {
            name: "cPanel",
            color: "green-text-gradient",
            },
            {
              name: "plesk",
              color: "blue-text-gradient",
            }
          ]
        },
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "Software Developer",
      company_name: "Mindfire Solutions",
      icon: shopify,
      iconBg: "#F0EEEE",
      date: "February 2021 - Jan 2023",
      work: [
        {
          point: "Website development including front-end and backend along with added 3D gaming features, deployed using Azure App Service. ",
          tags : [
            {
            name: ".net framework",
            color: "green-text-gradient",
            },
            {
              name: "aframe",
              color: "pink-text-gradient",
            },
            {
              name: "three.js",
              color: "blue-text-gradient",
            },
            {
              name: "azure app service",
              color: "blue-text-gradient",
            },
            {
              name: "azure ci/cd",
              color: "green-text-gradient",
            },
          ]
        },
        {
          point: "Led a 10-person global team, optimizing infrastructure design architecture and data structures, resulting in a 50% reduction in healthcare point-of-sale processing time. ",
          tags : [
            {
            name: "asp.net",
            color: "pink-text-gradient",
            },
            {
              name: "windows service",
              color: "green-text-gradient",
            },
            {
              name: "microsoft mysql server",
              color: "blue-text-gradient",
            },
          ]
        },
        {
          point: "Automated daily processes, cut client server costs by 30%, and tracked progress using Azure-based solutions. ",
          tags : [
            {
            name: "azure",
            color: "pink-text-gradient",
            },
          ]
        },
        "Conducted code reviews for team members and troubleshooting to ensure code quality and consistency.",
        {
          point: "Collaborated in a fast-paced Agile environment and participated in daily scrum meetings and tracked project progress using Microsoft Azure DevOps and Jira. ",
          tags : [
            {
            name: "microsoft azure devops",
            color: "pink-text-gradient",
            },
            {
              name: "jira",
              color: "green-text-gradient",
            },
            {
              name: "agile development",
              color: "blue-text-gradient",
            },
          ]
        }
      ]
    },
    {
      title: "Software Inern",
      company_name: "AWC Solutions",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "June 2018 - August 2018",
      work: [
        {
          point: "Designed back-end web processing for a project focused on the delivery and maintenance of electrical equipment. ",
          tags : [
            {
            name: "node.js",
            color: "pink-text-gradient",
            }
          ]
        },
        {
          point: "Optimized performance and scalability of the web application to accommodate increasing user demand and data growth. ",
          tags : [
            {
            name: "react",
            color: "green-text-gradient",
            }
          ]
        }
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };