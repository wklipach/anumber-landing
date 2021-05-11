
function StickyComponent(props) {

   let classact = '';

   if (props.visible === true) {
      classact = "back-to-top d-flex align-items-center justify-content-center active";
   } else {
      classact = "back-to-top d-flex align-items-center justify-content-center";
   }
         return (
            <a href="#" className={classact}>
               <i className="bi bi-arrow-up-short"></i>
            </a>
         )
  }


  export default StickyComponent