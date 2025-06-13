import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import portfolioimg from "@/public/Portfolio.png";
// import henrysrepairsimg from "@/public/Henry S Repairs.png";
import newsoftheworldimg from "@/public/News of the World.png";
import responsivewebpages from "@/public/Responsive Webpages.png";
import tailwindfilterformimg from "@/public/Tailwind Filter Form.png";

export const LINKS = [
 {
  name: "Home",
  hash: "#home",
 },
 {
  name: "About",
  hash: "#about",
 },
 {
  name: "Projects",
  hash: "#projects",
 },
 {
  name: "Skills",
  hash: "#skills",
 },
 {
  name: "Experience",
  hash: "#experience",
 },
 {
  name: "Contact",
  hash: "#contact",
 },
] as const;

export const PROJECTS_DATA = [
 {
  title: "Irfan Tayyab - Portfolio",
  description: "The project is the portfolio you are currently visiting.",
  tags: ["React", "Next.js", "Tailwind", "TypeScript", "Framer Motion", "Intersection Observer"],
  imageUrl: portfolioimg,
  liveUrl: undefined,
 },
 {
  title: "Tailwind Filter Form",
  description:
   "This is a filter form made in Vanilla JS. The features include range selection, custom radio-buttons, custom select component, and custom checkboxes and more.",
  tags: ["HTML", "JavaScript", "TailwindCSS", "DOM Manipulation", "UI Development"],
  imageUrl: tailwindfilterformimg,
  liveUrl: "https://tailwind-filter-form.vercel.app",
 },
 // {
 //  title: "Henry S. Repairs",
 //  description:
 //   "This application lets the admin manage their employees. Employees can keep track of their daily tasks, which can be supervised by the admin.",
 //  tags: ["React", "Redux Toolkit", "TypeScript", "SCSS", "Node.js", "MongoDB", "JWT"],
 //  imageUrl: henrysrepairsimg,
 //  liveUrl: "https://henrysrepairs.vercel.app"
 // },
 {
  title: "News of the World",
  description:
   "This application converges news from all over the world to a single place. You can filter the news by country and category.",
  tags: ["React", "Bootstrap", "Node.js", "MongoDB"],
  imageUrl: newsoftheworldimg,
  liveUrl: "https://news-of-the-world-fe.vercel.app",
 },
 {
  title: "Responsive Webpages",
  description: "HTML and CSS only, responsive, cross-browser compatible web pages.",
  tags: ["HTML", "CSS", "PSD to HTML", "Cross-browser Compatibility"],
  imageUrl: responsivewebpages,
  liveUrl: "https://responsive-webpages-it.firebaseapp.com",
 },
] as const;

export const SKILLS_DATA = [
 "HTML",
 "CSS",
 "Tailwind",
 "JavaScript",
 "TypeScript",
 "React",
 "Next.js",
 "Redux Toolkit",
 "Node.js",
 "Express",
 "MongoDB",
 "Redis",
 "SQL",
 "Firebase",
 "Supabase",
 "Prisma",
 "Framer Motion",
 "Socket.io",
 "GraphQL/Apollo",
 "Git",
 "API Integration",
 "AI Integration",
] as const;

export const EXPERIENCE_DATA = [
 {
  title: "Bachelor's in Computer Science",
  location: "@ Virtual University of Pakistan",
  description:
   "My university gave me a strong foundation in web development and taught me how to think like a programmer.",
  icon: React.createElement(LuGraduationCap),
  date: undefined,
 },
 {
  title: "MERN Stack Developer",
  location: "@ CodeFlamme Pvt Ltd.",
  description:
   "At the company, I had the responsibility of developing and maintaining full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). I built responsive user interfaces, designed RESTful APIs, and handled backend logic and database integration. I collaborated closely with UI/UX designers and other developers to deliver scalable, secure, and high-performing solutions, ensuring smooth data flow between the frontend and backend.",
  icon: React.createElement(CgWorkAlt),
  date: undefined,
 },
 {
  title: "Lead Full-Stack Developer (MERN)",
  location: "@ Sprouto Group",
  description:
   "At the company, I had the responsibility of leading the development of full-stack applications using the MERN stack. I guided a team of developers, reviewed code for quality and consistency, and oversaw project architecture and deployment. Alongside hands-on coding, I coordinated cross-functional efforts, ensured timely delivery of features, and made key technical decisions to maintain performance, scalability, and security across the stack.",
  icon: React.createElement(FaReact),
  date: undefined,
 },
] as const;
