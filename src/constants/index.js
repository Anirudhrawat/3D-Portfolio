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
    upes,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    sandeep,
    Patrick,
    Chris,
    fingerprint,
    azure,
    graphql
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
      id: "education",
      title: "Education",
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
      date: "February 2021 - January 2023",
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
            name: "azure devops",
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
        "I thought it was impossible to make a website as beautiful as our product, but Anirudh proved me wrong.",
      name: "Sandeep Sharma",
      designation: "CFO",
      company: "AWS Software",
      image: sandeep,
    },
    {
      testimonial:
        "Anirudh was one of the crucial person in our project. He completes all the work before deadline and managed whole team.",
      name: "Patrick Brown",
      designation: "CTO",
      company: "T-Therapeutics",
      image: Patrick,
    },
    {
      testimonial:
        "Anirudh optimized the whole system and saved the overall cost of the project. He has great problem-solving skills",
      name: "Chris Shaw",
      designation: "Manager",
      company: "Colocals",
      image: Chris,
    },
  ];
  
  const projects = [
    {
      name: "Fingerprint-Enhanced Credit Card Payment Interface",
      description:
        "This interface revolutionizes credit card transactions by integrating fingerprint authentication, offering a swift and secure payment process. By employing biometric verification, it significantly reduces transaction time while enhancing the overall security of the payment procedure.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "twilio",
          color: "pink-text-gradient",
        },
      ],
      image: fingerprint,
      source_code_link: "https://github.com/Anirudhrawat/Credit-card",
    },
    {
      name: "Azure Trigger Functions",
      description:
        "This project involves the creation of an HTTP Trigger function within Azure, designed to initiate the execution of a 'Push' action. This action will log events directly to a monitoring interface integrated within the Azure Functions environment of my account, ensuring real-time tracking and enhanced oversight of function performance.",
      tags: [
        {
          name: "C#",
          color: "blue-text-gradient",
        },
        {
          name: "Azure",
          color: "green-text-gradient",
        },
      ],
      image: azure,
      source_code_link: "https://github.com/Anirudhrawat/AzureHttpTriggerFunction",
    },
    {
      name: "CURD operation using GraphQL",
      description:
        "Implementing CRUD operations with GraphQL enables efficient data management through a single API endpoint. This approach simplifies querying, mutation, and subscription processes for creating, reading, updating, and deleting data, providing a more intuitive and streamlined interaction with databases for developers.",
      tags: [
        {
          name: "C#",
          color: "blue-text-gradient",
        },
        {
          name: "HotChocolate",
          color: "green-text-gradient",
        },
        {
          name: "GraphQL",
          color: "pink-text-gradient",
        },
      ],
      image: graphql,
      source_code_link: "https://github.com/Anirudhrawat/GraphQLMutationBasicCRUD",
    },
  ];
  
  const education = [
    {
      title: "Masters Of Computer Science",
      company_name: "California State University, Dominguez Hills",
      icon: starbucks,
      iconBg: "#FFFFFF",
      date: "January 2023 - December 2024",
      work: ["Sofware Engineering, Advance Programming, Design and Analysis of Algorithm, Introduction to Data Science, Big Data Analytics, Human Computer Interaction"]
    },
    {
      title: "Bachelor Of Computer Science",
      company_name: "University of Petroleum and Energy Studies",
      icon: upes,
      iconBg: "#FFFFFF",
      date: "August 2016 - September 2020",
      work:[ "Data Structure, Software Development Lifecycle, Advance Database Systems, Design and Analysis of Algorithm, Advance Programming, Artificial Intelligence"]
    }
    
  ];
  export { services, technologies, experiences, testimonials, projects, education };
