import React from "react";

const Video = () => {
 
  return (
    <>
      <video muted loop autoPlay className="object-cover h-screen w-screen">
        <source src="/video/muscle-lab.mp4" />
      </video>
    </>
  );
};

export default Video;
