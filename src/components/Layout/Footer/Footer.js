import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      {/* <div className="h-24">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#2A2A2A"
            fill-opacity="1"
            d="M0,256L0,0L288,0L288,128L576,128L576,96L864,96L864,32L1152,32L1152,256L1440,256L1440,320L1152,320L1152,320L864,320L864,320L576,320L576,320L288,320L288,320L0,320L0,320Z"
          ></path>
        </svg>
      </div> */}

      <div className="h-44 md:h-16">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#2A2A2A"
            fill-opacity="1"
            d="M0,192L0,64L240,64L240,96L480,96L480,32L720,32L720,64L960,64L960,160L1200,160L1200,192L1440,192L1440,320L1200,320L1200,320L960,320L960,320L720,320L720,320L480,320L480,320L240,320L240,320L0,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="w-screen bg-themeGrey flex justify-center">
        <div className="md:w-full w-1/2">
          <div className="font-moch p-20 text-center">
            <p className="text-gray-400 pb-5">Get in touch!</p>
            <div className="h-1 border-themeWhite border-dotted border-2"></div>
            <div className="flex text-themeWhite w-full justify-between py-5 md:grid md:grid-cols-2 md:justify-between ">
              <a
                href="https://www.facebook.com/aadizee69"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook size="40" />
              </a>
              <a
                href="https://www.instagram.com/aadizee/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram size="40" />
              </a>
              <a
                href="https://www.linkedin.com/in/aadizee/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin size="40" />
              </a>
              <a
                href="https://github.com/AadiZee"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size="40" />
              </a>
              <a href="mailto: adnanzaib6@gmai.com">
                <AiOutlineMail size="40" />
              </a>
            </div>
            <div className="h-1 border-themeWhite border-dotted border-2"></div>
            <p className="text-gray-400 pb-5 my-2">AadiZee!</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
