import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return ( 
        <footer className="container-fluid">
            <div className="ms-5 me-5 row">
                <hr className="text-white"/>
                <div className="col-md-10 text-start">
                    <p className="text-white fw-bold">Gabriel <span className="lastName">Dayot.</span></p>
                </div>
                <div className="col-md-2 ps-3 d-none d-sm-block text-end text-white">
                    <a className="atag" target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=100088506030945"> <FontAwesomeIcon icon={faFacebook} className="ps-2" width="30px" /> </a>
                    <a className="atag" target="_blank" rel="noreferrer" href="https://github.com/AloSamaaa"> <FontAwesomeIcon icon={faLinkedin} className="ps-2" width="30px" /> </a>
                    <a className="atag" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/gabriel-dayot-6a60071b2/"> <FontAwesomeIcon icon={faGithub} className="ps-2" width="30px" /> </a>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;