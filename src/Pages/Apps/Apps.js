import React from 'react';
import { IoArrowDownSharp } from "react-icons/io5";
import trafalgarIllustration2 from '../../Images/trafalgar-illustration2.png';


const Apps = () => {
  return (
    <section id="mobile-apps" className="py-20 px-4 sm:px-8 md:px-6 lg:px-4 xl:px-28">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-10 text-center md:text-left">
          <h2 className="text-3xl font-bold py-5">Download our <span className="block"> mobile apps</span></h2>
          <span class="block w-12 h-1 bg-gray-500 rounded mb-5 mx-auto md:mx-0"></span>
          <p className="max-w-lg mb-6 text-gray-700 leading-relaxed">
            Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedious form, long calls, or administrative hassle) and securely.
          </p>
          <button className="inline-flex items-center justify-center px-4 text-blue-400 py-2 border border-blue-500 rounded-full relative hover:bg-blue-500 hover:text-white transition duration-300">
            <span>Download</span>
            < IoArrowDownSharp className="ml-2" />
          </button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img src={trafalgarIllustration2} alt="Mobile Apps" className="w-full h-auto rounded-lg object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Apps;
