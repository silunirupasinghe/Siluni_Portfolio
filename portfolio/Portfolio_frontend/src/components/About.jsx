function About() {
    return (
        <>
            <section id="about" className="py-10">
                <div className="container mx-auto px-28">
                    <h2 className="text-3xl md:text-4xl text-yellow-300 font-bold text-center">About Me</h2>
                    <hr className="my-4 border-yellow-200" />
                    
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8 pl-4">
                        <div className="flex flex-col md:flex-row gap-6">
                            <h2 className="text-xl font-normal">Name :</h2>
                            <h2 className="text-xl font-normal text-yellow-100">Siluni Nimahara Rupasinghe</h2>
                        </div>

                        <div className="flex flex-col md:flex-row gap-6">
                            <h2 className="text-xl font-normal">Birthday :</h2>
                            <h2 className="text-xl font-normal text-yellow-100">3rd FEB 2002</h2>
                        </div>
                    </div>

                    <div className="mt-4 flex flex-col md:flex-row gap-6 pl-4">
                        <h2 className="text-xl font-normal">University:</h2>
                        <h2 className="text-xl font-normal text-yellow-100">
                            Sri Lanka Institute of Information Technology (SLIIT) (2022-current)<br />
                            Bsc (Hons) In Information Technology Specializing in Software Engineering<br />
                            CGPA- 3.4/4.0
                        </h2>
                    </div>

                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8 pl-4">
                        <div className="flex flex-col md:flex-row gap-6">
                            <h2 className="text-xl font-normal">School:</h2>
                            <h2 className="text-xl font-normal text-yellow-100">
                                Anula Vidyalaya, Nugegoda (2008-2021)<br />
                                AL Stream- Physical Science
                            </h2>
                        </div>
                    </div>

                    <div className="mt-8">
                        <hr className="my-4 border-yellow-300 " />
                        <h2 className="text-xl font-normal text-yellow-100 pl-4">EXPERIENCE</h2>
                        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8 pl-4">
                            <div className="flex flex-col gap-6 md:flex-row md:gap-12">
                                <li className="text-lg font-normal px-8 mr-10">
                                    Finance Associate<br />
                                    Sellwin Holdings (pvt) Ltd<br />
                                    2023 March- 2024 April
                                </li>
                                <li className="text-lg font-normal ">
                                    Intern Finance<br />
                                    Sellwin Holdings (pvt) Ltd<br />
                                    OCT 2022- MARCH 2023
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;
