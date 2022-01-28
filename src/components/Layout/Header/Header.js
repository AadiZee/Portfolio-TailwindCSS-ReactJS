import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [showMenu, setShowMenu] = useState("md:hidden");
  const menuItems = [
    { title: "Home", key: "/" },
    { title: "Projects", key: "/projects" },
    { title: "Experience", key: "/experience" },
  ];

  const path = window.location.pathname;

  return (
    <div className="text-themeWhite font-moch fixed top-0 left-0 right-0 z-50">
      <div
        className={`flex bg-themeGrey justify-between items-center p-2 shadow-lg ${
          showMenu === "" && "md:flex-col"
        }`}
      >
        <div className="flex justify-between items-center w-full ">
          <h1 className="text-4xl font-semibold">
            <a href="/">Aadi Zee</a>
          </h1>
          <FaBars
            className="hidden md:flex items-center text-2xl cursor-pointer"
            onClick={() => {
              if (showMenu === "md:hidden") {
                setShowMenu("");
              } else {
                setShowMenu("md:hidden");
              }
            }}
          />
        </div>

        <div className="flex md:hidden ">
          {menuItems.map((item, index) => {
            return (
              <li
                className={`list-none mx-3 p-2 ${
                  item.key === path && "bg-themeWhite text-themeBlack "
                }`}
                key={index}
              >
                <Link to={item.key}>{item.title}</Link>
              </li>
            );
          })}
        </div>

        <div
          className={`md:flex items-start w-full md:flex-col ${showMenu} lg:hidden xl:hidden 2xl:hidden`}
        >
          {menuItems.map((item, index) => {
            return (
              <li
                className={`list-none my-2  ${
                  item.key === path && "bg-themeWhite text-themeBlack px-5"
                }`}
                key={index}
              >
                <Link to={item.key}>{item.title}</Link>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
