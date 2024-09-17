import {
  FaGithub,
  FaLinkedin,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";

import { RiReactjsLine } from "react-icons/ri";
import { RiJavascriptFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

export const NAVIGATION_LINKS = [
  { label: "Projetos", href: "#projects" },
  { label: "Habilidades", href: "#skills" },
  { label: "Educação", href: "#education" },
  { label: "Contatos", href: "#contact" },
];

export const HERO = {
  name: "FELIPE SANTOS",
  greet: "Olá Pessoal! 👋🏻",
  description:
    "Sou desenvolvedor front-end, especializado em criar interfaces de usuários elegantes e funcionais. Com uma abordagem voltada para a experiência do usuário, transformo conceitos em soluções digitais envolventes e intuitivas, sempre focado na excelência estética e na performance.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Registro de Visitantes",
    description:
      "Aplicação web desenvolvida com React, Node.js e MySQL. O projeto registra a ida do visitante ao local.",
    image: projectImage1,
    githubLink: "https://whimsical-conkies-edfd7f.netlify.app",
  },
  {
    id: 2,
    name: "Carrinho de compras",
    description:
      "Pagina desenvolvida com react. A página mostra um carrinho de compras de uma plataforma de vendas.",
    image: projectImage2,
    githubLink: "https://cart-pagbank.netlify.app",
  },
  {
    id: 3,
    name: "RC Toldos",
    description:
      "Landing Page desenvolvida com HTML, CSS e JavaScript.O projeto visa a captação de clientes por meio dos produtos e contato com a empresa através de suas mídias digitais.",
    image: projectImage3,
    githubLink: "https://siterctoldos.netlify.app",
  },
];

export const SKILLS = [
  {
    icon: <RiJavascriptFill className="text-4xl text-yellow-500 lg:text-5xl" />,
    name: "JavaScript",
    experience: "2+ anos",
  },
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "1+ anos",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "1+ anos",
  },
  {
    icon: <BiLogoPostgresql className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "PostgreSQL",
    experience: "1+anos",
  },
];

export const EXPERIENCES = [

];

export const EDUCATION = [
  {
    degree: "Análise e Desenvolvimento de Sistemas",
    institution: "Universidade Estácio de Sá",
    duration: "Julho 2021 - Setembro 2024",
    description:
      "Analista e desenvolvedor de sistemas",
  },
  {
    degree: "Desenvolvedor FullStack",
    institution: "Digitall College",
    duration: "Agosto 2023 - Agosto 2024",
    description:
      "Curso de Desenvolvimento Web, onde colocamos em prática conceitos e criamos códigos usando HTML, CSS, JavaScript, React, Node.js, MySQL.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/FelipeSantt",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/felipesantt/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
