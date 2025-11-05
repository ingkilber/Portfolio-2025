import {
  hotel,
  portfolio,
  mujerApp,
  udemy,
  univ,
  ethglobal,
  uptcms,
  iuta,
  banksa,
  tilda,
  cainicomput,
  mediaOrange
} from "../assets";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineTwitter,
  AiFillHtml5,
  AiOutlineGitlab,
} from "react-icons/ai";

import {
  SiDjango,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiJquery,
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiMysql,
  SiSolidity,
  SiChartdotjs,
  SiWeb3Dotjs,
  SiFigma,
  SiGooglemaps,
  SiOpenai,
  SiGooglecloud,
  SiNextdotjs,
  SiPhp,
  SiNodedotjs,
  SiTypescript,
  SiRedux,
  SiExpo,
  SiVuedotjs,
  SiMaterialdesign,
  SiStrapi,
  SiSupabase,
  SiDocker,
  SiTrello,
  SiBitbucket,
  SiClickup,
  SiLaravel,
  SiPrisma,
  SiThreedotjs
} from "react-icons/si";

import { DiCss3, DiJava, DiMsqlServer, DiRuby } from "react-icons/di";

export const resumeLink = "https://drive.google.com/file/d/1oYoejYskEnmUR-dxYsNEoA2IetcUv09v/view?usp=sharing";
export const repoLink = "https://github.com/ingkilber";

export const callToAction = "https://www.linkedin.com/in/kilber-marcano-99aa86199/";

export const navLinks = [
  {
    id: "skills",
    title: "Habilidades y Experiencia",
  },
  {
    id: "education",
    title: "Educación",
  },
  {
    id: "achievements",
    title: "Logros",
  },
  {
    id: "projects",
    title: "Proyectos",
  },
  // {
  //   id: "openSource",
  //   title: "Código Abierto",
  // },
  {
    id: "extraCurricular",
    title: "Certificaciones",
  },
  {
    id: "contactMe",
    title: "Contáctame",
  },
];

// Añade aquí tus experiencias académicas anteriores
export const educationList = [
  {
    id: "education-1",
    icon: uptcms,
    title: "Universidad Politécnica Territorial de Caracas Mariscal Sucre (UPTCM)",
    degree: "Ing. en Informática",
    duration: "Noviembre 2017",
    content1: "Especialidad: Ingeniería de informática y sistemas.",
    content2: "Certificados: ReactJS y Spring Boot - Full Stack, JavaScript Con NodeJS, Auditorias de Sistemas - Desde la Ciberseguridad.",
  },
  {
    id: "education-2",
    icon: iuta,
    title: "Instituto Universitario de Tecnología de Administración Industrial (IUTA)",
    degree: "Tecnicatura Universitaria en Informática",
    duration: "Agosto 2013",
    content1: "Certificados extras: Administración de Base de Datos, Administración de Redes y Seguridad Informática.",
  },
];

// Add your past achievments here for example - rankings in hackathons/events
export const achievements = [
  {
    id: "a-1",
    icon: ethglobal,
    event: "Virtuality Expo - Enter the Metaverse",
    position: "Expo Innovación & NFTs ",
    content1: "Participación en evento de nuevas tecnologías y activos digitales.",
    content2: "Colaboración en la promoción del primer auto comprado por Diego Maradona, como ejemplo de aplicación real de NFTs.",
    content3: "Presentación de proyectos de innovación y adopción tecnológica en el ecosistema local.",
    article: "https://example.com/expo-innovacion-nft-maradona",
    youtube: "https://youtu.be/exampleExpoRuralNFT",
  },
  {
    id: "a-2",
    icon: ethglobal,
    event: "Hackathon de Nuevas Tecnologías - Sociedad Rural Argentina",
    position: "Proyecto Innovador",
    content1: "Participación en hackathon enfocado en soluciones con blockchain y NFTs aplicadas al comercio digital.",
    content2: "Desarrollo de propuesta de plataforma de compras basada en contratos inteligentes para trazabilidad y autenticidad.",
    content3: "Evento con participación de startups y referentes tecnológicos del ecosistema Web3 argentino.",
    article: "https://example.com/hackathon-rural-blockchain",
    project: "https://example.com/blockchain-nft-project",
  },
  {
    id: "a-3",
    icon: univ,
    event: "Competencia Interuniversitaria de Proyectos Tecnológicos",
    position: "3er Lugar Nacional",
    content1: "Presentación de proyecto innovador en competencia interuniversitaria de desarrollo y tecnología.",
    content2: "Reconocimiento entre los tres mejores proyectos por originalidad, impacto y viabilidad técnica.",
    content3: "Participación junto a universidades de todo el país en un entorno de innovación y emprendimiento.",
    article: "https://example.com/competencia-universitaria-3er-lugar",
    project: "https://example.com/proyecto-universitario",
  },
];


