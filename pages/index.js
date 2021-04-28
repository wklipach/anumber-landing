import React from 'react'
import HeadComponent from '../src/components/HeadComponent'
import BodyComponent from '../src/components/BodyComponent'
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
        <HeadComponent /> 
        <BodyComponent/> 
      </div> 
    );
  }
}


export default MainComponent