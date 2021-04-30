import React from 'react'
import WhyUsBlock from '../components/Whyus/WhyUsBlock'
import WhyUsVideo from '../components/Whyus/WhyUsVideo'

class SectionWhyus extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <section className="why-us section-bg" data-aos="fade-up" date-aos-delay="200">
        <div className="container">
  
        <div className="row">

          <WhyUsVideo imgsrc="./assets/img/why-us.jpg" videosrc="https://www.youtube.com/watch?v=jDDaplaOz7Q" />

          <div className="col-lg-6 d-flex flex-column justify-content-center p-5">

              <WhyUsBlock usclass="bx bx-fingerprint" 
                          title="Lorem Ipsum" 
                          description="Voluptatum deleniti atque corrupti quos dolores et quas molestias 
                                      excepturi sint occaecati cupiditate non provident" />

              <WhyUsBlock usclass="bx bx-gift" 
                          title="Nemo Enim" 
                          description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium 
                                      voluptatum deleniti atque" />
          </div>
        </div>


        </div>
        </section>
      );
    }
  }
  
  export default SectionWhyus









