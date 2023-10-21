import React from "react";

const About = () => {
  return (
    <div className="about min-h-screen dark:bg-[#0F0F0F] bg-white flex items-center">
      <div className="container mx-auto flex justify-between">
        {/* ---------------------- Left Content --------------- */}
        <div className="about-content w-1/2">
          <img src="/src/assets/img/About Me.svg" alt="about-img" width={600} />
        </div>

        {/* -------------------- Right Content --------------- */}
        <div className="contact-heading mb-20 w-[55%] flex flex-col items-start justify-center">
          <h5 className="font-secondaryFont text-gray-400 dark:text-cyan-500 font-medium capitalize text-sm tracking-wide mb-2">
            About
          </h5>
          <h2 className="font-primaryFont font-semibold dark:text-white text-gray-700 capitalize text-4xl tracking-wide mb-5">
            About Me
          </h2>
          <p className="font-secondaryFont dark:text-gray-300 text-slate-400 tracking-wide  mb-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
            tenetur eius quod. Harum aspernatur minus enim voluptates? Hic,
            blanditiis at? Earum, fugiat autem eaque ex est consequuntur numquam
            saepe quisquam eligendi, sequi harum id? Harum aspernatur minus enim
            voluptates? Hic, blanditiis at? Earum, fugiat autem eaque ex est
            consequuntur numquam saepe quisquam eligendi, sequi harum id?
          </p>
          <p className="font-secondaryFont dark:text-gray-300 text-slate-400 tracking-wide  mb-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
            tenetur eius quod. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Placeat tenetur eius quod.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
