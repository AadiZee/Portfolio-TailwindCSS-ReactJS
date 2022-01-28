const DevStack = () => {
  return (
    <div className="my-20">
      <div className=" text-center h-52 bg-red-800" data-aos="flip-up">
        <h1 className="text-themeWhite font-bold text-4xl py-10 md:py-0">
          My DEV STACK
        </h1>
      </div>

      <div className="bg-themeBlack md:mx-4 md:-mt-10 md:hover:bg-orange-800 mx-32 shadow-gray-600 shadow-lg -mt-20 rounded-lg hover:bg-orange-800">
        <div className="h-96">
          <lottie-player
            src="https://assets7.lottiefiles.com/packages/lf20_hrkmmhjf.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>

        <div className="grid md:grid-cols-1 grid-cols-3 text-themeWhite p-5">
          <div className="text-left">
            <h1 className="text-xl font-bold">Front End</h1>
            <hr />
            <p className="font-semibold mt-3">HTML/CSS</p>
            <p className="font-semibold mt-3">React</p>
            <p className="font-semibold mt-3">JavaScript</p>
            <p className="font-semibold mt-3">Redux</p>
            <p className="font-semibold mt-3">Next Js</p>
          </div>

          <div className="text-center">
            <h1 className="text-xl font-bold">UI/UX</h1>
            <hr />
            <p className="font-semibold mt-3">Tailwind Css</p>
            <p className="font-semibold mt-3">Bootstrap</p>
            <p className="font-semibold mt-3">Ant Design</p>
            <p className="font-semibold mt-3">Material UI</p>
            <p className="font-semibold mt-3">Semantic UI</p>
          </div>

          <div className="text-right">
            <h1 className="text-xl font-bold">Back End & DB</h1>
            <hr />
            <p className="font-semibold mt-3">Node JS</p>
            <p className="font-semibold mt-3">Express</p>
            <p className="font-semibold mt-3">Firebase</p>
            <p className="font-semibold mt-3">MongoDB</p>
            <p className="font-semibold mt-3">MySQL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevStack;
