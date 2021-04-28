import React from 'react'

class SectionTop extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <section id="hero-no-slider" className="d-flex justify-cntent-center align-items-center">
          <div className="container position-relative" data-aos="fade-up" data-aos-delay="100">
            <div className="row justify-content-center">
              <div className="col-xl-8">
                <h2>Welcome to Moderna</h2>
                <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                <a href="" className="btn-get-started ">Read More</a>
              </div>
            </div>
          </div>
        </section>
        );
    }
  }
  
  export default SectionTop