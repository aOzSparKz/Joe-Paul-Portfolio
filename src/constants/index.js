import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    meta,
    starbucks,
    tesla,
    shopify,
    jobit,
    jps,
    jpsbot,
    sushiman,
    logo,
 
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
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
    {
      id: "footer",
      title: "LinkedIn",
    },

  ];

  
  const services = [
    {
      title: "PROGRAMMER",
      icon: web,
    },
    {
      title: "SOFTWARE DEVELOPER",
      icon: mobile,
    },
    {
      title: "SYSTEMS ANALYST",
      icon: backend,
    },
    {
      title: "GRAPHIC & WEB DESIGNER",
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
      name: "React JS",
      icon: reactjs,
    },
  
  ];
  
  const experiences = [
   
    
   
    {
      title: "Software Engineering",
      company_name: "Philippine EDS Techno-Service, Inc",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "June 2018 - Present",
      points: [
      
        "Design and Development: Responsibility was to design and develop wiring harness systems for various applications, such as automotive.",
      ],
    },
    {
      title: "Software Developer (Project Base Programmer & IT Services)",
      company_name: "Freelancing",
      icon: logo,
      iconBg: "#383E56",
      date: "June 2019 - Present",
      points: [
      
        "Software Developer: Responsible for designing, developing, and maintaining custom software solutions to support the organization's social welfare programs and initiatives. This includes systems for case management, client tracking, and program evaluation.",
        "Programmer: Involved in project-based programming and IT services, contributing to the development and maintenance of custom software solutions for various initiatives.",
        "Systems Analyst: Collaborated on system analysis tasks, ensuring the efficiency and effectiveness of software solutions implemented within the organization.",
        "Graphic & Web Designer: Played a key role in designing visually appealing and user-friendly interfaces for both graphic and web elements, enhancing the overall user experience.",
      ],
    },
   
    {
      title: "Data Management",
      company_name: "SOLAR SNACK FOODS, INC.",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2012 - Feb 2014",
      points: [
     
       "Product Information Input: Responsibility was to input and maintain accurate product information. This included details such as product names, descriptions, ingredients, nutritional facts, and pricing into databases and inventory management systems.",
      ],
    },
    {
      title: "Computer Database Encoder",
      company_name: "F.F. CRUZ & CO., INC.",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2010 - April 2011",
      points: [
       "Database Maintenance: Responsibility was to maintain electronic databases. This involved entering, updating, and organizing various types of data relevant to the company's operations. You ensured that the databases were accurate and up-to-date.",
      ],
    },

  ];
  
  const projects = [
    {
      name: "JPs QuantumAI",
      description:
        "Discover the efficiency of JPs QuantumAI, an article summarizer designed to simplify your reading. Transform lengthy articles into clear and concise summaries effortlessly with JPs QuantumAI.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Javascript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
         {
          name: "OpenAI",
          color: "green-text-gradient",
        },
      ],
      image: jps,
      source_code_link: "https://jps-quantum-ai.netlify.app/",
    },
    // {
    //   name: "C S W D O - Centralized Management System",
    //   description:
    //     "An application developed to facilitate the registration of child clients into the Violation Registry of Children in Conflict with the Law.",
    //   tags: [
    //     {
    //       name: ".Net",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "Mysql",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: jobit,
    //   source_code_link: "https://github.com/",
    // },
    {
      name: "JPsBot-Assistant",
      description:
        "JPsBot-Assistant, a specialized AI-powered JPsbot, ensures a highly personalized and responsive user experience by employing scalable infrastructure, and performance optimization strategies.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Javascript",
          color: "green-text-gradient",
        },
        {
          name: "render",
          color: "pink-text-gradient",
        },

        {
          name: "OpenAI",
          color: "green-text-gradient",
        },

      ],
      image: jpsbot,
      source_code_link: "https://j-ps-bot-assistant.vercel.app/",
    },

    {
      name: "JPsFoods",
      description:
        "JPsFoods is a meticulously designed, pure HTML and CSS website featuring sleek animations, lightning-fast reload times, and a user-friendly interface that immerses visitors in a captivating food journey.",
      tags: [
        {
          name: "CSS3",
          color: "blue-text-gradient",
        },
        {
          name: "HTML 5",
          color: "green-text-gradient",
        },

      ],
      image: sushiman,
      source_code_link: "https://jpsfoods.netlify.app/",
    },
  ];

  export { services, technologies, experiences, projects };