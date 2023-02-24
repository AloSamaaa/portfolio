import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Contact from './contactform.js';
import Image from 'next/image';
import Navbar from './navbar.js';
import Link from 'next/link'

export default function Home() {


  return (
    <>

      <section className="soa" id="home">
        <Navbar />
        <div className="container pt-lg-5 mt-lg-5 pt-5 mt-5 mb-5 pb-5">
          <div className="row">
            <div className="pt-lg-5 p-5 mt-lg-5 col-md-6 pe-5 me-5">
              <h3 className="fw-bold text-white">Gabriel Angelo <span className="lastName">D. Dayot</span></h3>
              <span className="text-secondary">Fullstack Web Developer</span>
              <div className="text-white mt-2 mb-3">
                <a className="atag" target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=100088506030945"> <FontAwesomeIcon icon={faFacebook} className="ps-2" width="30px" /> </a>
                <a className="atag" target="_blank" rel="noreferrer" href="https://github.com/AloSamaaa"> <FontAwesomeIcon icon={faLinkedin} className="ps-2" width="30px" /> </a>
                <a className="atag" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/gabriel-dayot-6a60071b2/"> <FontAwesomeIcon icon={faGithub} className="ps-2" width="30px" /> </a>
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
            <div className="col-md-5 d-none d-sm-block imgprof text-center mt-2 ms-4">
              <Image className="profile" src="/profile.jpeg" width={350} height={350} alt="..."></Image>
            </div>
          </div>
        </div>
      </section>

      <section className="soa mb-5" id="about">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 mt-5 text-center">
              <Image src="/aboutme.jpg" height={500} width={320} alt="..."></Image>
            </div>
            <div className="text-start text-white mt-5 pt-5 col-md-4 mb-5 pb-5">
              <h3 className="lastName">About</h3>
              <div className="pb-5">
                I&apos;m an experienced Full-stack web developer with strong attention to detail and efficient troubleshooting skills
                . As a collaborative team player with effective communication abilities, I enjoy delivering high-quality products that
                meet user needs. Additionally, I&apo;m eager to learn and explore new technologies.
              </div>

              <h3 className="lastName">Tech Stack</h3>
              <div className="card card1">
                <div className="pt-2 pb-4">
                  <Image className="ps-3" src="/html.svg" width={50} height={50} alt="..."></Image>
                  <Image className="ps-3" src="/css.svg" width={50} height={50} alt="..."></Image>
                  <Image className="ps-3" src="/tailwindcss.svg" width={100} height={100} alt="..."></Image>
                  <Image className="ps-3" src="/bootstrap.svg" width={60} height={60} alt="..."></Image>
                  <Image className="ps-3" src="/javascript.svg" width={55} height={55} alt="..."></Image>
                  <Image className="ps-3" src="/php.svg" width={60} height={60} alt="..."></Image>
                  <Image className="ps-3" src="/next.svg" width={60} height={60} alt="..."></Image>
                  <Image className="ps-3 pt-3" src="/react.svg" width={60} height={60} alt="..."></Image>
                  <Image className="ps-3 pt-3" src="/laravel.svg" width={60} height={60} alt="..."></Image>
                  <Image className="ps-3 pt-3" src="/firebase.svg" width={50} height={50} alt="..."></Image>
                  <Image className="ps-3 pt-3" src="/mysql.svg" width={60} height={60} alt="..."></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="soa" id="projects">
        <div className="container mt-5 gx-5">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h3 className="lastName">Projects</h3>
            </div>

            <div className="col-md-3">
              <div className="card mb-3">
                <Image src="/project1.png" className="card-img-top" width={1920} height={250} alt="..." />
                <div className="card-body text-center">
                  <div className="mb-3 fw-bold text-white">Gamefo</div>
                  <Link href="https://alosamaa.vercel.app/" target="_blank" rel="noreferrer" className="btn btn-warning">Live link</Link>
                  <Link href="https://github.com/AloSamaaa/Major-project-1" target="_blank" rel="noreferrer" className="btn btn-warning ms-5">Github repo</Link>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card mb-3">
                <Image src="/project2.jpg" class="card-img-top" width={1920} height={250} alt="..." />
                <div className="card-body text-center">
                <div className="mb-3 fw-bold text-white">Resorts Villas</div>
                  <Link href="https://resortvillas.vercel.app/" target="_blank" rel="noreferrer" className="btn btn-warning">Live link</Link>
                  <Link href="https://github.com/WD29Group/resortvillas" target="_blank" rel="noreferrer" className="btn btn-warning ms-5">Github repo</Link>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card mb-3">
                <Image src="/project3.png" class="card-img-top" width={1920} height={250} alt="..." />
                <div className="card-body text-center">
                  <div className="mb-3 fw-bold text-white">Dream fields</div>
                  <Link href="#" target="_blank" rel="noreferrer" className="btn btn-warning" disabled>Live link</Link>
                  <Link href="https://github.com/ricesush/dream-fields" target="_blank" rel="noreferrer" className="btn btn-warning ms-5">Github repo</Link>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card mb-3">
                <Image src="/placeholder.jpg" class="card-img-top" width={1920} height={250} alt="..." />
                <div className="card-body text-center">
                <div className="mb-3 fw-bold text-white">Coming Soon</div>
                  <Link href="#" target="_blank" rel="noreferrer" className="btn btn-warning">Live link</Link>
                  <Link href="#" target="_blank" rel="noreferrer" className="btn btn-warning ms-5">Github repo</Link>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card mb-3">
                <Image src="/placeholder.jpg" class="card-img-top" width={1920} height={250} alt="..." />
                <div className="card-body text-center">
                <div className="mb-3 fw-bold text-white">Coming Soon</div>
                  <Link href="#" target="_blank" rel="noreferrer" className="btn btn-warning">Live link</Link>
                  <Link href="#" target="_blank" rel="noreferrer" className="btn btn-warning ms-5">Github repo</Link>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card mb-3">
                <Image src="/placeholder.jpg" class="card-img-top" width={1920} height={250} alt="..." />
                <div className="card-body text-center">
                <div className="mb-3 fw-bold text-white">Coming Soon</div>
                  <Link href="#" target="_blank" rel="noreferrer" className="btn btn-warning">Live link</Link>
                  <Link href="#" target="_blank" rel="noreferrer" className="btn btn-warning ms-5">Github repo</Link>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card mb-3">
                <Image src="/placeholder.jpg" class="card-img-top" width={1920} height={250} alt="..." />
                <div className="card-body text-center">
                <div className="mb-3 fw-bold text-white">Coming Soon</div>
                  <Link href="#" target="_blank" rel="noreferrer" className="btn btn-warning">Live link</Link>
                  <Link href="#" target="_blank" rel="noreferrer" className="btn btn-warning ms-5">Github repo</Link>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card mb-3">
                <Image src="/placeholder.jpg" class="card-img-top" width={1920} height={250} alt="..." />
                <div className="card-body text-center">
                <div className="mb-3 fw-bold text-white">Coming Soon</div>
                  <Link href="#" target="_blank" rel="noreferrer" className="btn btn-warning">Live link</Link>
                  <Link href="#" target="_blank" rel="noreferrer" className="btn btn-warning ms-5">Github repo</Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="soa" id="contact">
        <Contact/>
      </section>
    </>
  )
}
