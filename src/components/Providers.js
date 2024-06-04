import React from 'react';
import trafalgarIllustration1 from '../Images/trafalgar-illustration1.png';

const Providers = () => {
  return (
    <section id="providers" className="py-16 px-4 sm:px-8 md:px-6 lg:px-4 xl:px-28">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img src={trafalgarIllustration1} alt="Healthcare providers" className="w-full h-auto rounded-lg  object-cover" />
        </div>
        <div className="md:w-1/2 md:pl-10 text-center md:text-left">
          <h2 className="text-4xl font-bold py-5">Leading healthcare <span className=" block">providers</span></h2>
          <span class="block w-12 h-1 bg-gray-500 rounded mb-5 mx-auto md:mx-0"></span>
          <p className="max-w-lg mb-6 text-gray-700 leading-relaxed">
            Trafalgar provides progressive and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver.
          </p>
          <button className="text-blue-400 px-8 py-2 border border-blue-500 rounded-full relative hover:bg-blue-500 hover:text-white transition duration-300">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};

export default Providers;
