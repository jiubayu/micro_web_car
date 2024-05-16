import React from 'react'
import './index.scss'

import observer from '../../../../assets/observer.png'

class VideoDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    const { navList } = this.state
    return (
      <div className="video-detail-container">
        <div className="video-detail-play">
          <img src="http://p3-sign.toutiaoimg.com/motor-article-img/2b36b06bd1b44dc598548eeae9e6c3cf~tplv-shrink:1280:578.jpeg?_iz=97245&from=post&lk3s=06827d14&x-expires=1723161600&x-signature=g%2BP20x7Bdy5D85aEj1PVv3%2FhKgg%3D" alt=""/>
        </div>

        <div className="video-detail-title">
          思域还是昂克赛拉？老编辑来作一次“不冲动”的选择思域还是昂克赛拉？老编辑来作一次“不冲动”的选择
        </div>

        <div className="video-detail-observer">
          <img src={observer} alt=""/>
          <span>4.9w</span>
          <span>导购</span>
          <span>2020-02-02 00:00:00</span>
        </div>

        <div className="video-detail-prompt">
          谈起最能激发“肾上腺素”的十万级紧凑型轿车，就绝对绕不开思域与昂克赛拉——优雅运动的线条总能与年轻人意气相投。
        </div>
      </div>
    )
  }
}

export default VideoDetail
