
function WhyUsBlock(props) {
    return (
            <div className="icon-box">
                <div className="icon"><i className={props.usclass}></i></div>
                <h4 className="title"><a href="">{props.title}</a></h4>
                <p className="description">{props.description}</p>
            </div>
        )
  }

  export default WhyUsBlock