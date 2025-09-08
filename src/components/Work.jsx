import React from "react";
import Vid from "../assets/GMG.png";
import MYP from "../assets/WGM.png";
import Myf from "../assets/MYF.png";
const Work = () => {
  return (
    <div
      name="work"
      className="w-full bg-[#0a192f] md:h-screen text-gray-300 pt-36"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-purple-500 text-gray-300">
            Work :
          </p>
          <p className="py-6">Check Out Some Of My Recent Work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/*box1*/}
          <div
            style={{ backgroundImage: `url(${Vid})` }}
            className="shadow-xl border-2 border-purple-500 m-1 shadow-purple-500 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-60 duration-1000">
              <span className="text-2xl font-bold text-white tracking-wider  justify-center text-justify">
                HtML CCS JS Number Game
              </span>
              <div className="pt-8 text-center">
                <a href="https://lungisanimajozi.github.io/number-guessing-game/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>

                <a href="https://github.com/LungisaniMajozi/number-guessing-game.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white  text-gray-700 font-bold text-lg">
                    code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/*box2*/}
          <div
            style={{ backgroundImage: `url(${Myf})` }}
            className="shadow-xl border-2 border-purple-500 m-1 shadow-purple-500 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 duration-1000">
              <span className="text-2xl font-bold text-white tracking-wider  justify-center text-justify">
                My First React App
              </span>
              <div className="pt-8 text-center">
                <a href="https://better-car-deals-xhfy-git-main-lungisanimajozis-projects.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>

                <a href="https://github.com/LungisaniMajozi/better_car_deals.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white  text-gray-700 font-bold text-lg">
                    code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/*box3*/}
          <div
            style={{ backgroundImage: `url(${MYP})` }}
            className="shadow-xl border-2 border-purple-500 m-1 shadow-purple-500 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 duration-1000">
              <span className="text-2xl font-bold text-white tracking-wider  justify-center text-justify">
                HTML Words Game App
              </span>
              <div className="pt-8 text-center">
                <a href="https://worrdgamebymajozi.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>

                <a href="https://github.com/LungisaniMajozi/word-guessing-game.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white  text-gray-700 font-bold text-lg">
                    code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/*end of box3*/}
        </div>
      </div>
    </div>
  );
};

export default Work;
