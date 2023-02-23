import Image from 'next/image';

const Projects = () => {
    return (
        <section className="soa">
            <div className="container mt-5 gx-5">
                <div className="row">
                    <div className="col-12 text-center mb-5">
                        <h3 className="lastName">Projects</h3>
                    </div>

                    <div className="col-md-4">
                        <div className="card card1">
                            <Image src="/gamefo.jpg" class="card-img-top" width={1920} height={250} alt="..." />
                            <div className="card-body text-center">
                                <a href="https://alosamaa.vercel.app/" target="_blank" rel="noreferrer" className="btn button1">Live link</a>
                                <a href="https://github.com/AloSamaaa/Major-project-1" target="_blank" rel="noreferrer" className="btn button1 ms-5">Github repo</a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-4">
                        <div className="card card1">
                            <Image src="/resortvillas.jpg" class="card-img-top" width={1920} height={250} alt="..." />
                            <div className="card-body text-center">
                                <a href="https://resortvillas.vercel.app/" target="_blank" rel="noreferrer" className="btn button1">Live link</a>
                                <a href="https://github.com/WD29Group/resortvillas" target="_blank" rel="noreferrer" className="btn button1 ms-5">Github repo</a>
                            </div>
                        </div>
                    </div>  

                    <div className="col-md-4">
                        <div className="card card1">
                            <Image src="/dreamfields.jpg" class="card-img-top" width={1920} height={250} alt="..." />
                            <div className="card-body text-center">
                                <a href="https://alosamaa.vercel.app/" target="_blank" rel="noreferrer" className="btn button1">Live link</a>
                                <a href="https://github.com/AloSamaaa/Major-project-1" target="_blank" rel="noreferrer" className="btn button1 ms-5">Github repo</a>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        </section>
    );
}
export default Projects;
