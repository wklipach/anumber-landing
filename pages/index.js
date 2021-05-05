import React from 'react'
import HeadComponent from '../src/components/HeadComponent'
import BodyComponent from '../src/components/BodyComponent'
import FooterComponent from '../src/components/FooterComponent'
import StickyComponent from '../src/components/StickyComponent'
import AOS from 'aos'; 
import "aos/dist/aos.css";

class MainComponent extends React.Component {
  constructor(props) {
    super(props);
  
  }

  componentDidMount() {
    AOS.init();
  }

  render() {
    return (
      <div>
        <HeadComponent /> 
        <BodyComponent/> 
        <FooterComponent />
        <StickyComponent />
      </div> 
    );
  }
}


export default MainComponent