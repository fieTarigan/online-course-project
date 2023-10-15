import React from 'react'
import about1 from '../assets/about1.png'
import banner1 from '../assets/banner1.png'
import logo from '../assets/LOGO-0.png'
import logo1 from '../assets/LOGO-1.png'
import logo2 from '../assets/LOGO-2.png'
import logo3 from '../assets/LOGO-3.png'
import logo4 from '../assets/LOGO-4.png'
import logo5 from '../assets/LOGO-5.png'
import logo6 from '../assets/LOGO-6.png'
import logo7 from '../assets/LOGO-7.png'
import gallery from '../assets/Gallery.png'

const AboutPage = () => {
  return (
    <div className='p-5'>
      <section id='hero' className='hero pb-5'>
        <div class="row gy-4 align-items-stretch justify-content-between features-item mt-5">
          <div class="col-lg-5 d-flex justify-content-center flex-column">
            <h1 className='years'>2022-2023</h1>
            <h2 className='bold-text'>We share knowledge<br /> with the world</h2>
            <p>
              Interdum et malesuada fames ac ante ipsum primis in <br />faucibus. Praesent fermentum quam mauris. Fusce<br /> tempor et augue a aliquet. Donec non ipsum non risus<br /> egestas tincidunt at vitae nulla.
            </p>
          </div>
          <div class="col-lg-6 d-flex align-items-center features-img-bg" data-aos="zoom-out">
            <img src={about1} class="img-fluid" alt="" />
          </div>
        </div>
      </section>

      {/* BRANCHES */}
      <section id='about' className='about pt-5'>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className=" align-items-xl-center gy-5">
            <div className="col-xl-7 content">
              <h2>We Just keep growing with 6.3k Companies</h2>
              <p>Nullam egestas tellus at enim ornare tristique.<br /> Class aptent taciti sociosqu ad litora torquent</p>
            </div>

            <div className="col-xl-7">
              <div className="row gy-4 icon-boxes">
                <div className="col-md-12" >
                  <div className="icon-box">
                    <div className="sponsor-logos" style={{ display: 'flex', alignItems: 'center' }}>
                      <img src={logo} alt="Netflix" style={{ width: '305px', height: 'auto' }} />
                      <img src={logo1} alt="YouTube" style={{ width: '305px', height: 'auto' }} />
                      <img src={logo2} alt="Google" style={{ width: '305px', height: 'auto' }} />
                      <img src={logo3} alt="Lenovo" style={{ width: '305px', height: 'auto' }} />
                    </div>
                    <div className="sponsor-logos" style={{ display: 'flex', alignItems: 'center' }}>
                      <img src={logo4} alt="Slack" style={{ width: '305px', height: 'auto' }} />
                      <img src={logo5} alt="Verizon" style={{ width: '305px', height: 'auto' }} />
                      <img src={logo6} alt="Lexmark" style={{ width: '305px', height: 'auto' }} />
                      <img src={logo7} alt="Microsoft" style={{ width: '305px', height: 'auto' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Banner */}
            <section id='hero' className='hero pb-5' style={{ backgroundColor: '#FFEEE8' }}>
              <div className="container">
                <div className="row gy-4 align-items-stretch justify-content-between features-item mt-5">
                  <div className="col-lg-6 d-flex align-items-center features-img-bg" data-aos="zoom-out">
                    <img src={banner1} class="img-fluid" alt="" />
                  </div>
                  <div class="col-lg-5 d-flex justify-content-center flex-column">
                    <h5 className='semi-text' style={{ color: '#FF6636' }}>OUR ONE BILLION MISSION</h5>
                    <h2 className='bold-text pb-2'>Our one billion mission sounds bold, We agree.</h2>
                    <p>
                      "We cannot solve our problems with the same thinking we used when we created them."—Albert Einstein. Institutions are slow to change. Committees are where good ideas and innovative thinking go to die. Choose agility over dogma. Embrace and drive change. We need to wipe the slate clean and begin with bold, radical thinking.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Gallery */}
            <section id='hero' className='hero pb-5'>
              <div class="row gy-4 align-items-stretch justify-content-between features-item mt-5">
                <div class="col-lg-5 d-flex justify-content-center flex-column">
                  <h5 className='semi-text' style={{ color: '#FF6636' }}>OUR GALLERY</h5>
                  <h2 className='bold-text'>We’ve been here<br /> almost few years</h2>
                  <p>
                    Fusce lobortis leo augue, sit amet tristique nisi commodo in. Aliquam ac libero quis tellus venenatis imperdiet. Sed sed nunc libero. Curabitur in urna ligula.  torquent per conubia nostra.
                  </p>
                </div>
                <div class="col-lg-6 d-flex align-items-center features-img-bg" data-aos="zoom-out">
                  <img src={gallery} class="img-fluid" alt="gallery" style={{ width: '1200px', height: 'auto' }} />
                </div>
              </div>
            </section>


          </div>
        </div>
      </section>

    </div>
  );
}

export default AboutPage