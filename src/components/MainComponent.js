import React from 'react'
import SectionServices from '../components/SectionServices'
import SectionWhyus from '../components/SectionWhyus'

class MainComponent extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <main id="main">
           <SectionServices />
           <SectionWhyus />
        </main>
        );
    }
  }
  
  export default MainComponent