import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import portfolioimg from "@/public/Portfolio.png";
import henrysrepairsimg from "@/public/Henry S Repairs.png";
import newsoftheworldimg from "@/public/News of the World.png";
import responsivewebpages from "@/public/Responsive Webpages.png";

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

export const EXPERIENCE_DATA = [
 {
  title: "Computer Science",
  location: "@ Virtual University of Pakistan",
  description: "My University has helped me a lot in my field.",
  icon: React.createElement(LuGraduationCap),
  date: undefined,
 },
 {
  title: "Front-End Developer",
  location: "@ Freelance",
  description:
   "I worked as a front-end developer. My specialization is with React, Redux, and Next.js.",
  icon: React.createElement(CgWorkAlt),
  date: undefined,
 },
 {
  title: "Full-Stack Developer",
  location: "@ Freelance",
  description:
   "I'm now a full-stack developer with greater focus on frontend, working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Node and MongoDB. I'm open to full-time job opportunities and freelance projects.",
  icon: React.createElement(FaReact),
  date: undefined,
 },
] as const;

export const PROJECTS_DATA = [
 {
  title: "Irfan Tayyab - Portfolio",
  description:
   "This project is the portfolio you are currently visiting. You can navigate the portfolio.",
  tags: ["React", "Next.js", "Tailwind", "TypeScript", "Framer Motion"],
  imageUrl: portfolioimg,
  liveUrl: undefined,
 },
 {
  title: "Henry S. Repairs",
  description:
   "This application lets the admin manage their employees. Employees can keep track of their daily tasks, which can be supervised by the admin.",
  tags: ["React", "Redux Toolkit", "TypeScript", "SCSS", "Node.js", "MongoDB", "JWT"],
  imageUrl: henrysrepairsimg,
  liveUrl: "https://henrysrepairs.vercel.app"
 },
 {
  title: "News of the World",
  description:
   "This application converges news from all over the world to a single place. You can filter the news by country and category.",
  tags: ["React", "Bootstrap", "Node.js", "MongoDB"],
  imageUrl: newsoftheworldimg,
  liveUrl: "https://newsoftheworld.vercel.app"
 },
 {
  title: "Responsive Webpages",
  description:
   "HTML and CSS only, responsive, cross-browser compatible web pages.",
  tags: ["HTML", "CSS", "PSD to HTML", "Cross-browser Compatibility"],
  imageUrl: responsivewebpages,
  liveUrl: "https://responsive-webpages-it.firebaseapp.com"
 },
] as const;

export const SKILLS_DATA = [
 "HTML",
 "CSS",
 "JavaScript",
 "TypeScript",
 "React",
 "Next.js",
 "Node.js",
 "Git",
 "Tailwind",
 "MongoDB",
 "Redux Toolkit",
 "Express",
 "Framer Motion",
] as const;
