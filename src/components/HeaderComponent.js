import React from 'react'
import MenuComponent from '../components/MenuComponent'

class HeaderComponent extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <header id="header" className="fixed-top d-flex align-items-center header-transparent">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="logo">
            <h1 className="text-light"><a href="index.html"><span>Moderna</span></a></h1>
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