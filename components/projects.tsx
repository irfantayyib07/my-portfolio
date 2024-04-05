"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { PROJECTS_DATA } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
 const { ref } = useSectionInView("Projects");

 return (
  <section
   ref={ref}
   id="projects" className="scroll-mt-28 mb-28">
   <SectionHeading>My projects</SectionHeading>
   <div className="grid grid-rows-3">
    {PROJECTS_DATA.map((project, index) => (
     <React.Fragment key={index}>
      <Project {...project} />
     </React.Fragment>
    ))}
   </div>
  </section>
 );
}