// Add your software developments skills here for example - programming languages, frameworks etc.
export const skills = [
  {
    title: "Front-end",
    items: [
      {
        id: "f-1",
        icon: SiTypescript,
        name: "TypeScript",
      },
      {
        id: "f-2",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "f-3",
        icon: SiReact,
        name: "ReactJS",
      },
      {
        id: "f-4",
        icon: SiReact,
        name: "React Native",
      },
      {
        id: "f-5",
        icon: SiExpo,
        name: "Expo",
      },
      {
        id: "f-6",
        icon: SiVuedotjs,
        name: "Vue.js",
      },
      {
        id: "f-7",
        icon: SiRedux,
        name: "Redux Toolkit",
      },
      {
        id: "f-8",
        icon: SiMaterialdesign,
        name: "Material UI",
      },
      {
        id: "f-9",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "f-10",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "f-11",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
      {
        id: "f-12",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        id: "f-13",
        icon: SiFigma,
        name: "Figma",
      },
    ],
  },
  {
    title: "Back-end",
    items: [
      {
        id: "b-1",
        icon: SiPhp,
        name: "PHP (Laravel, y CodeIgniter)",
      },
      {
        id: "b-2",
        icon: SiDjango,
        name: "Python (Django)",
      },
      {
        id: "b-3",
        icon: SiMysql,
        name: "MySQL",
      },
      {
        id: "b-4",
        icon: SiNodedotjs,
        name: "Node.js (Express.js)",
      },
      {
        id: "b-5",
        icon: DiJava,
        name: "Java (Spring Boot)",
      },
      {
        id: "b-6",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
      {
        id: "b-7",
        icon: SiStrapi,
        name: "APIs RESTful",
      },
      {
        id: "b-8",
        icon: SiSupabase,
        name: "Super Base",
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        id: "t-5",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-6",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-7",
        icon: AiOutlineGitlab,
        name: "Gitlab",
      },
      {
        id: "t-2",
        icon: SiDocker,
        name: "Docker",
      },
      {
        id: "t-3",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "t-4",
        icon: SiVisualstudiocode,
        name: "VS Code",
      },
      
      {
        id: "t-6",
        icon: SiTrello,
        name: "Trello",
      },
      
      {
        id: "t-8",
        icon: SiBitbucket,
        name: "Bitbucket",
      },
      {
        id: "t-9",
        icon: SiClickup,
        name: "ClickUp",
      },
    ],
  },
];

// Añade aquí tu experiencia laboral actual o pasada
export const experiences = [
  {
    organisation: "Bank S.A – Guarda de archivos & tecnología",
    logo: banksa,
    link: "https://www.banksa.com.ar/",
    positions: [
      {
        title: "Developer",
        duration: "Agosto 2022 – Actual",
        content: [
          {
            text: "Desarrollo de funcionalidades avanzadas para la firma digital y electrónica de documentos de forma segura y eficiente.",
            link: "",
          },
          {
            text: "Implementación de soluciones innovadoras para mejorar la experiencia digital de los usuarios.",
            link: ""
          },
          {
            text: "Integración de tecnologías de vanguardia, como inteligencia artificial, para optimizar la experiencia del usuario y la automatización de procesos.",
            link: ""
          }
        ],
      },
    ],
  },
  {
    organisation: "Tilda Exchange - TrickNFTs",
    logo: tilda,
    link: "",
    positions: [
      {
        title: "Developer Full Stack",
        duration: "Junio 2021 – Sep. 2022 / Freelance hasta 2024",
        content: [
          {
            text: "Participación en el diseño y desarrollo del proyecto de mercado digital de Argentina para NFTs.",
            link: ""
          },
          {
            text: "Creación de plataformas de e-commerce a medida para productos tecnológicos.",
            link: ""
          },
          {
            text: "Gestione los dominios, hosting y correos corporativos de los proyectos internos y externos.",
            link: ""
          }
        ],
      },
    ],
  },
  {
    organisation: "CAINICOMPUT – Centro Americano Integral de Idioma y Computación (ECUADOR)",
    logo: cainicomput,
    link: "https://www.aiyellow.com/canicomput/",
    positions: [
      {
        title: "Desarrollador Web, Marketing y Diseño",
        duration: "Mayo 2018 – Nov. 2020",
        content: [
          {
            text: "Desarrollo de sistemas web a medida utilizando PHP y frameworks como CodeIgniter y Laravel.",
            link: "",
          },
          {
            text: "Implementación de estrategias de marketing educativo para estudiantes, promoviendo su integración y adaptación al entorno digital y tecnológico.",
            link: "",
          },
        ],
      },
      {
        title: "Web Lead",
        duration: "",
        content: [
          {
            text: "Gestioné un equipo de 3 estudiantes desarrolladores al tiempo que supervisaba varios módulos.",
            link: "",
          },
        ],
      },
      {
        title: "Web Developer",
        duration: "",
        content: [
          {
            text: "Se añadió un nuevo módulo de aprendizaje de lógica de programación a la plataforma.",
            link: "",
          },
        ],
      },
      {
        title: "Web Developer Intern",
        duration: "",
        content: [
          {
            text: "Desarrollé un sistema de flujo de aprobación multirol para facilitar la recopilación y visualización de datos en los sitios web de los departamentos del Instituto",
            link: "",
          },
        ],
      },
    ],
  }
];

// Agrega información sobre todos los proyectos que se incluirán en tu portafolio.
export const projects = [
  {
    id: "project-1",
    title: "EVENT TEN WEB/APP - Media Orange (Chile)",
    github: "",
    link: "https://app.eventten.com/Login",
    image: mediaOrange,
    content:
      "La plataforma de Media Orange, sencilla de configurar y fácil de usar, le permite gestionar todos sus eventos en un mismo lugar.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React Native"
      },
      {
        id: "icon-2",
        icon: SiExpo,
        name: "Expo CLI"
      },
      {
        id: "icon-3",
        icon: SiOpenai,
        name: "OpenAI"
      },
      {
        id: "icon-4",
        icon: SiGooglecloud,
        name: "Google Cloud Platform"
      },
      {
        id: "icon-5",
        icon: SiRedux,
        name: "Redux Toolkit"
      },
      {
        id: "icon-6",
        icon: SiGooglemaps,
        name: "Google Maps API"
      },
    ],
  },
  {
    id: "project-2",
    title: "Mujer x Mujer - Mujer app (Mexico)",
    github: "",
    link: "https://www.mujer.app/landing.html",
    image: mujerApp,
    content:
      "Mujer x Mujer es una plataforma creada exclusivamente para mujeres, donde puedes descubrir y ofrecer servicios, conectar con emprendedoras, y fortalecer tu crecimiento personal y espiritual. Disponible en Play Store y App Store.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React Native"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS"
      },
      {
        id: "icon-3",
        icon: SiNextdotjs,
        name: "Next.js"
      },
      {
        id: "icon-4",
        icon: SiSupabase,
        name: "Supa Base"
      },
      {
        id: "icon-5",
        icon: SiPrisma,
        name: "Prisma"
      },
      {
        id: "icon-6",
        icon: SiExpo,
        name: "Expo CLI"
      },
      {
        id: "icon-7",
        icon: SiRedux,
        name: "Redux Toolkit"
      },
    ],
  },
  {
    id: "project-3",
    title: "Bank S.A – Guarda de archivos & tecnología",
    github: "",
    link: "https://www.banksa.com.ar/",
    image: banksa,
    content:
      "El People toolkit de Bank es una plataforma que te brinda todas las herramientas para facilitar las tareas claves en la gestión de Recursos humanos de la empresa de manera 100% digital.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-3",
        icon: SiWeb3Dotjs,
        name: "Web3.js"
      },
      {
        id: "icon-4",
        icon: SiMaterialdesign,
        name: "Material UI"
      },
      {
        id: "icon-5",
        icon: SiLaravel,
        name: "Laravel"
      },
      {
        id: "icon-6",
        icon: SiNodedotjs,
        name: "Node.js"
      },
      {
        id: "icon-8",
        icon: SiBootstrap,
        name: "Bootstrap"
      },
    ],
  },
  {
    id: "project-4",
    title: "Trick NFTs - ReactJS",
    github: "https://github.com/ingkilber/Front-End-NFTs-ReactJS",
    link: "https://tricknfts.com/",
    image: tilda,
    content:
      "El primer y más grande mercado digital de Argentina para tokens no fungibles (NFT).",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiBootstrap,
        name: "Bootstrap"
      },
      {
        id: "icon-3",
        icon: DiMsqlServer,
        name: "MS Sql Server"
      },
      {
        id: "icon-4",
        icon: SiJquery,
        name: "jQuery"
      },
      {
        id: "icon-5",
        icon: SiSolidity,
        name: "Solidity"
      },
    ],
  },
  {
    id: "project-8",
    title: "Sistema Hotel Con Panel Administrador",
    github: "https://github.com/ingkilber/Sistema-Hotel-Con-Panel-Admin-PHP",
    link: "",
    image: hotel,
    content:
      "Sistema para reserva de hotel desarrollado con PHP y MySQL, totalmente online, este sitio web de sistema de gestión hotelera hará que la gestión de reservas sea mas fácil para tus clientes o visitantes Posee muchas funciones disponibles, como análisis en profundidad, soporte multilingüe, salas y administrador de precios y muchas más.",
    stack: [
      {
        id: "icon-1",
        icon: SiPhp,
        name: "PHP"
      },
      {
        id: "icon-2",
        icon: AiFillHtml5,
        name: "HTML"
      },
      {
        id: "icon-3",
        icon: DiCss3,
        name: "CSS"
      },
      {
        id: "icon-4",
        icon: SiJavascript,
        name: "JavaScript"
      },
      {
        id: "icon-5",
        icon: SiBootstrap,
        name: "Bootstrap"
      },
      {
        id: "icon-6",
        icon: SiChartdotjs,
        name: "Chart.js"
      },
    ],
  },
  {
    id: "project-10",
    title: "Portafolio Thee.js 3D",
    github: "https://github.com/ingkilber/PersonalPageThreeJS",
    link: "https://ingkilber.github.io/PersonalPageThreeJS/",
    image: portfolio,
    content: "Este es mi primer portafolio creado en ThreeJS, basado en talleres y tutoriales, con información sobre mí, mis habilidades y proyectos.",
    stack: [
      {
        id: "icon-1",
        icon: SiThreedotjs,
        name: "Three.js"
      },
      {
        id: "icon-2",
        icon: SiNodedotjs,
        name: "Node.js"
      },
      {
        id: "icon-3",
        icon: AiFillHtml5,
        name: "HTML"
      },
      {
        id: "icon-4",
        icon: DiCss3,
        name: "CSS"
      }
    ],
  },
];

