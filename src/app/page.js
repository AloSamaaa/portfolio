import { Inter } from '@next/font/google'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className="container pt-lg-5 mt-lg-5">
        <div className="p-5 m-lg-5 col-md-6 card1">
          <h3 className="fw-bold text-white">Gabriel Angelo D. Dayot</h3>
          <span className="text-secondary pe-4">Fullstack Web Developer</span>
          <span className="text-white">
            <a className="atag" target="_blank" href="https://www.facebook.com/profile.php?id=100088506030945"> <FontAwesomeIcon icon={faFacebook} className="ps-2" width="27px"/> </a>
            <a className="atag" target="_blank" href="https://github.com/AloSamaaa"> <FontAwesomeIcon icon={faLinkedin} className="ps-2" width="27px"/> </a>
            <a className="atag" target="_blank" href="https://www.linkedin.com/in/gabriel-dayot-6a60071b2/"> <FontAwesomeIcon icon={faGithub} className="ps-2" width="27px"/> </a>
          </span>
          <br/>
          <br/>
          <span className="text-white">
            As a fullstack web developer, I'm passionate about creating beautiful and functional web applications.
            I take pride in my work and enjoy facing the challenges that come with building great software.
            With each new project, I bring a creative and innovative approach, leveraging my skills and experience
            to deliver quality solutions that exceed expectations</span>
          <br/>
          <br/>
        </div>
      </div>
    </main>
  )
}
