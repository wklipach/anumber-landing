
function WhyUsVideo(props) {
    return (
        <div className="col-lg-6 video-box">
            <img src={props.imgsrc} className="img-fluid" alt="" />
            <a href={props.videosrc} className="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a>
        </div>
        )
  }
  export default WhyUsVideo