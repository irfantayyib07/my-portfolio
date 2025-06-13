"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
 const { ref } = useSectionInView("About");

 return (
  <motion.section
   ref={ref}
   className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
   initial={{ opacity: 0, y: 100 }}
   animate={{ opacity: 1, y: 0 }}
   transition={{ delay: 0.175 }}
   id="about"
  >
   <SectionHeading>About me</SectionHeading>
   {/* <p className="mb-3">
    After graduating with a degree in{" "}
    <span className="font-medium">Computer Science</span>, I decided to pursue my
    passion for programming. I enrolled in a coding bootcamp and learned{" "}
    <span className="font-medium">full-stack web development</span>.{" "}
    <span className="italic">My favorite part of programming</span> is the
    problem-solving aspect. I <span className="underline">love</span> the
    feeling of finally figuring out a solution to a problem. My core stack
    is{" "}
    <span className="font-medium">
     React, Next.js, Node.js, and MongoDB
    </span>
    . I am also familiar with TypeScript and Redux Toolkit. I am always looking forward to
    learning new technologies. I am currently looking for a{" "}
    <span className="font-medium">full-time position</span> as a frontend
    engineer.
   </p> */}
   <p className="mb-3">
    I pursue my passion for programming as a <span className="font-medium">full-stack web developer</span>. My
    favorite part of programming is the <span className="italic">problem-solving</span> aspect. I love the
    feeling of finally figuring out a solution to a problem. My core stack is{" "}
    <span className="font-medium">MERN and Next.js</span>. I am also familiar with{" "}
    <span className="font-medium">TypeScript</span>. I am always looking forward to learning new technologies.
   </p>

   <p>
    <span className="italic">When I&apos;m not coding</span>, I enjoy playing video games, watching movies,
    and playing with cats 🐱. I enjoy <span className="font-medium">learning new things</span>. I am currently
    into <span className="font-medium">writing and public speaking</span>.
   </p>
  </motion.section>
 );
}
