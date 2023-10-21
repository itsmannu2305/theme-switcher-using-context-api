import React from "react";
import Typed from "react-typed";

const Home = () => {
  return (
    <div className="home min-h-screen flex bg-white dark:bg-[#0F0F0F]">
      <div className="container mx-auto flex justify-between items-center">
        {/* --------------- Home Left side content ---------------- */}
        <div className="home-left-side-content w-1/2 mt-20">
          <h5 className="font-medium text-gray-400 dark:text-gray-400 tracking-widest uppercase mb-3 font-secondaryFont">
            Welcome to my portfolio
          </h5>
          <h1 className="font-bold tracking-wider text-5xl mb-8 leading-relaxed text-gray-600 dark:text-white font-primaryFont">
            Hi! I'm <span className="text-cyan-600">Manish Sirawta</span> <br />{" "}
            a{" "}
            <span className="text-cyan-600">
              <Typed
                strings={[
                  "Web Developer",
                  "App Developer",
                  "Full Stack Developer",
                ]}
                typeSpeed={150}
                backSpeed={100}
                cursorChar="✒️"
                loop
              />
            </span>
          </h1>
          <p className="text-lg tracking-wide font-secondaryFont text-slate-400 dark:text-gray-300">
            Passionate full-stack engineer with expertise in both front-end and
            back-end development. Skilled in creating robust web applications,
            optimizing performance, and delivering seamless user experiences. A
            problem solver with a strong commitment to clean code and continuous
            learning. Dedicated to crafting innovative digital solutions that
            drive business success.
          </p>
        </div>

        {/* ----------------- Home Right Side Content ---------------- */}
        <div className="home-right-side-content absolute right-0 bottom-0">
          <div className="w-[38vw] h-[85%] bottom-0 right-0 absolute bg-[#ffffff5d] shadow-cyan-500 shadow-[0_0px_18px_-5px_rgba(0,0,0,0.1)] dark:bg-[#2d2b2b6f] backdrop-blur-sm rounded-tl-lg"></div>
          <img
            src="/src/assets/img/home-img.png"
            alt="home-img"
            width={600}
            className="relative"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
