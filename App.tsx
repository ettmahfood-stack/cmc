
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Majors from './components/Majors';
import Facilities from './components/Facilities';
import StudentLife from './components/StudentLife';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="antialiased selection:bg-blue-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Majors />
        <Facilities />
        <StudentLife />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
