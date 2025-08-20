import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import GitHub from "../assets/github1.png";
import Tailwind from "../assets/tailwind.png";
import Postgres from "../assets/Postgres.png";
const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] pt-3">
      {/* container*/}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full  text-gray-300 py-1 px-1">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-purple-600 ">
            Experience..[skills]
          </p>
          <p className="py-4 font-normal">
            These are the technologies I've worked with:
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 text-center py-8 ">
          <div className="shadow-lg shadow-purple-400 hover:scale-125 duration-500">
            <img
              className="w-28 mx-auto pt-[10px]"
              src={HTML}
              alt="html icon"
            />
            <p className="my-4">HTML</p>
          </div>

          <div className="shadow-lg shadow-purple-400 hover:scale-125 duration-500">
            <img className="w-28 mx-auto pt-[10px]" src={CSS} alt="html icon" />
            <p className="my-4">CSS</p>
          </div>

          <div className="shadow-lg shadow-purple-400 hover:scale-125 duration-500">
            <img
              className="w-28 mx-auto pt-[10px]"
              src={JavaScript}
              alt="html icon"
            />
            <p className="my-4">JavaScript</p>
          </div>

          <div className="shadow-lg shadow-purple-400 hover:scale-125 duration-500">
            <img
              className="w-28 mx-auto pt-[10px]"
              src={Node}
              alt="html icon"
            />
            <p className="my-4">Node js</p>
          </div>

          <div className="shadow-lg shadow-purple-400 hover:scale-125 duration-500">
            <img
              className="w-28 mx-auto pt-[10px]"
              src={ReactImg}
              alt="html icon"
            />
            <p className="my-4">React</p>
          </div>

          <div className="shadow-lg shadow-purple-400 hover:scale-125 duration-500">
            <img
              className="w-28 mx-auto pt-[10px]"
              src={GitHub}
              alt="html icon"
            />
            <p className="my-4">GitHub</p>
          </div>

          <div className="shadow-lg shadow-purple-400 hover:scale-125 duration-500">
            <img
              className="w-28 mx-auto pt-[10px]"
              src={Tailwind}
              alt="html icon"
            />
            <p className="my-4">Tailwind</p>
          </div>

          <div className="shadow-lg shadow-purple-400 hover:scale-125 duration-500">
            <img
              className="w-28 mx-auto pt-[10px]"
              src={Postgres}
              alt="html icon"
            />
            <p className="my-4">Postgres</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
