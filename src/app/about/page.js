import React from "react";
import { GiCheckMark } from "react-icons/gi";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3 } from "react-icons/fa6";
import { FaJsSquare } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";
const page = () => {

  const mySkills = [
    { skill: "HTML", level: "Advanced", icon: <FaHtml5 /> },
    { skill: "CSS", level: "Intermediate", icon: <FaCss3 /> },
    { skill: "JS", level: "Intermediate", icon: <FaJsSquare /> },
    { skill: "React.js", level: "Intermediate", icon: <RiReactjsLine /> },
    { skill: "Next.js", level: "Intermediate",icon: <SiNextdotjs /> },
  ];

  const toolKits = [
    { tool: "Tailwind CSS", description: "A utility-first CSS framework for fast, custom designs." },
    { tool: "Zustand", description: "A lightweight and scalable state management library for React." },
    { tool: "SWR", description: "A React hook library for remote data fetching with caching." },
  ];
  
  return (
    <div className="p-10 font-serif w-[75%] mx-auto">
      <h1 className="text-xl font-bold mb-4 text-[#bc4749]">About Me</h1>
      
        <p className="font-bold text-lg text-[#89b523] mb-2">Hello, I'm Theint Sandi Kyaw, a  junior front-end developer. </p>
        <p className=" text-[#184c35]">I created this app to learn and practice my skills.</p>
        <p className="mb-4 text-[#184c35]">
        I'm dedicated to crafting seamless user experiences and visually appealing
        interfaces.</p>

        <div className="mb-4">
        <h3 className="mb-2 font-semibold text-[#6c584c]">My skills</h3>
             
              <div className=" pl-3">
            {mySkills.map((el, index) => (
              <div key={index} className="grid grid-cols-2">
                 <div className="flex gap-2">
                  <div className="text-blue-400"> {el.icon} </div>
                  <div className="text-[#184c35]">{el.skill}</div>
                  </div> 
                 <div className="text-amber-700">{el.level}</div> 
                 </div>
            ))}
            </div>
          </div>
        
          <div className="mb-4">
          <h3  className="mb-2 font-semibold text-[#6c584c]">Other tool kits</h3>
          <ul className="pl-3 ">
            {toolKits.map((el, index) => (
              <li key={index} className="text-[#03045e]">
                {el.tool}
              </li>
            ))}
          </ul>
          </div>
        
      
      <p className=" text-[#184c35]">
        I thrive on learning and growing as a developer, and I am eager to join
        a collaborative development team where I can expand my skills,
        contribute to meaningful projects, and tackle exciting challenges.
        Whether it's solving complex problems, optimizing performance, or
        designing responsive layouts, I'm always ready to roll up my sleeves and
        make an impact. Let’s create something amazing together!
      </p>
    </div>
  );
};

export default page;
