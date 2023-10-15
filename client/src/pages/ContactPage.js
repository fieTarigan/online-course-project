import React from 'react';
import contact_img1 from '../assets/contact_img1.png';
// import main_branch_image from '../assets/main_branch_image.png';
import branches1 from '../assets/branches1.png';
import branches2 from '../assets/branches2.png';
import branches3 from '../assets/branches3.png';
import branches4 from '../assets/branches4.png';

const ContactPage = () => {
  const locations = [
    {
      name: 'Los Angeles, California',
      city: '1702 Olympic Boulevard',
      address: 'Santa Monica, CA 90404',
      image: branches1,
    },
    {
      name: 'Tokyo, Japan',
      city: '901 N Pitt Str., Suite 170',
      address: 'Tokyo, VA 22314, Japan',
      image: branches2,
    },
    {
      name: 'Moscow, Russia',
      city: 'Anjeliersstraat 470H',
      address: '1015 NL Moscow, Russia',
      image: branches3,
    },
    {
      name: 'Mumbai, India',
      address: '36 East 20th St, 6th Floor',
      city: 'Mumbai, India',
      image: branches4,
    },

  ];
  return (
    <div className='p-5'>
      <section id='hero' className='hero container'>
        <div class="row gy-4 align-items-stretch justify-content-between features-item">
          <div class="col-lg-5 d-flex justify-content-center flex-column">
            <h2 className='bold-text'>Connect with Us</h2>
            <p>
              Want to chat? We’d love to hear from you! Get in<br /> touch with our Customer Success Team to inquire <br />about speaking events, advertising rates, or just<br /> say hello.
            </p>
            <button type="button" className="button-2 ">
              Send Email
            </button>
          </div>
          <div class="col-lg-6 d-flex align-items-center features-img-bg" data-aos="zoom-out">
            <img src={contact_img1} class="img-fluid" alt="" />
          </div>
        </div>
      </section>

      {/* BRANCHES */}
      <section id="contact" className="contact" >
        <div className="container section-title text-center pb-4 mt-5">
          <h2 className="bold-text">Our branches all over the world.</h2>
          <p>Phasellus sed quam eu eros faucibus cursus. Quisque mauris <br />urna, imperdiet id leo quis, luctus auctor nisi. </p>
        </div>

        <div className="container mt-5 text-center">
          <div className="row">
            {locations.map((location, index) => (
              <div key={index} className="col-md-3 mb-4">
                <div className="card bg-card border-0">
                  <img src={location.image} alt='branches' />
                  <div className="card-body">
                    <h5 className="card-title">{location.name}</h5>
                    <p className="card-text semi-text  pt-2 mb-1">{location.city}</p>
                    <p className="card-text semi-text mb-1">{location.address}</p>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CONTACT US */}
      <section id="contact" className="contact" >
        <div className="container section-title text-center" data-aos="fade-up">
          <h2 className="bold-text">Contact Us</h2>
          <p>Will you be in Los Angeles or any other branches any time soon? Stop by the office! We'd love to meet.</p>
        </div>
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-lg-6">
              <div className="row gy-4">
                <div className="col-md-6">
                  <div className="info-item" data-aos="fade" data-aos-delay="200">
                    <i className="bi bi-geo-alt"></i>
                    <h3>Address</h3>
                    <p>A108 Adam Street</p>
                    <p>New York, NY 535022</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-item" data-aos="fade" data-aos-delay="300">
                    <i className="bi bi-telephone"></i>
                    <h3>Call Us</h3>
                    <p>+1 5589 55488 55</p>
                    <p>+1 6678 254445 41</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-item" data-aos="fade" data-aos-delay="400">
                    <i className="bi bi-envelope"></i>
                    <h3>Email Us</h3>
                    <p>info@example.com</p>
                    <p>contact@example.com</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-item" data-aos="fade" data-aos-delay="500">
                    <i className="bi bi-clock"></i>
                    <h3>Open Hours</h3>
                    <p>Monday - Friday</p>
                    <p>9:00AM - 05:00PM</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <form action="forms" className="email-form" >
                <div className="row gy-4">
                  <div >
                    <h2>Get in Touch</h2>
                    <p>Feel free to contact us, we'd love to make new partners & friends.</p>
                  </div>
                  <div className="col-md-6">
                    <label className='pb-2'>First Name</label>
                    <input type="text" name="first-name" className="form-control" placeholder="First Name" required />
                  </div>
                  <div className="col-md-6">
                    <label className='pb-2'>Last Name</label>
                    <input type="text" name="last-name" className="form-control" placeholder="Last Name" required />
                  </div>
                  <div className="col-md-12">
                    <label className='pb-2'>Email</label>
                    <input type="email" className="form-control" name="email" placeholder="Email Address" required />
                  </div>
                  <div className="col-md-12">
                    <label className='pb-2'>Subject</label>
                    <input type="text" className="form-control" name="subject" placeholder="Message Subject" required />
                  </div>
                  <div className="col-md-12">
                    <label className='pb-2'>Message</label>
                    <textarea className="form-control" name="message" rows="6" placeholder="Message" required></textarea>
                  </div>
                  <div className="col-md-12 ">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">Your message has been sent. Thank you!</div>
                    <button type="submit">Send Message</button>
                  </div>


                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>

  );
}

export default ContactPage;
