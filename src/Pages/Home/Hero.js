import React from 'react';
import healthcareImage from '../../Images/healthcare.png';
import dotsImage from '../../Images/element.png';

const Hero = () => {
  return (
    <div>
      <section id="home" className="relative pt-28 flex items-center justify-between container mx-auto p-4 ">
        <img src={dotsImage} alt="Dots" className="absolute top-16 left-0 h-20 w-auto hidden md:block " style={{ marginLeft: '-2rem' }} />
        {/* Main Content */}
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">

            <div className="md:w-1/2 md:pl-8">
              <h2 className="text-4xl font-bold xl:pt-20 md:pt-2">Virtual healthcare <span className="block">for you</span></h2>
              <p className="mt-4 text-lg text-gray-500">
                Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone
              </p>
              <button className="mt-6 bg-blue-400 text-white py-2 px-6 rounded-full hover:bg-blue-600">
                Consult today
              </button>
            </div>
            <div className="md:w-1/2">
              <img src={healthcareImage} alt="Healthcare" className="w-full md:max-w-lg mx-auto" />
            </div>
          </div>
        </div>
      </section >
    </div >
  );
};

export default Hero;
