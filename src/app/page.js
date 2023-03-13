'use client';
import Footer from './footer.js';
import Contact from './contactform.js';
import Navbar from './navbar.js';
import Project from './projects.js';
import About from './about.js';
import Landing from './landing.js';
import Scroll from './scrolltotop.js';
import { useEffect, useState } from 'react';

export default function Home() {
  const [sections, setSections] = useState([
    { id: 'home', isRevealed: false },
    { id: 'about', isRevealed: false },
    { id: 'projects', isRevealed: false },
    { id: 'contact', isRevealed: false },
  ]);

  useEffect(() => {
    function handleScroll() {
      const updatedSections = [...sections];
      updatedSections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el.getBoundingClientRect().top <= window.innerHeight * 0.5) {
          section.isRevealed = true;
        }
      });
      setSections(updatedSections);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <section className="soa" id="home">
          <Navbar />
          <Landing />
      </section>

      <section className="soa mb-5" id="about">
        <div className={`my-element ${sections[1].isRevealed ? 'revealed' : ''}`}>
          <About />
        </div>
      </section>

      <section className="soa" id="projects">
        <div className={`my-element ${sections[2].isRevealed ? 'revealed' : ''}`}>
          <Project />
        </div>
      </section>

      <section className="soa" id="contact">
        <div className={`my-element ${sections[3].isRevealed ? 'revealed' : ''}`}>
          <Contact />
        </div>
      </section>

      <Scroll />
      <Footer />
    </>
  );
}
