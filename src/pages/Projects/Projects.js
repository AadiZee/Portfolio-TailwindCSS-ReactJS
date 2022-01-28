import React from "react";
import Layout from "../../components/Layout/Layout";
import Intro from "../../components/Sections/Projects/Intro";
import ProjectsList from "../../components/Sections/Projects/ProjectsList";

const Projects = () => {
  return (
    <Layout>
      <Intro />
      <ProjectsList />
    </Layout>
  );
};

export default Projects;
