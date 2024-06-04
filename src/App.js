import React from 'react';
import Header from './components/Header/Header';
import Hero from './Pages/Home/Hero.js';
import Services from './Pages/Services/Services.js';
import Providers from './components/Providers.js';
import Apps from './Pages/Apps/Apps.js';
import Testimonials from './Pages/Testimonials/Testimonials.js';
import AboutUs from './Pages/About/AboutUs.js';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Providers />
      <Apps />
      <Testimonials />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default App;
