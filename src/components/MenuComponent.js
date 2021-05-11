import React from 'react'

class MenuComponent extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (


                <ul>
                <li><a className="active " href="index.html">Home</a></li>
                <li><a href="about.html">О нас</a></li>
                <li><a href="portfolio.html">Портфолио</a></li>
                <li><a href="team.html">Команда</a></li>
                <li><a href="contact.html">Контакты</a></li>
            </ul>
        );
    }
  }
  
  export default MenuComponent