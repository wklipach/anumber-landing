import React from 'react'
import SectionServices from '../components/SectionServices'
import SectionWhyus from '../components/SectionWhyus'
import SectionFeatures from '../components/SectionFeatures'

class MainComponent extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <main id="main">
           <SectionServices />
           <SectionWhyus />
           <SectionFeatures />
        </main>
        );
    }
  }
  
  export default MainComponent