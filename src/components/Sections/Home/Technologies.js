import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiNextdotjs,
  SiJavascript,
  SiMaterialui,
  SiTailwindcss,
} from "react-icons/si";
import AOS from "aos";

AOS.init({ duration: 1000 });

const Technologies = () => {
  return (
    <div>
      <h1
        className="text-4xl text-slate-400 font-bold text-center mt-20 my-12"
        data-aos="slide-up"
      >
        Technologies I Mostly Use{" "}
      </h1>

      <div className="grid grid-cols-4 md:grid-cols-1 text-themeWhite">
        <FaReact
          size={180}
          color="#61DBFB"
          className="w-full text-center my-10 animate-pulse"
        />
        <FaHtml5
          size={180}
          color="#e34c26"
          className="w-full text-center my-10 animate-bounce"
        />
        <FaCss3
          size={180}
          color="#264de4"
          className="w-full text-center my-10 animate-pulse"
        />
        <FaNodeJs
          size={180}
          color="#3c873a"
          className="w-full text-center my-10 animate-bounce"
        />
        <FaBootstrap
          size={180}
          color="#563d7c"
          className="w-full text-center my-10 animate-bounce"
        />
        <SiJavascript
          size={180}
          color="#f0db4f"
          className="w-full text-center my-10 animate-pulse"
        />
        <SiExpress
          size={180}
          color="#68a063"
          className="w-full text-center my-10 animate-bounce"
        />
        <SiMongodb
          size={180}
          color="#4DB33D"
          className="w-full text-center my-10 animate-pulse"
        />
        <SiFirebase
          size={180}
          color="#F5820D"
          className="w-full text-center my-10 animate-pulse"
        />
        <SiNextdotjs
          size={180}
          color="#FFFFFF"
          className="w-full text-center my-10 animate-bounce"
        />
        <SiMaterialui
          size={180}
          color="#007FFF"
          className="w-full text-center my-10 animate-pulse"
        />
        <SiTailwindcss
          size={180}
          color="#61DBFB"
          className="w-full text-center my-10 animate-bounce"
        />
      </div>
    </div>
  );
};

export default Technologies;
