import React from 'react'
import HeaderComponent from '../components/HeaderComponent' 
import SectionTop from '../components/SectionTop' 
import MainComponent from '../components/MainComponent' 

class BodyComponent extends React.Component {
    constructor(props) {
      super(props);
    }
 
    render() {
      return (
          <div>
            <HeaderComponent headerscrolled = {this.props.headerscrolled} />
            <SectionTop />
            <MainComponent />            
          </div>  
      );
    }
  }


  export default BodyComponent
