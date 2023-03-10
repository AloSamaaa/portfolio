import Image from 'next/image';

const about = () => {
    return ( 
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
     );
}
 
export default about;