function FeaturesData(props) {

    if (props.title !== "") {
            return (
                <p>
                    {props.title}
                </p>
            )
    } else {
        return null
    }

  }
  export default FeaturesData