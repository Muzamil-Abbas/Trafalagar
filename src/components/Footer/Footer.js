import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-400 text-white py-14">
      <div className="container mx-auto flex flex-col-reverse md:grid md:grid-cols-4 gap-8 md:gap-4 md:justify-items-center md:items-start justify-items-start items-start">
        {/* Brand and Description */}
        <div className="px-4 md:px-0">
          <h3 className="text-lg font-bold mb-4 flex items-center">
            <span className="bg-white text-blue-400 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl mr-2">T</span>
            <span>Trafalgar</span>
          </h3>
          <p className="my-4">
            Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone.
          </p>
          <span className="text-base block mt-6">© Trafalgar PTY LTD 2020. All rights reserved.</span>
        </div>

        {/* Company Section */}
        <div className="px-4 md:px-0">
          <h3 className="text-lg font-bold mb-4">Company</h3>
          <ul className="list-none pl-0">
            {['About', 'Testimonials', 'Find a doctor', 'Apps'].map((item) => (
              <li key={item} className="py-1 hover:text-blue-300 transition-colors duration-300 hover:cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>

        {/* Region Section */}
        <div className="px-4 md:px-0">
          <h3 className="text-lg font-bold mb-4">Region</h3>
          <ul className="list-none pl-0">
            {['Indonesia', 'Singapore', 'Hongkong', 'Canada'].map((region) => (
              <li key={region} className="py-1 hover:text-blue-300 transition-colors duration-300 hover:cursor-pointer">{region}</li>
            ))}
          </ul>
        </div>

        {/* Help Section */}
        <div className="px-4 md:px-0">
          <h3 className="text-lg font-bold mb-4">Help</h3>
          <ul className="list-none pl-0">
            {['Help center', 'Contact support', 'Instructions', 'How it works'].map((help) => (
              <li key={help} className="py-1 hover:text-blue-300 transition-colors duration-300 hover:cursor-pointer">{help}</li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;