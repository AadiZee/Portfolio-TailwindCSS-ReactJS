import React from "react";
import Layout from "../../components/Layout/Layout";

const NotFound = () => {
  return (
    <Layout>
      <div className="text-themeWhite h-screen w-full text-center items-center mt-20 overflow-hidden">
        <h1 className="text-8xl md:text-3xl">404, Not Found</h1>
        <img
          src="https://media0.giphy.com/media/sU511xfb7ORqw/giphy.gif?cid=790b761177d8beab698eb214d2fb61d9d67522b91c2d60c7&rid=giphy.gif&ct=g"
          class="w-full  h-3/4 items-center"
          alt="Not Found"
        ></img>
      </div>
    </Layout>
  );
};

export default NotFound;
