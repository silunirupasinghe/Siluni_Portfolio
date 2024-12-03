import React from "react";
import cv from "../assets/cv.jpg";

function Introduction() {
  return (
    <>
      <div className="container mx-auto md:px-28 sm:px-auto  py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src={cv}
              alt="Siluni"
              className="h-60 w-60 md:h-80 md:w-80 rounded-full "
            />
          </div>

          {/* Text Section */}
          <div className="text-left">
            <div className="text-lg text-gray-600">HI THERE,</div>
            <h2 className="text-3xl md:text-4xl text-yellow-300 font-bold ">
              I'm Siluni Rupasinghe
            </h2>
            <p className="mt-4 text-lg leading-relaxed px-3">
            As a dedicated Software Engineering undergraduate, 
            I specialize in Web Development and Android Mobile Development, 
            with a strong foundation in the MERN Stack, Java, and Python. 
            I am committed to crafting clean, efficient, and scalable code while 
            excelling as a quick learner and a collaborative team player. 
            With a sharp attention to detail, I am eager to enhance my skills 
            and contribute meaningfully to the tech industry.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Introduction;
