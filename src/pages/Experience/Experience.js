import React from "react";
import Layout from "../../components/Layout/Layout";
import Timeline from "../../components/Sections/Experience/Timeline.js";

const Experience = () => {
  return (
    <Layout>
      <div>
        <div className="text-themeWhite text-center items-center w-full h-screen  bg-themeGrey  ">
          <div className="h-3/4" data-aos="zoom-in-left">
            <lottie-player
              src="https://assets6.lottiefiles.com/packages/lf20_7smeegra.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
          <h1 className="text-8xl md:text-2xl mt-5 " data-aos="zoom-in-right">
            Work History
          </h1>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#2A2A2A"
              fill-opacity="1"
              d="M0,64L48,106.7C96,149,192,235,288,250.7C384,267,480,213,576,160C672,107,768,53,864,69.3C960,85,1056,171,1152,192C1248,213,1344,171,1392,149.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
        </div>

        <div className="my-10 text-themeWhite w-full items-center text-center bg-black p-10">
          <p className="text-5xl md:text-sm" data-aos="zoom-out-down">
            Only Practical Work And Experience Lead The Youth To Maturity...
          </p>
        </div>
        <div className="md:-mt-22" data-aos="fade-up-right">
          <Timeline />
        </div>
      </div>
    </Layout>
  );
};

export default Experience;
