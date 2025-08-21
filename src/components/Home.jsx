import React from "react";
import Majozi from "../assets/Majozi.png";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div name="home" className=" w-full h-screen bg-[#0a192f]">
      {/*container*/}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-purple-600 font-bold">Hi, my name is :</p>
        <div className="flex flex-row">
          <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
            Lungisani Anton Majozi
          </h1>
          <img
            src={Majozi}
            alt="majozi"
            style={{ width: "100px", height: "100px", borderRadius: "50%" }}
            className="shadow-lg shadow-purple-600 hover:scale-y-150 hover:-scale-x-150 duration-700"
          />
        </div>

        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>

        <button className="text-white justify-center group border-2 px-6 py-3 my-2 flex items-center hover:bg-purple-600 hover:border-blue-600 ">
          <Link to="work" smooth={true} duration={500}>
            View Work
          </Link>
          <span className="group-hover:rotate-90 duration-300">
            <HiArrowRight className="ml-3 " />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Home;
