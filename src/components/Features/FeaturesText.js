function FeaturesText(props) {

    return (
        <div>
                <h3>{props.title.h3title}</h3>
                <p className="font-italic">
                    {props.title.text}
                </p>
        </div>
    )

  }

  export default FeaturesText