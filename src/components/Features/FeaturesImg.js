function FeaturesImg(props) {
    return (
        <div className={props.imgclass}>
          <img src={props.imgsrc} className="img-fluid" alt="" />
        </div>
        )
  }

  export default FeaturesImg