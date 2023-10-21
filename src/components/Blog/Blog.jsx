import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import TimeAgo from "react-timeago";

const Blog = () => {
  const blogs = useLoaderData();

  return (
    <div className="portfolio min-h-screen dark:bg-[#0F0F0F] flex items-center">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="contact-heading mb-14 mt-14">
          <h5 className="font-secondaryFont text-gray-400 dark:text-cyan-500 font-medium capitalize text-sm tracking-wide text-center mb-3">
            Recent Blogs
          </h5>
          <h2 className="font-primaryFont font-semibold dark:text-white text-gray-700 capitalize text-4xl tracking-wide text-center">
            My Blogs
          </h2>
        </div>

        {/* --------------------- Portfolio Content ----------------- */}
        <div className="portfolio-content flex justify-between w-full items-center gap-8 flex-wrap">
          {blogs.map((post) => {
            return (
              <div
                key={post.id}
                className="portfolio-card w-[360px] h-fit bg-white dark:bg-[#191919] shadow-cyan-500 shadow-[0_0px_15px_-5px_rgba(0,0,0,0.1)] rounded-md"
              >
                <div className="card-top rounded-md">
                  <img
                    src={post.cover_image || "/src/assets/img/portfolio-5.png"}
                    alt="portfolio-img"
                    width={360}
                    loading="lazy"
                    className="rounded-t-md h-[150px]"
                  />
                </div>
                <div className="card-bottom px-4 py-4">
                  <h5 className="font-primaryFont font-medium text-gray-700 tracking-wide dark:text-white mb-2">
                    {post.slug[0].toUpperCase() +
                      post.slug.slice(1, 27).replaceAll("-", " ")}
                    ...
                  </h5>
                  <p className="font-secondaryFont text-sm text-gray-400 dark:text-gray-400 mb-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Error nobis nisi dolorem cupiditate. Dolore!
                  </p>
                  <p className="font-primaryFont tracking-wide text-sm mb-5 text-slate-400">
                    #{post.tags.replaceAll(" ", " #").slice(0, 40)}...
                  </p>
                  <p className="font-primaryFont font-medium text-xs tracking-wide text-cyan-600 flex justify-between">
                    Created: {post.user.name} <TimeAgo date={post.created_at} />
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;

export const blogsDataFetch = async () => {
  const response = await fetch("https://dev.to/api/articles?tag=javascript");
  const data = await response.json();
  return data.slice(20, 28);
};
