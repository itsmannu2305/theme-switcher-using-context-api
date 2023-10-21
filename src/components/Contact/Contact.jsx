import React from "react";

const Contact = () => {
  return (
    <div className="contact min-h-screen bg-white dark:bg-[#0F0F0F] flex items-center">
      <div className="container mx-auto flex flex-col items-center justify-center gap-16">
        <div className="contact-heading">
          <h5 className="font-secondaryFont text-gray-500 dark:text-cyan-500 font-medium capitalize text-sm tracking-wide text-center mb-3">
            Get in touch
          </h5>
          <h2 className="font-primaryFont font-semibold dark:text-white text-gray-700 capitalize text-4xl tracking-wide text-center">
            Contact me
          </h2>
          <p className="font-secondaryFont text-slate-600 dark:text-slate-200 tracking-wide text-center mt-5 font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        {/* --------------------- Contact Form ----------------- */}
        <div className="contact-form w-1/2">
          <form className="flex flex-col justify-center items-center gap-10">
            <div className="inputs-field flex flex-wrap gap-10 items-center justify-center">
              <div>
                <label
                  htmlFor="firstname"
                  className="text-gray-600 dark:text-white font-secondaryFont tracking-wide block mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="firstname"
                  className="px-4 py-2 w-[300px] rounded-md outline-none border border-cyan-400 text-gray-600 dark:text-white bg-white dark:bg-[#0F0F0F]"
                />
              </div>

              <div>
                <label
                  htmlFor="lastname"
                  className="text-gray-600 dark:text-white font-secondaryFont tracking-wide block mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastname"
                  className="px-4 py-2 w-[300px] rounded-md outline-none border border-cyan-400 text-gray-600 dark:text-white bg-white dark:bg-[#0F0F0F]"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-gray-600 dark:text-white font-secondaryFont tracking-wide block mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="px-4 py-2 w-[300px] rounded-md outline-none border border-cyan-400 text-gray-600 dark:text-white bg-white dark:bg-[#0F0F0F]"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="text-gray-600 dark:text-white font-secondaryFont tracking-wide block mb-2"
                >
                  Phone
                </label>
                <input
                  type="number"
                  name="phone"
                  className="[&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none px-4 py-2 w-[300px] rounded-md outline-none border border-cyan-400 text-gray-600 dark:text-white bg-white dark:bg-[#0F0F0F]"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="topcis"
                className="text-gray-600 dark:text-white font-secondaryFont tracking-wide block mb-2"
              >
                Choose a topic
              </label>
              <select
                id="topics"
                name="topics"
                className="px-4 py-2 w-[640px] rounded-md outline-none border border-cyan-400 text-gray-600 dark:text-gray-300 bg-white dark:bg-[#0F0F0F]"
              >
                <option value="">Select one...</option>
                <option value="web-developer">Web Developer</option>
                <option value="app-developer">App Developer</option>
                <option value="full-stack-developer">
                  Full Stack Developer
                </option>
                <option value="mern-developer">MERN Developer</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="text-gray-600 dark:text-white font-secondaryFont tracking-wide block mb-2"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="4"
                placeholder="Type your message..."
                className="px-4 py-4 w-[640px] rounded-md font-secondaryFont tracking-wide outline-none border border-cyan-400 text-gray-600 dark:text-white bg-white dark:bg-[#0F0F0F]"
              ></textarea>
            </div>

            <button className="px-6 py-2 text-white bg-cyan-600 rounded-md tracking-wide font-primaryFont font-medium shadow-xl hover:bg-cyan-500 transition duration-300">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
