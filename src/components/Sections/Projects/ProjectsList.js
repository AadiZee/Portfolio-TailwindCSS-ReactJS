import projectData from "./ProjectData";

const ProjectsList = () => {
  return (
    <>
      <div
        className="grid mt-20 md:grid-cols-1 grid-cols-3 items-center justify-center gap-10 mx-20 md:mx-5"
        data-aos="zoom-in"
      >
        {projectData.map((project, index) => {
          return (
            <div>
              <div className=" relative p-20 border-2 border-themeGrey rounded-tr-3xl rounded-bl-3xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52"
                />
                <div className="text-themeWhite absolute inset-0 flex items-center justify-center flex-col opacity-0 bg-themeBlack hover:opacity-90 border-2 border-themeGrey rounded-tr-3xl rounded-bl-3xl">
                  <h1 className="text-4xl font-semibold">{project.title}</h1>
                  <button className="border-4 rounded border-themeGrey py-2 px-5 my-5">
                    <a href={project.link} target="_blank" rel="noreferrer">
                      View Repo
                    </a>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div
        className="grid grid-cols-1 items0-center p-15 my-5 mx-96"
        data-aos="zoom-in-down"
      >
        <li className="list-none text-center mx-3 text-themeWhite bg-themeGrey rounded-lg p-10">
          <a
            href="https://github.com/AadiZee?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            View All
          </a>
        </li>
      </div>
    </>
  );
};

export default ProjectsList;
