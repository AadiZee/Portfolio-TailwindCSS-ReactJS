const Intro = () => {
  return (
    <div className="mt-20 md:-mt-20">
      <div className="h-screen">
        <div className="h-3/4" data-aos="zoom-in-up">
          <lottie-player
            src="https://assets4.lottiefiles.com/packages/lf20_ygiuluqn.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>

        <p
          className="text-xl font-semibold text-center text-themeWhite"
          data-aos="zoom-in-down"
        >
          Good ideas are not adopted automatically. They must be driven into
          practice with courageous patience
        </p>
        <h1
          className="text-4xl font-semibold mt-5 text-center text-themeWhite"
          data-aos="zoom-in-down"
        >
          Because
        </h1>
      </div>

      <div
        className="text-themeWhite font-bold text-center bg-red-800 mx-20 p-20 rounded-tl-full rounded-br-full md:mx-5"
        data-aos="flip-left"
      >
        <h1 className="text-8xl md:text-sm lg:text-4xl xl:text-5xl mb-5">
          THE GAME IS...
        </h1>
        <h1 className="text-8xl md:text-sm lg:text-4xl xl:text-5xl mt-5">
          CONSISTENCY
        </h1>
      </div>
    </div>
  );
};

export default Intro;
