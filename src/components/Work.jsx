import React from "react";
import imgManchi from "../assets/projects/manchi-website.png";
import imgLjConsultancy from "../assets/projects/lj-consultancy-website.png";
import imgChristoLogistics from "../assets/projects/christo-logistics.png";
import imgUrbanTech from "../assets/projects/urban-tech-website.png";
import imgNaeveConstruction from "../assets/projects/naeve-construction.png";
import imgNjabuloDelights from "../assets/projects/njabulo-delights.png";
import imgVpUmeh from "../assets/projects/vp-umeh.png";
import imgHeivenWebsite from "../assets/projects/heiven-website.png";
import imgMineralbridge from "../assets/projects/mineralbridge-site.png";
import imgHeivenMonolith from "../assets/projects/heiven-monolith.png";
import imgYonaYethu from "../assets/projects/yona-yethu.png";
import imgIsonkaWinners from "../assets/projects/isonka-winners.png";
import imgSvl from "../assets/projects/svl-website.png";
import imgLerumo from "../assets/projects/lerumo-website.png";
import imgSnazo from "../assets/projects/snazo-massage.png";

const projects = [
  {
    id: "manchi-website",
    name: "Manchi Innovations",
    demo: "https://manchi-website-beta.vercel.app/",
    code: null,
    image: imgManchi
  },
  {
    id: "lj-consultancy",
    name: "LJ Consultancy",
    demo: "https://lj-consultancy-website.vercel.app/",
    code: "https://github.com/LungisaniMajozi/lj-consultancy-website",
    image: imgLjConsultancy
  },
  {
    id: "christo-logistics",
    name: "Christo Logistics",
    demo: "https://christo-logistics.vercel.app/",
    code: "https://github.com/LungisaniMajozi/christo-logistics",
    image: imgChristoLogistics
  },
  {
    id: "urban-tech",
    name: "Urban Tech",
    demo: "https://urban-tech-website.vercel.app/",
    code: "https://github.com/LungisaniMajozi/urban-tech-website",
    image: imgUrbanTech
  },
  {
    id: "naeve-construction",
    name: "Naeve Construction",
    demo: "https://naeve-construction-company-and-tile.vercel.app/",
    code: "https://github.com/LungisaniMajozi/naeve-construction-company-and-tiles-supplier",
    image: imgNaeveConstruction
  },
  {
    id: "njabulo-delights",
    name: "Njabulo Delights",
    demo: "https://njabulo-delights.vercel.app/",
    code: "https://github.com/LungisaniMajozi/njabulo-delights",
    image: imgNjabuloDelights
  },
  {
    id: "vp-umeh",
    name: "VP Umeh Diamond",
    demo: "https://vp-umeh-diamond-precious-metals.vercel.app/",
    code: "https://github.com/LungisaniMajozi/vp-umeh-diamond-precious-metals",
    image: imgVpUmeh
  },
  {
    id: "heiven-website",
    name: "Heiven Website",
    demo: "https://heiven-website.vercel.app/",
    code: "https://github.com/LungisaniMajozi/heiven-website",
    image: imgHeivenWebsite
  },
  {
    id: "mineralbridge",
    name: "Mineralbridge Site",
    demo: "https://mineralbridge-site-231i.vercel.app/",
    code: "https://github.com/LungisaniMajozi/mineralbridge-site",
    image: imgMineralbridge
  },
  {
    id: "heiven-monolith",
    name: "Heiven Monolith",
    demo: "https://heiven-monolith.vercel.app/",
    code: "https://github.com/LungisaniMajozi/heiven-monolith",
    image: imgHeivenMonolith
  },
  {
    id: "yona-yethu",
    name: "Yona Yethu",
    demo: "https://yona-yethu-website.vercel.app/",
    code: null,
    image: imgYonaYethu
  },
  {
    id: "isonka-winners",
    name: "Isonka Winners",
    demo: "https://isonka-winners.vercel.app/",
    code: "https://github.com/LungisaniMajozi/isonka-winners",
    image: imgIsonkaWinners
  },
  {
    id: "svl-website",
    name: "SVL Website",
    demo: "https://svl-website.vercel.app/",
    code: "https://github.com/LungisaniMajozi/svl-website",
    image: imgSvl
  },
  {
    id: "lerumo",
    name: "Lerumo Website",
    demo: "https://lerumo-website.vercel.app/",
    code: "https://github.com/LungisaniMajozi/lerumo-website",
    image: imgLerumo
  },
  {
    id: "snazo",
    name: "Snazo Massage",
    demo: "https://snazo-massage.vercel.app/",
    code: "https://github.com/LungisaniMajozi/snazo-massage",
    image: imgSnazo
  }
];

const Work = () => {
  return (
    <div
      name="work"
      className="w-full bg-[#0a192f] text-gray-300 py-36 min-h-screen"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-purple-500 text-gray-300">
            Work :
          </p>
          <p className="py-6">Check Out Some Of My Recent Work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((item) => (
            <div
              key={item.id}
              className="shadow-xl bg-[#0f2444] border-2 border-purple-500 shadow-purple-500 group container rounded-md flex flex-col justify-between overflow-hidden mx-auto hover:scale-105 duration-300"
            >
              <div
                className="w-full h-48 bg-gray-900 bg-cover bg-center bg-no-repeat border-b-2 border-purple-900/50"
                style={{ backgroundImage: `url(${item.image})` }}
                title={`${item.name} screenshot`}
              >
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white tracking-wider mb-2 text-center capitalize">
                  {item.name}
                </h3>
                
                <div className="pt-4 mt-auto flex flex-wrap gap-2 justify-center">
                  {item.demo && (
                    <a href={item.demo} target="_blank" rel="noreferrer">
                      <button className="text-center rounded-lg px-4 py-2 bg-white text-gray-700 font-bold hover:bg-purple-500 hover:text-white duration-300">
                        Demo
                      </button>
                    </a>
                  )}
                  {item.code && (
                    <a href={item.code} target="_blank" rel="noreferrer">
                      <button className="text-center rounded-lg px-4 py-2 bg-white text-gray-700 font-bold hover:bg-purple-500 hover:text-white duration-300">
                        Code
                      </button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
