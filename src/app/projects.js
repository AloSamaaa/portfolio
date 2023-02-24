import Image from 'next/image';
import Link from 'next/link'

const projects = () => {
    return ( 
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
     );
}
 
export default projects ;
