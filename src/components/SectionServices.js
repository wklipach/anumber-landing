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