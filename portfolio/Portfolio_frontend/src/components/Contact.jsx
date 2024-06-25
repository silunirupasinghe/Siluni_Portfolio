import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPaperPlane, faPhone, faShare } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
function Contacts() {
    return (
        <>
            <section id="contact">
                <div className="container mx-auto px-28">
                    <h2 className="text-3xl md:text-4xl text-center text-yellow-300 font-bold">Contact</h2>
                    <hr className="my-4 border-yellow-200 mb-10" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                        <div className="text-lg pl-10">
                            <div className='text-lg mx-5 '>
                                <FontAwesomeIcon icon={faEnvelope} className=" text-yellow-300 text-2xl" />
                                <h className='text-center '> : silunirupasinghe@gmail.com</h>
                            </div>

                            <div className='text-lg mx-5 my-5'>
                                <FontAwesomeIcon icon={faPhone} className="mr-3 text-yellow-300 text-2xl" />
                                <h className='text-center mb-5'> : +94 71 197 951</h>
                            </div>

                            <div className='text-lg mx-5 my-5'>
                                <FontAwesomeIcon icon={faLocationDot} className="mr-3 text-yellow-300 text-2xl" />
                                <h className='text-center mb-5'> : Colombo, Sri Lanka</h>
                            </div>

                            <div className='flex gap-5 pl-5'>
                                <Link to={"https://www.linkedin.com/in/siluni-rupasinghe"}>
                                    <FontAwesomeIcon icon={faLinkedin} className="mr-3 text-yellow-300 text-3xl" />
                                </Link>

                                <Link to={"https://github.com/silunirupasinghe"}>
                                    <FontAwesomeIcon icon={faGithub} className="mr-3 text-yellow-300 text-3xl" />
                                </Link>

                                <Link to={"https://github.com/silunirupasinghe"}>
                                    <FontAwesomeIcon icon={faFacebook} className="mr-3 text-yellow-300 text-3xl" />
                                </Link>

                                <Link to={"https://www.instagram.com/siluni.ii/"}>
                                    <FontAwesomeIcon icon={faInstagram} className="mr-3 text-yellow-300 text-3xl" />
                                </Link>

                            </div>
                        </div>

                        <div className="text-left">


                            <form class="max-w-sm mx-10">

                                <div class="mb-5">
                                    <label for="name" class="block mb-2 text-lg font-medium text-yellow-300 dark:text-white"> Name</label>
                                    <input type="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                                </div>
                                <div class="mb-5">
                                    <label for="email" class="block mb-2 text-lg font-medium text-yellow-300 dark:text-white"> Email</label>
                                    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                                </div>


                                <div class="mb-5">
                                    <label for="password" class="block mb-2 text-lg font-medium text-yellow-300 dark:text-white">Message </label>
                                    <textarea type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                                
                                <button type="submit" class="text-black  bg-yellow-300 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send
                                    <FontAwesomeIcon icon={faPaperPlane} className=" ml-3 mr-3 text-3xl" />
                                </button>
                            </form>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contacts;
