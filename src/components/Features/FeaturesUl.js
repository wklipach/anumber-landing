function FeaturesUl(props) {

    let myString = '';
    for(let i = 0; i < props.mapper.length; i++){
        myString = myString + '<li><i class="bi bi-check"></i>'+ props.mapper[i].lititle + '</li>'
      }
      
    return (
        <ul dangerouslySetInnerHTML={{__html:myString}}></ul>
    )

  }

  export default FeaturesUl