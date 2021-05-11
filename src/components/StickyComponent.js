import  { useEffect } from 'react';
function StickyComponent(props) {

   return (
       <a href="#" className="back-to-top d-flex align-items-center justify-content-center active">
          <i className="bi bi-arrow-up-short"></i>
       </a>   
  )
  }

  function handleScroll(event) {
   let scrollTop = event.srcElement.body.scrollTop
   console.log('scrollTop', scrollTop)

   //    itemTranslate = Math.min(0, scrollTop/3 - 60);
   //this.setState({
   //  transform: itemTranslate
   //});
}

  export default StickyComponent