import FeaturesTitle from '../components/Features/FeaturesTitle'
import FeaturesUl from '../components/Features/FeaturesUl'
import FeaturesImg from '../components/Features/FeaturesImg'
import FeaturesText from '../components/Features/FeaturesText'
import FeaturesData from '../components/Features/FeaturesData'

import features from './data/features'
import featurestext from './data/featurestext'
import featuresdata from './data/featuresdata'
import featurestitle from './data/featurestitle'

function SectionFeatures(props) {
    return (

        <section className="features">
        <div className="container">
          <FeaturesTitle head={featurestitle[0]} title={featurestitle[1]} />
            <div className="row" data-aos="fade-up">
            <FeaturesImg imgclass="col-md-5" imgsrc="./assets/img/features-1.svg" />
            <div className="col-md-7 pt-4">
              <FeaturesText title={mapperfeaturetext(1)} />
              <FeaturesUl mapper={mapper(1)} />
              <FeaturesData title={featuresdata[0]} />
            </div>
          </div>
  
          <div className="row" data-aos="fade-up">
            <FeaturesImg imgclass="col-md-5 order-1 order-md-2" imgsrc="./assets/img/features-2.svg" />
            <div className="col-md-7 pt-5 order-2 order-md-1">
              <FeaturesText title={mapperfeaturetext(2)} />
              <FeaturesUl mapper={mapper(2)} />
              <FeaturesData title={featuresdata[1]} />

            </div>
          </div>
  
          <div className="row" data-aos="fade-up">
            <FeaturesImg imgclass="col-md-5" imgsrc="./assets/img/features-3.svg" />
            <div className="col-md-7 pt-5">
              <FeaturesText title={mapperfeaturetext(3)} />
              <FeaturesUl mapper={mapper(3)} />
              <FeaturesData title={featuresdata[2]} />              
            </div>
          </div>
  
          <div className="row" data-aos="fade-up">
            <FeaturesImg imgclass="col-md-5 order-1 order-md-2" imgsrc="./assets/img/features-4.svg" />            
            <div className="col-md-7 pt-5 order-2 order-md-1">
              <FeaturesText title={mapperfeaturetext(4)} />
              <FeaturesUl mapper={mapper(4)} />
              <FeaturesData title={featuresdata[3]} />              
            </div>
          </div>
  
        </div>
      </section>
        
        )
  }


  function mapper(i) {
    return features.filter((el) => el.category == i )
  }

  function mapperfeaturetext(i) {
    return featurestext.filter((el) => el.category == i )[0]
  }

  export default SectionFeatures