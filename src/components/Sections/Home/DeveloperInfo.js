const DeveloperInfo = () => {
  return (
    <div className="text-gray-300" data-aos="zoom-in">
      <h1 className="text-4xl text-center font-bold">Who is Adnan Zaib?</h1>

      <div className="h-screen relative md:-mt-60">
        <div className="h-full">
          <lottie-player
            src="https://assets5.lottiefiles.com/packages/lf20_gja1z1ru.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <h1 className="text-3xl mb-5  font-bold md:text-sm">
            Hi, Hello, Assalam U Alaikum...
          </h1>
          <hr />

          <pre className="text-2xl my-5 md:text-sm ">
            {JSON.stringify(
              {
                name: "Adnan Zaib",
                age: "25",
                gender: "male",
                country: "PAKISTAN",
              },
              null,
              2
            )}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default DeveloperInfo;
