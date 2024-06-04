import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import image1 from '../../Images/image1.png';
import image2 from '../../Images/image2.png';
import image3 from '../../Images/image3.png';

const AboutUs = () => {
  return (
    <section id="articles" className="py-20 px-4 sm:px-8 md:px-6 lg:px-4 xl:px-28">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Check out Our Latest Articles</h2>
        <span className="block mx-auto mb-12 w-12 h-1 bg-gray-500 rounded"></span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="article bg-white rounded-lg shadow-md flex flex-col">
            <img src={image1} alt="Article 1" className="article-image rounded-t-lg" />
            <div className="p-6 flex-1">
              <h3 className="text-xl font-semibold mb-2">Disease Detection, Check-Up in the Laboratory</h3>
              <p className="text-gray-700 mb-4">In this case, the role of the health laboratory is very important to do a disease detection...</p>
              <a href="#article-link" className="text-blue-500 hover:underline flex items-center">
                Read more <BsArrowRight className="ml-2" />
              </a>
            </div>
          </div>
          <div className="article bg-white rounded-lg shadow-md flex flex-col">
            <img src={image2} alt="Article 2" className="article-image rounded-t-lg" />
            <div className="p-6 flex-1">
              <h3 className="text-xl font-semibold mb-2">Herbal Medicines that are Safe for Consumption</h3>
              <p className="text-gray-700 mb-4">Herbal medicine is very widely used at this time because it's very good for your health...</p>
              <a href="#article-link" className="text-blue-500 hover:underline flex items-center">
                Read more <BsArrowRight className="ml-2" />
              </a>
            </div>
          </div>
          <div className="article bg-white rounded-lg shadow-md flex flex-col">
            <img src={image3} alt="Article 3" className="article-image rounded-t-lg" />
            <div className="p-6 flex-1">
              <h3 className="text-xl font-semibold mb-2">Natural Care for Healthy Facial Skin</h3>
              <p className="text-gray-700 mb-4">A healthy lifestyle should start from now and also for your, from now and also for your  skin health...</p>
              <a href="#article-link" className="text-blue-500 hover:underline flex items-center">
                Read more <BsArrowRight className="ml-2" />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <a href="#view-all" className="text-blue-400 px-8 py-2 border border-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition duration-300">View all</a>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
