import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
const page = () => {
  return (
    <section className="container flex flex-col min-h-[80%] ">
      <div className="mx-auto py-40 ">
        <h1 className="text-xl font-semibold font-serif text-[#6b9080] mb-4">
          Reach out to me here!
        </h1>
        <div className="font-serif">
        <div className="flex items-center gap-2">
        <MdEmail className="text-blue-600" />
          <a
          href="mailto:theintsandikyaw1@gmail.com"
          className="text-blue-500 underline hover:text-blue-700"
        >
          theintsandikyaw1@gmail.com
        </a> 
          <div/>

          
          
        </div>
        <div className="flex items-center gap-2">
        <FaLinkedin className="text-blue-600" />
        <a
          href="https://www.linkedin.com/in/theint-s-kyaw-3999732b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline hover:text-blue-700"
        >
          Theint S Kyaw
        </a>

          <div/>

          
          
        </div>
        <div className="flex items-center gap-2">
        <FaFacebook className="text-blue-600"/>
        <a
          href="https://www.facebook.com/share/1AFeXxQZtb"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline hover:text-blue-700"
        >
          Theint S Kyaw
        </a>

          <div/>

          
          
        </div>
        <div className="flex items-center gap-2">
        <FaPhone className="text-blue-600"/>
        <a
          href="tel:+959794070456"
          className="text-blue-500  hover:text-blue-700"
        >
          09794070456
        </a>


          <div/>

          
          
        </div>
        </div>
      </div>
    </section>
  );
};

export default page;
