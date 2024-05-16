import React from 'react'
import './index.scss'

class InformationLastCar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <div className="information-last-car">
        <div className="information-last-car-detail">
          <div className="information-last-car-img">
            <img src="http://p3-sign.toutiaoimg.com/motor-article-img/2b36b06bd1b44dc598548eeae9e6c3cf~tplv-shrink:1280:578.jpeg?_iz=97245&from=post&lk3s=06827d14&x-expires=1723161600&x-signature=g%2BP20x7Bdy5D85aEj1PVv3%2FhKgg%3D" alt=""/>
          </div>
          <div className="information-last-car-price">
            <div>高尔夫</div>
            <div>26.98-55.44万</div>
          </div>
        </div>

        <div className="information-last-car-button">
          询底价
        </div>
      </div>
    )
  }
}

export default InformationLastCar
