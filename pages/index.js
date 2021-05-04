import React from 'react'
import HeadComponent from '../src/components/HeadComponent'
import BodyComponent from '../src/components/BodyComponent'
import FooterComponent from '../src/components/FooterComponent'
import AOS from 'aos'; 
import "aos/dist/aos.css";

class MainComponent extends React.Component {
  constructor(props) {
    super(props);
/*    
    this.state = {
      filterText: '',
      inStockOnly: false
    };
*/    
  }

  componentDidMount() {
    AOS.init();
  }

  render() {
    return (
      <div>
        <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>    
        <HeadComponent /> 
        <BodyComponent/> 
        <FooterComponent />
      </div> 
    );
  }
}


export default MainComponent