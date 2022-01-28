import AOS from "aos";

AOS.init({ duration: 1000 });

const Intro = () => {
  return (
    <div className="min-h-screen">
      <div className="grid md:grid-cols-1 grid-cols-2 h-screen items-center border-4 md:border-0 border-violet-900 mx-10 transform rotate-12 md:rotate-0 bg-themeGrey">
        <div className="h-1/2 " data-aos="fade-down">
          <lottie-player
            src="https://assets8.lottiefiles.com/packages/lf20_kkflmtur.json"
            mode="bounce"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
        <div className="font-bold text-themeWhite md:px-5">
          <h1 className="text-7xl md:text-4xl" data-aos="slide-right">
            Hi, I am <b className="text-purple-900">Adnan Zaib</b>
          </h1>
          <b>
            <hr className="p-1 mt-3 w-3/4 bg-themeWhite " />
          </b>
          <h1 className="text-4xl md:text-xl md:mt-2" data-aos="slide-left">
            MERN Stack <b className="text-blue-900"> Developer</b>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Intro;
