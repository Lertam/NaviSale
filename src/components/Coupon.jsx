import React, { Component, Fragment } from 'react'
import { Loader } from './'
import '../styles/Coupon.scss'

class Coupon extends Component {
  constructor (props) {
    super(props)
  }
  handleWrapperClick = () => {
    const { match: { path }, historyPush, previousUrl } = this.props
    historyPush(path.replace(previousUrl || '/:couponId', ''))
  }
  handleCodeCopyClick = e => {
    e.stopPropagation()
    const copied = document.getElementById('promocode')
    copied.select()
    document.execCommand('copy')
  }
  renderCouponBody () {
    const { coupon } = this.props
    console.log(coupon);
    return (
      <Fragment>
        <p className='header'>{ coupon.Site }</p>
        <div className='descriptionWrapper'>
          <span>{ coupon.Description }</span>
        </div>
        <div className='codeWrapper'>
          <p>{ coupon.Code }</p>
          <div><a href={`http://${coupon.Site}`}>Перейти на сайт</a></div>
        </div>
      </Fragment>
    )
  }
  render () {
    const { coupon, requesting } = this.props
    return (
      <div className='couponContainer' onClick={this.handleWrapperClick}>
        <div className={`coupon`}>
          { requesting ? <Loader /> : this.renderCouponBody() }
        </div>
      </div>
    )
  }
}

export default Coupon
