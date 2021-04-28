import React from 'react'
import QuardComponent from '../components/QuardComponent'

class SectionServices extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <section className="services">
        <div className="container">
  
          <div className="row">
            <QuardComponent delay = "100" 
                            classDiv = "icon-box icon-box-pink" 
                            classI = "bx bxl-dribbble" 
                            title = "Lorem Ipsum"
                            description = "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident" />
  
            <QuardComponent delay = "100" 
                            classDiv = "icon-box icon-box-cyan" 
                            classI = "bx bx-file" 
                            title = "Sed ut perspiciatis"
                            description = "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur" />

  
            <QuardComponent delay = "200" 
                            classDiv = "icon-box icon-box-green" 
                            classI = "bx bx-tachometer" 
                            title = "Magni Dolores"
                            description = "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" />

  
            <QuardComponent delay = "200" 
                            classDiv = "icon-box icon-box-blue" 
                            classI = "bx bx-world" 
                            title = "Nemo Enim"
                            description = "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque" />
          </div>
  
        </div>
      </section>
      );
    }
  }
  
  export default SectionServices


  /*

            <div className="row">
            <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up">
              <div className="icon-box icon-box-pink">
                <div className="icon"><i className="bx bxl-dribbble"></i></div>
                <h4 className="title"><a href="">Lorem Ipsum</a></h4>
                <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
              </div>
            </div>
  


            <div class="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
              <div class="icon-box icon-box-cyan">
                <div class="icon"><i class="bx bx-file"></i></div>
                <h4 class="title"><a href="">Sed ut perspiciatis</a></h4>
                <p class="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
              </div>
            </div>
  
            <div class="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
              <div class="icon-box icon-box-green">
                <div class="icon"><i class="bx bx-tachometer"></i></div>
                <h4 class="title"><a href="">Magni Dolores</a></h4>
                <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
              </div>
            </div>
  
            <div class="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
              <div class="icon-box icon-box-blue">
                <div class="icon"><i class="bx bx-world"></i></div>
                <h4 class="title"><a href="">Nemo Enim</a></h4>
                <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
              </div>
            </div>

            // npm install --save-dev @iconify/react @iconify-icons/bx
import { Icon, InlineIcon } from '@iconify/react';
import bxlDribbble from '@iconify-icons/bx/bxl-dribbble';


  */