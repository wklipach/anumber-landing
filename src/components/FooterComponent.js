import UsefulLinks from './Footer/UsefulLinks'
import ContactUs from './Footer/ContactUs'
import Copyright from './Footer/Copyright'
import Credits from './Footer/Credits'
import OurServices from './Footer/OurServices'
import AboutModerna from './Footer/AboutModerna'

function FooterComponent(props) {
    return (
<footer id="footer" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">

    <div className="footer-newsletter">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h4>Our Newsletter</h4>
            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
          </div>
          <div className="col-lg-6">
            <form action="" method="post">
              <input type="email" name="email" /><input type="submit" value="Subscribe" />
            </form>
          </div>
        </div>
      </div>
    </div>

    <div className="footer-top">
      <div className="container">
        <div className="row">
          <UsefulLinks />
          <OurServices />
          <ContactUs />
          <AboutModerna />
        </div>
      </div>
    </div>

    <div className="container">
      <Copyright />
      <Credits />
    </div>

  </footer>

  )
  }

  export default FooterComponent