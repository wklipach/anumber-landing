import React from 'react'

class MenuComponent extends React.Component {
    constructor(props) {
      super(props);
    }

 
    render() {
      return (
                <ul>
                <li><a className="active" href="#">Home</a></li> 
                <li><a href="#WhyUs">О нас</a></li>
                <li><a href="#features">Портфолио</a></li>
                <li><a href="#SectionServices">Команда</a></li>
                <li><a href="#footer">Контакты</a></li>
            </ul>
        );
    }
  }

  // <li><a className="active" href="/">Home</a></li>
  export default MenuComponent