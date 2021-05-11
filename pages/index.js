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
    this.state = { stickyvisible: false, headerscrolled: false };
   }

  componentDidMount() {
    AOS.init({easing: 'ease-in-out',
              duration: 1000,
              once: true,
              mirror: false,
              delay: 0});

    window.addEventListener('scroll', this.handleScroll)              
  }


   componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
   }

  handleScroll = (e) => {
        if (window.scrollY > 100) {
          this.setState( { stickyvisible: true, headerscrolled: true });
        } else {
          this.setState( { stickyvisible: false, headerscrolled: false });
        }
  }


  render() {
    return (
      <div>
        <HeadComponent /> 
        <BodyComponent headerscrolled = {this.state.headerscrolled}  /> 
        <FooterComponent />
        <StickyComponent visible={this.state.stickyvisible} />
      </div> 
    );
  }
}
export default MainComponent