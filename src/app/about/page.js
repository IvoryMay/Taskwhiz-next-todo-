import React from "react";

const page = () => {
  return (
    <div className="p-10 font-serif w-[60%] mx-auto">
      <h1 className="text-xl font-bold mb-4 text-[#bc4749]">About Me</h1>
      
        <p className="font-bold text-lg text-[#89b523] mb-2">Hello, I'm Theint Sandi Kyaw, a  junior front-end developer. </p>
        <p className="mb-4 text-[#184c35]">
        I'm dedicated to crafting seamless user experiences and visually appealing
        interfaces.

        <h3>My skills</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
            <li>React.js</li>
            <li>Next.js</li>
          </ul>
          <h3>Other toolkits</h3>
          <ul>
            <li>Tailwind CSS</li>
            <li>Zustand</li>
            <li>SWR</li>
          </ul>
        
      </p>
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
