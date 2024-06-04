import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import testimonialImage from '../../Images/testimonial-image.png';

const TestimonialSlider = () => {
  const testimonials = [
    {
      name: "Edward Newgate",
      title: "Founder Circle",
      content: "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedious form, long calls, or administrative hassle) and securely."
    },
    {
      name: "Edward Newgate",
      title: "Founder Circle",
      content: "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedious form, long calls, or administrative hassle) and securely."
    }
  ];

  const [bgColorIndex, setBgColorIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => {
      setBgColorIndex(next % 2);
    }
  };

  const backgroundColors = ["bg-blue-400", "bg-black"];

  return (
    <section id="testimonials" className="py-36 px-4 sm:px-8 md:px-6 lg:px-4 xl:px-28">
      <div className={`max-w-5xl rounded-2xl overflow-hidden shadow-md mx-auto ${backgroundColors[bgColorIndex]} px-6 py-12 text-white relative`}>
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl py-2">What Our Customers Are Saying</h2>
        <div className="testimonial-slider-container relative">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex justify-center items-center">
                <div className="flex flex-col md:flex-row items-center md:items-start mt-5 md:mt-7 mx-5 md:mx-24 space-y-3 md:space-y-0 md:space-x-6">
                  <img
                    src={testimonialImage}
                    alt={testimonial.name}
                    className="rounded-full w-36 h-36 md:w-44 md:h-44 mb-3 md:mb-0 mx-auto md:mx-0"
                  />
                  <div className=" text-cente items-center md:text-left md:w-1/4">
                    <h3 className="mt-0 md:mt-12 text-lg md:text-xl ">{testimonial.name}</h3>
                    <p className="text-gray-200 text-bas text-center md:text-left ">{testimonial.title}</p>
                  </div>
                  <div className="flex-1 mt-2 md:pl-4 ">
                    <p className="text-base md:text-xl ">{testimonial.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
