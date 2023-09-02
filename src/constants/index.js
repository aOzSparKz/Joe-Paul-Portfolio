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
    //redux,
    //tailwind,
    //nodejs,
    //mongodb,
   // git,
   // figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    //threejs,
 
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
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "React Native",
      icon: mobile,
    },
    {
      title: "Software Developer",
      icon: backend,
    },
    {
      title: "Tiktok Creator",
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
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    // {
    //   name: "Tailwind CSS",
    //   icon: tailwind,
    // },
    // {
    //   name: "Node JS",
    //   icon: nodejs,
    // },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    // {
    //   name: "git",
    //   icon: git,
    // },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Computer Encoder",
      company_name: "F.F. CRUZ & CO., INC.",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2010 - April 2011",
      points: [
       "Database Maintenance: Responsibility was to maintain electronic databases. This involved entering, updating, and organizing various types of data relevant to the company's operations. You ensured that the databases were accurate and up-to-date.",
      //  "Data Handling: Handling data-related tasks was a crucial aspect of your job. You were responsible for sorting and categorizing data, as well as verifying the accuracy of information before it was entered into the database.",
      ],
    },
    {
      title: "Computer Encoder",
      company_name: "SOLAR SNACK FOODS, INC.",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2012 - Feb 2014",
      points: [
     
       "Product Information Input: Responsibility was to input and maintain accurate product information. This included details such as product names, descriptions, ingredients, nutritional facts, and pricing into databases and inventory management systems.",
        // "Inventory Management: I played a crucial role in monitoring and updating inventory levels. This involved recording stock quantities, tracking expiration dates, and ensuring that inventory data was always up-to-date to prevent overstocking or shortages.",
      ],
    },
    {
      title: "Software Developer",
      company_name: "City Social Welfare and Development Office",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2016",
      points: [
      
        "Custom Software Development: Responsibility was to design, develop, and maintain custom software solutions to support the organization's social welfare programs and initiatives. This may include systems for case management, client tracking, and program evaluation.",
        // "Database Management: Responsible for designing and managing databases to store and retrieve critical data related to clients, social services provided, case histories, and program outcomes. Ensuring data security and privacy was paramount.",
      ],
    },
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
      title: "Software Developer (Project Base & IT Services)",
      company_name: "City Social Welfare and Development Office",
      icon: shopify,
      iconBg: "#383E56",
      date: "June 2023- Present",
      points: [
      
        "Custom Software Development: Responsibility was to design, develop, and maintain custom software solutions to support the organization's social welfare programs and initiatives. This may include systems for case management, client tracking, and program evaluation.",
        "Database Management: Responsible for designing and managing databases to store and retrieve critical data related to clients, social services provided, case histories, and program outcomes. Ensuring data security and privacy was paramount.",
      ],
    },



  ];


  
  const projects = [
    {
      name: "Car Renting",
      description:
        "Web-based platform that allows users to search and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
      name: "C S W D O - Centralized Management System",
      description:
        "An application developed to facilitate the registration of child clients into the Violation Registry of Children in Conflict with the Law.",
      tags: [
        {
          name: ".Net",
          color: "blue-text-gradient",
        },
        // {
        //   name: "Javascript",
        //   color: "green-text-gradient",
        // },
        {
          name: "Mysql",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Travel Guide",
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


  
  export { services, technologies, experiences, projects };