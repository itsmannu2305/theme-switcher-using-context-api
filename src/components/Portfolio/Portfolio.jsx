import React from "react";
import { Link } from "react-router-dom";
import { HiMiniArrowUpRight } from "react-icons/hi2";

const Portfolio = () => {
  return (
    <div className="portfolio min-h-screen dark:bg-[#0F0F0F] flex items-center">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="contact-heading mb-20">
          <h5 className="font-secondaryFont text-gray-400 dark:text-cyan-500 font-medium capitalize text-sm tracking-wide text-center mb-3">
            Recent Projects
          </h5>
          <h2 className="font-primaryFont font-semibold dark:text-white text-gray-700 capitalize text-4xl tracking-wide text-center">
            My Portfolio
          </h2>
        </div>

        {/* --------------------- Portfolio Content ----------------- */}
        <div className="portfolio-content flex justify-between w-full">
          <div className="portfolio-card bg-white dark:bg-[#191919] shadow-cyan-500 shadow-[0_0px_15px_-5px_rgba(0,0,0,0.1)] w-[350px] h-[440px] rounded-md">
            <div className="card-top rounded-md">
              <img
                src="/src/assets/img/portfolio-1.png"
                alt="portfolio-img"
                loading="lazy"
                width={350}
                className="rounded-t-md"
              />
            </div>
            <div className="card-bottom px-6 py-4">
              <h5 className="font-primaryFont font-medium text-gray-700 tracking-wide dark:text-white mb-2">
                Dashboard
              </h5>
              <p className="font-secondaryFont text-sm text-gray-400 dark:text-gray-400 mb-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
                nobis nisi dolorem cupiditate. Dolore!
              </p>
              <Link
                to="#"
                className="text-cyan-600 font-primaryFont text-sm tracking-wide border-b-[1px] pb-1 hover: border-cyan-600"
              >
                Learn more{" "}
                <HiMiniArrowUpRight className="inline-block text-lg" />
              </Link>
            </div>
          </div>

          <div className="portfolio-card bg-white dark:bg-[#191919]  h-[440px] rounded-md shadow-[0_0px_15px_-5px_rgba(0,0,0,0.1)] shadow-cyan-500 w-[350px]">
            <div className="card-top rounded-md">
              <img
                src="/src/assets/img/portfolio-2.png"
                alt="portfolio-img"
                loading="lazy"
                width={350}
                className="rounded-t-md"
              />
            </div>
            <div className="card-bottom px-6 py-4">
              <h5 className="font-primaryFont font-medium text-gray-700 tracking-wide dark:text-white mb-2">
                Books App
              </h5>
              <p className="font-secondaryFont text-sm text-gray-400 dark:text-gray-400 mb-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
                nobis nisi dolorem cupiditate. Dolore!
              </p>
              <Link
                to="#"
                className="text-cyan-600 font-primaryFont text-sm tracking-wide border-b-[1px] pb-1 hover: border-cyan-600"
              >
                Learn more{" "}
                <HiMiniArrowUpRight className="inline-block text-lg" />
              </Link>
            </div>
          </div>

          <div className="portfolio-card bg-white dark:bg-[#191919] w-[350px] h-[440px] rounded-md shadow-[0_0px_15px_-5px_rgba(0,0,0,0.1)] shadow-cyan-500">
            <div className="card-top rounded-md">
              <img
                src="/src/assets/img/portfolio-3.png"
                alt="portfolio-img"
                loading="lazy"
                width={350}
                className="rounded-t-md"
              />
            </div>
            <div className="card-bottom px-6 py-4">
              <h5 className="font-primaryFont font-medium text-gray-700 tracking-wide dark:text-white mb-2">
                Livin
              </h5>
              <p className="font-secondaryFont text-sm text-gray-400 dark:text-gray-400 mb-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
                nobis nisi dolorem cupiditate. Dolore!
              </p>
              <Link
                to="#"
                className="text-cyan-600 font-primaryFont text-sm tracking-wide border-b-[1px] pb-1 hover: border-cyan-600"
              >
                Learn more{" "}
                <HiMiniArrowUpRight className="inline-block text-lg" />
              </Link>
            </div>
          </div>

          <div className="portfolio-card bg-white dark:bg-[#191919] w-[350px] h-[440px] rounded-md shadow-[0_0px_15px_-5px_rgba(0,0,0,0.1)] shadow-cyan-500">
            <div className="card-top rounded-md">
              <img
                src="/src/assets/img/portfolio-5.png"
                alt="portfolio-img"
                loading="lazy"
                width={350}
                className="rounded-t-md"
              />
            </div>
            <div className="card-bottom px-6 py-4">
              <h5 className="font-primaryFont font-medium text-gray-700 tracking-wide dark:text-white mb-2">
                Zolchix
              </h5>
              <p className="font-secondaryFont text-sm text-gray-400 dark:text-gray-400 mb-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
                nobis nisi dolorem cupiditate. Dolore!
              </p>
              <Link
                to="#"
                className="text-cyan-600 font-primaryFont text-sm tracking-wide border-b-[1px] pb-1 hover: border-cyan-600"
              >
                Learn more{" "}
                <HiMiniArrowUpRight className="inline-block text-lg" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
