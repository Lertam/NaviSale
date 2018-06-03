import React, { Component, Fragment } from 'react'
import { Loader } from './'
import '../styles/Coupon.scss'

class Coupon extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isCopied: false
    }
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
    this.setState({ isCopied: true })
  }
  renderCouponBody () {
    const { coupon } = this.props
    const { isCopied } = this.state
    return (
      <Fragment>
        <p className='header'>{ coupon.Site }</p>
        <div className='descriptionWrapper'>
          <span>{ coupon.Description }</span>
        </div>
        <div className='codeWrapper'>
          <p className='description'>Скопируйте этот промокод (для этого просто нажмите на него), перейдите на сайт и актирируйте его</p>
          <p className={`code ${isCopied ? 'copied' : null}`} onClick={this.handleCodeCopyClick}>{ isCopied ? 'СКОПИРОВАНО!' : coupon.Code }</p>
          <input id='promocode' value={ coupon.Code } type='text' />
          <div><a target="_blank" href={`http://${coupon.Site}`}>Перейти на сайт</a></div>
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
