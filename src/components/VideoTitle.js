import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="container p-3 w-1/2 absolute text-white bg-gradient-to-r from-black h-full w-screen aspect-video pt-[14%] px-14">
      <h1 className=" text-4xl font-bold">{title}</h1>
      <p className="py-6 text-md w-1/2">{overview}</p>
      <div className="flex gap-4 w-1/2">
        <button className="bg-white text-black p-4 border w-1/2 rounded-md text-xl font-bold hover:bg-opacity-70">
          ▶️ Play
        </button>
        <button className="bg-gray-400 opacity-50 text-black p-4 border w-1/2 rounded-md text-xl font-bold  hover:opacity-40  hover:text-black ">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
