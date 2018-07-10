import React, { Component, Fragment } from 'react'
import { Loader } from './'
// import '../styles/Coupon.scss'

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
    console.log(coupon)
    return (
      <Fragment>
        {/*<p className='header'>{ coupon.Site }</p>*/}
        {/*<div className='descriptionWrapper'>*/}
          {/*<span>{ coupon.Description }</span>*/}
        {/*</div>*/}
        {/*<div className='codeWrapper'>*/}
          {/*<p className='description'>Скопируйте этот промокод (для этого просто нажмите на него), перейдите на сайт и актирируйте его</p>*/}
          {/*<p className={`code ${isCopied ? 'copied' : null}`} onClick={this.handleCodeCopyClick}>{ isCopied ? 'СКОПИРОВАНО!' : coupon.Code }</p>*/}
          {/*<input id='promocode' value={ coupon.Code } type='text' />*/}
          {/*<div><a target="_blank" href={`http://${coupon.Site}`}>Перейти на сайт</a></div>*/}
        {/*</div>*/}

        <div className="cupon__component">
          <div className="cupon__wrapper">
            <div className="logotype__company">
              <img src="#" alt=""/>
            </div>

            <div className="content__promocode">
            <h3>{coupon.Site}</h3>
            <p>{coupon.Description}</p>
          </div>
          </div>
          <div className="code__wrapper">
            <p className={`code ${isCopied ? 'copied' : null}`} onClick={this.handleCodeCopyClick}>{ isCopied ? 'СКОПИРОВАНО!' : '' }</p>
            <div className="promocode___title">
              <p style={{  fontSize: '16px',
                color: 'rgb(32,25,27)',
                fontFamily: "Open Sans",
                textAlign: 'center'
           }}>Перейдите в магазин <a href={coupon.Site}>{coupon.Site}</a> <br/> и вставьте код в корзину</p>
            </div>

            <div className="code__copy">
              <div className="сopy__wrapper" style={{display: 'flex'}}>
              <div className="copy__input">
                <input id='promocode' value={ coupon.Code } type='text' />
              </div>
              <button onClick={this.handleCodeCopyClick} className="button__copy-code">Копировать</button>
            </div>
              <div className="to__website">
                <button className="button__to-website"><a target="_blank" href={`http://${coupon.Site}`}>Перейти на сайт</a></button>
              </div>
            </div>
          </div>
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
