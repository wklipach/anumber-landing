import React from 'react'

class QuardComponent extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={this.props.delay}>
          <div className={this.props.classDiv}>
            <div className="icon"><i className={this.props.classI}></i></div>
            <h4 className="title"><a href="">{this.props.title}</a></h4>
            <p className="description">{this.props.description}</p>
          </div>
        </div>
        );
      }
  }
  
  export default QuardComponent