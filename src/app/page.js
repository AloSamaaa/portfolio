import { Inter } from '@next/font/google'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className="container pt-lg-5 mt-lg-5 pb-5 mb-5">
        <div className="p-5 m-lg-5 col-md-6 card1">
          <h3 className="fw-bold text-white">Gabriel Angelo <span className="lastName">D. Dayot</span></h3>
          <span className="text-secondary">Fullstack Web Developer</span>
          <div className="text-white mt-2 mb-3">
            <a className="atag" target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=100088506030945"> <FontAwesomeIcon icon={faFacebook} className="ps-2" width="27px"/> </a>
            <a className="atag" target="_blank" rel="noreferrer" href="https://github.com/AloSamaaa"> <FontAwesomeIcon icon={faLinkedin} className="ps-2" width="27px"/> </a>
            <a className="atag" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/gabriel-dayot-6a60071b2/"> <FontAwesomeIcon icon={faGithub} className="ps-2" width="27px"/> </a>
          </div>
          <span className="text-white">
            As a <span className="lastName">Fullstack web developer</span>, I&apos;m passionate about creating beautiful and functional web applications.
            I take pride in my work and enjoy facing the challenges that come with building great software.
            With each new project, I bring a creative and innovative approach, leveraging my skills and experience
            to deliver quality solutions that exceed expectations.</span>
          <br/>
          <br/>
        </div>
      </div>
    </main>
  )
}
