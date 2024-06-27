import React from "react";
import textile from "../assets/projects/textile.png";
import sellwin from "../assets/projects/sellwin.png";

function Projects() {
    return (
        <>
            <section id="projects" className="py-10">
                <div className="container mx-auto  md:px-28">
                    <h2 className="text-3xl md:text-4xl text-center text-yellow-300 font-bold">PROJECTS</h2>
                    <hr className="my-4 border-yellow-200" />
                    <div className="flex flex-wrap gap-8 justify-center my-10">
                        <div className="container2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 ">
                            <img src={textile} alt="Avatar" className="image h-52 w-full object-cover rounded-lg" />
                            <div className="middle">
                                <div className="text font-bold">Textile & Garment Management System</div>
                            </div>
                        </div>

                        <div className="container2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                            <img src={sellwin} alt="Avatar" className="image h-52 w-full object-cover rounded-lg" />
                            <div className="middle">
                                <div className="text">Website for Sellwin Holdings (pvt) Ltd</div>
                            </div>
                        </div>

                        <div className="container2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 ">
                            <img src={textile} alt="Avatar" className="image h-full w-full object-cover rounded-lg" />
                            <div className="middle">
                                <div className="text">Textile and Garment Management System</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Projects;
