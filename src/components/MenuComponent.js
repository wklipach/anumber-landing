import React from 'react'

class MenuComponent extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
                <ul>
                <li><a className="active " href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="portfolio.html">Portfolio</a></li>
                <li><a href="team.html">Team</a></li>
                <li><a href="blog.html">Blog</a></li>
                <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
                <ul>
                    <li><a href="#">Drop Down 1</a></li>
                    <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                    <ul>
                        <li><a href="#">Deep Drop Down 1</a></li>
                        <li><a href="#">Deep Drop Down 2</a></li>
                        <li><a href="#">Deep Drop Down 3</a></li>
                        <li><a href="#">Deep Drop Down 4</a></li>
                        <li><a href="#">Deep Drop Down 5</a></li>
                    </ul>
                    </li>
                    <li><a href="#">Drop Down 2</a></li>
                    <li><a href="#">Drop Down 3</a></li>
                    <li><a href="#">Drop Down 4</a></li>
                </ul>
                </li>
                <li><a href="contact.html">Contact Us</a></li>
            </ul>
        );
    }
  }
  
  export default MenuComponent