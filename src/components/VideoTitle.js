import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="container p-3 w-1/2 absolute text-white bg-gradient-to-r from-black h-full w-screen aspect-video md:pt-[14%] px-14 pt-[30%]">
      <h1 className="text-2xl lg:text-4xl md:text-3xl font-bold">{title}</h1>
      <p className="hidden md:block py-6 text-md lg:w-1/2 w-8/12">{overview}</p>
      <div className="flex gap-4 w-1/2 lg:py-0 py-3">
        <button className="bg-white text-black lg:p-4 p-2 border w-1/2 rounded-md lg:text-xl text-base font-bold hover:bg-opacity-70">
          ▶️ Play
        </button>
        <button className="bg-gray-400 opacity-50 text-black lg:p-4 p-2 border w-1/2 rounded-md lg:text-xl text-base font-bold  hover:opacity-40  hover:text-black ">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
