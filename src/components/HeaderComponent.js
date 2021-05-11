import React from 'react'
import MenuComponent from '../components/MenuComponent'

class HeaderComponent extends React.Component {
    constructor(props) {
          super(props);
      }

    // header-scrolled
    render() {
      let headerscrolled = "";
      
      if (this.props.headerscrolled == true) {
          headerscrolled = "fixed-top d-flex align-items-center header-transparent header-scrolled";
      } else {
          headerscrolled = "fixed-top d-flex align-items-center header-transparent";
      }

      return (
        <header id="header" className={headerscrolled}>
        <div className="container d-flex justify-content-between align-items-center">


          <div className="logo">

              <img src="./assets/img/anumber_logo.png" className="logo" alt="Логотип"></img>

            <h1 className="text-light"><a href="index.html"><span>A-Number Software</span></a></h1>
          </div>
    
          <nav id="navbar" className="navbar">
            <MenuComponent />
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
      );
    }
  }

  export default HeaderComponent