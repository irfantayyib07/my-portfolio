"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
 const { ref } = useSectionInView("Home");
 const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

 return (
  <section
   ref={ref}
   id="home"
   className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
  >
   <div className="flex items-center justify-center">
    <div className="relative">
     <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
       type: "tween",
       duration: 0.2,
      }}
     >
      <Image
       src="/Irfan_Tayyab.jpg"
       alt="Irfan Tayyab"
       width="192"
       height="192"
       quality="95"
       priority={true}
       className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
      />
     </motion.div>

     <motion.span
      className="absolute bottom-0 right-0 text-4xl select-none"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
       type: "tween",
       stiffness: 125,
       delay: 0.1,
       duration: 0.7,
      }}
     >
      👋
     </motion.span>
    </div>
   </div>

   <motion.h1
    className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] max-w-[60ch]"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
   >
    <span className="font-bold">Hello, I&apos;m Irfan.</span> I&apos;m a proud{" "}
    <span className="font-bold">frontend developer</span> with{" "}
    <span className="font-bold">1 year</span> of experience. I enjoy
    building <span className="italic">sites & apps</span>. I specialise in{" "}
    <span className="underline">React and Next.js</span>.
   </motion.h1>

   <motion.div
    className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-md font-medium"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
     delay: 0.1,
    }}
   >
    <Link
     href="#contact"
     className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:bg-gray-950 transition"
     onClick={(e) => {
      e.preventDefault();
      setActiveSection("Contact");
      setTimeOfLastClick(Date.now());
      document.querySelector("#contact")?.scrollIntoView();
     }}
    >
     Contact me here{" "}
     <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
    </Link>

    <a
     className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none transition cursor-pointer borderBlack dark:bg-white/10"
     href="/Irfan_Tayyab_JS_Dev.pdf"
     download
    >
     Download CV{" "}
     <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
    </a>

    <a
     className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.05] hover:scale-[1.05] active:scale-1.05 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
     href="https://linkedin.com/in/irfan-tayyab-241131300/"
     target="_blank"
    >
     <BsLinkedin />
    </a>

    <a
     className="bg-white p-4 text-gray-700 max-w-12 max-h-12 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.05] hover:scale-[1.05] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
     href="https://github.com/irfantayyib07/"
     target="_blank"
    >
     <FaGithubSquare />
    </a>
   </motion.div>
  </section>
 );
}