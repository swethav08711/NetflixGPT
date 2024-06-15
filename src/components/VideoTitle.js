import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="container p-3 w-1/4">
      <h1 className=" text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg">{overview}</p>
      <div className="flex gap-4">
        <button className="bg-white text-black p-4 border w-1/2 rounded-md text-xl"> ▶️ Play</button>
        <button className="bg-gray-400 text-white p-4 border w-1/2 rounded-md text-xl">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
