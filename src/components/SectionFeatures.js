import FeaturesTitle from '../components/Features/FeaturesTitle'
import FeaturesUl from '../components/Features/FeaturesUl'
import features from './data/features'

function SectionFeatures(props) {
    return (

        <section className="features">
        <div className="container">

          <FeaturesTitle head="Features" title="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas." />
  
          <div className="row" data-aos="fade-up">
            <div className="col-md-5">
              <img src="./assets/img/features-1.svg" className="img-fluid" alt="" />
            </div>
            <div className="col-md-7 pt-4">
              <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
              <p className="font-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </p>
               <FeaturesUl mapper={mapper(1)} />

            </div>
          </div>
  
          <div className="row" data-aos="fade-up">
            <div className="col-md-5 order-1 order-md-2">
              <img src="./assets/img/features-2.svg" className="img-fluid" alt="" />
            </div>
            <div className="col-md-7 pt-5 order-2 order-md-1">
              <h3>Corporis temporibus maiores provident</h3>
              <p className="font-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </p>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum
              </p>
              <FeaturesUl mapper={mapper(2)} />
            </div>
          </div>
  
          <div className="row" data-aos="fade-up">
            <div className="col-md-5">
              <img src="./assets/img/features-3.svg" className="img-fluid" alt="" />
            </div>
            <div className="col-md-7 pt-5">
              <h3>Sunt consequatur ad ut est nulla consectetur reiciendis animi voluptas</h3>
              <p>Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod. Sunt saepe odit aut quia voluptatem hic voluptas dolor doloremque.</p>
              <FeaturesUl mapper={mapper(3)} />
            </div>
          </div>
  
          <div className="row" data-aos="fade-up">
            <div className="col-md-5 order-1 order-md-2">
              <img src="./assets/img/features-4.svg" className="img-fluid" alt="" />
            </div>
            <div className="col-md-7 pt-5 order-2 order-md-1">
              <h3>Quas et necessitatibus eaque impedit ipsum animi consequatur incidunt in</h3>
              <p className="font-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </p>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum
              </p>
              <FeaturesUl mapper={mapper(4)} />
            </div>
          </div>
  
        </div>
      </section>
        
        )
  }


  function mapper(i) {
    return features.filter((el) => el.category == i )
  }



  export default SectionFeatures