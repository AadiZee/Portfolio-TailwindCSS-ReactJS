const JavascriptHighlight = () => {
  return (
    <div className="my-20">
      <div className=" text-center h-52 bg-sky-600">
        <h1
          className="text-themeWhite font-bold text-4xl py-10 md:py-0"
          data-aos="flip-left"
        >
          Yes, You Are Right...I am a Javascript Buff
        </h1>
      </div>

      <div className="bg-themeBlack md:mx-4 md:-mt-10 md:hover:bg-fuchsia-900 mx-32 shadow-gray-600 shadow-lg -mt-20 rounded-lg hover:bg-fuchsia-900">
        <div className="h-96" data-aos="flip-right">
          <lottie-player
            src="https://assets3.lottiefiles.com/packages/lf20_gnb0jsok.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
        <p className="text-xl text-themeWhite font-semibold md:px-5 px-14 py-10">
          JavaScript, often abbreviated JS, is a programming language that is
          one of the core technologies of the World Wide Web, alongside HTML and
          CSS. Over 97% of websites use JavaScript on the client side for web
          page behavior.
        </p>
      </div>
    </div>
  );
};

export default JavascriptHighlight;
