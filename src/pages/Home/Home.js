import React from "react";
import Layout from "../../components/Layout/Layout";
import Intro from "../../components/Sections/Home/Intro";
import Technologies from "../../components/Sections/Home/Technologies";
import JavascriptHighlight from "../../components/Sections/Home/JavascriptHighlight";
import DevStack from "../../components/Sections/Home/DevStack";
import DeveloperInfo from "../../components/Sections/Home/DeveloperInfo";
import AOS from "aos";

AOS.init();

const Home = () => {
  return (
    <Layout>
      <div>
        {/* Intro Section */}
        <Intro />

        {/* Technologies */}
        <Technologies />

        {/* React Highlight Section */}
        <JavascriptHighlight />

        {/* Dev Stack */}
        <DevStack />

        {/* Devloper Info */}
        <DeveloperInfo />
      </div>
    </Layout>
  );
};

export default Home;