// Add links to blogs here
export const blogPosts = [
  {
    id: "post-1",
    title: "Blog Post 01 - Title",
    link: "#",
    date: new Date().toLocaleDateString(), // Can be edited to any string format
    image: "https://via.placeholder.com/600/92c952",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-2",
    title: "Blog Post 02 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/d32776",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-3",
    title: "Blog Post 03 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/771796",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
];

// Highlight your GitHub stats like - Organisation, Issues Opened, Pull Requests etc.
export const stats = [
  {
    id: "stats-1",
    title: "Organisations",
    value: "2+",
  },
  {
    id: "stats-2",
    title: "Issues Opened",
    value: "6+",
  },
  {
    id: "stats-3",
    title: "Pull Requests",
    value: "6+",
  },
];

// List out the extra curricular activities you have induldged in like - student clubs, joining research groups etc.
export const extraCurricular = [
  {
    id: 1,
    organisation: "Udemy",
    title: "Auditorías de Sistemas. Detecta fallos en la Ciberseguridad",
    duration: "Noviembre 2025",
    content: [
      {
        text: "Curso enfocado en la detección y análisis de vulnerabilidades en sistemas informáticos, aplicando técnicas de auditoría y ciberseguridad para la prevención de ataques.",
        link: "",
      },
      {
        text: "Ver certificado",
        link: "https://www.udemy.com/certificate/UC-0fc14e09-c042-4158-8272-1a78a7722876/",
      },
    ],
    logo: udemy,
  },
  {
    id: 2,
    organisation: "Udemy",
    title: "React y Spring Boot: Crea tu primera App Full Stack",
    duration: "Abril 2024",
    content: [
      {
        text: "Certificación que acredita el desarrollo de una aplicación full stack integrando un frontend en React con un backend en Spring Boot, aplicando prácticas modernas de desarrollo web.",
        link: "",
      },
      {
        text: "Ver certificado",
        link: "https://www.udemy.com/certificate/UC-932305b4-10e6-41e3-b21c-5924755eb80b/",
      },
    ],
    logo: udemy,
  },
  {
    id: 3,
    organisation: "Udemy",
    title: "JavaScript: Desde cero con NodeJS",
    duration: "Julio 2024",
    content: [
      {
        text: "Formación completa en JavaScript y Node.js, desde los fundamentos del lenguaje hasta la creación de aplicaciones del lado del servidor utilizando entornos y módulos de Node.",
        link: "",
      },
      {
        text: "Ver certificado",
        link: "https://www.udemy.com/certificate/UC-fa83fa5f-f09a-4bbe-946d-e3dcfbeeefed/",
      },
    ],
    logo: udemy,
  },
];

// Links to your social media profiles
export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/kilber-marcano-99aa86199/",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://github.com/ingkilber",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:kilbermarcano@gmail.com",
  },
  {
    id: "social-media-4",
    icon: AiOutlineTwitter,
    link: "https://x.com/kilber_g",
  },
  {
    id: "social-media-5",
    icon: AiFillInstagram,
    link: "https://www.instagram.com/kilbermarcano/",
  },
];

// Your professional summary
export const aboutMe = {
    name: "Kilber Marcano",
    githubUsername: 'ingkilber',
    tagLine: "Developer Fullstack | Ciberseguridad | Auditoría | Blockchain",
    intro: "Más de 6 años de experiencia, domino múltiples lenguajes, frameworks y bases de datos, lo que me permite desarrollar proyectos complejos de principio a fin, adaptándome rápidamente a nuevas tecnologías en entornos dinámicos."
}

// The maximum number of PRs to be displayed in the Open Source Contributions section.
export const itemsToFetch = 20;

// Add names of GitHub repos you'd like to display open source contributions from in the 'org/repo' format. 
export const includedRepos = ['publiclab/plots2', 'zulip/zulip', 'paritytech/polkadot-sdk'];