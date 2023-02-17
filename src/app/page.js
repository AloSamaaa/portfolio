import { Inter } from '@next/font/google'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className="container-fluid pt-lg-5 mt-lg-5 pt-3 mt-3">
        <div className="row">
          <div className="ps-lg-5 pt-lg-5 p-4 ms-lg-5 mt-lg-5 col-md-6">
            <h3 className="fw-bold text-white">Gabriel Angelo <span className="lastName">D. Dayot</span></h3>
            <span className="text-secondary">Fullstack Web Developer</span>
            <div className="text-white mt-2 mb-3">
              <a className="atag" target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=100088506030945"> <FontAwesomeIcon icon={faFacebook} className="ps-2" width="27px" /> </a>
              <a className="atag" target="_blank" rel="noreferrer" href="https://github.com/AloSamaaa"> <FontAwesomeIcon icon={faLinkedin} className="ps-2" width="27px" /> </a>
              <a className="atag" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/gabriel-dayot-6a60071b2/"> <FontAwesomeIcon icon={faGithub} className="ps-2" width="27px" /> </a>
            </div>
            <span className="text-white">
              I&apos;m a <span className="lastName">Fullstack web developer </span>with expertise in both Frontend and Backend development.
              I create responsive and user-friendly websites and web applications using ReactJS and Laravel frameworks.
              I&apos;m passionate about problem-solving and delivering high-quality projects on time and within budget,
              and I&apos;m always eager to learn and stay up-to-date with the latest industry trends.
              Helping clients bring their visions to life on the web is my source of pride.</span>
            <br />
            <br />
          </div>
          <div className="col-md-4 d-none d-sm-block">
            <img className="profile" src="/profile.png"></img>
          </div>
        </div>
      </div>
    </main>
  )
}
