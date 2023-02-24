import Footer from './footer.js';
import Contact from './contactform.js';
import Navbar from './navbar.js';
import Project from './projects.js';
import About from './about.js';
import Landing from './landing.js';
import Scroll from './scrolltotop.js';


export default function Home() {


  return (
    <>

      <section className="soa" id="home">
        <Navbar />
        <Landing />
      </section>

      <section className="soa mb-5" id="about">
        <About />
      </section>


      <section className="soa" id="projects">
        <Project />
      </section>

      <section className="soa" id="contact">
        <Contact />
      </section>

      <Scroll/>
      <Footer/>
    </>
  )
}
