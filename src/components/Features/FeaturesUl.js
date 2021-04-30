function FeaturesUl(props) {

    console.log('!!!!!!!', props.mapper);

    let myString = '';
    for(let i = 0; i < props.mapper.length; i++){
        console.log(props.mapper[i]);
        myString = myString + '<li><i class="bi bi-check"></i>'+ props.mapper[i].lititle + '</li>'
      }

    console.log('myString=', myString);

    return (
        <ul dangerouslySetInnerHTML={{__html:myString}}></ul>
    )

  }

  export default FeaturesUl