import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Filters } from './'
import '../../styles/NewStyles/CouponItem.scss'
import nike from '../../styles/images/logo__nike.png'
import iconPeople from '../../styles/images/people.svg'

class CouponItem extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    const { coupon, url, to } = this.props
    return (
      <Link to={to || `${url}/${coupon.ID}`} className='couponItem'>

        <div className="card__coupon__container">

          <div className="coupon__wrapper">

            <div className="coupon__img-container">
              <img src={nike} alt=""/>
            </div>

            <div className="coupon__content-container">
              <h4 className="title__code">{ coupon.Description }</h4>
              <div className="data__promocode">
                <div className="days__wrapper">
                <div className="days">15 д. до окончания</div>
                </div>
                <div className="people__used">
                  <div className="amount__people">{coupon.UsedCount}</div>
                  <div className="svg__people"> <img src={iconPeople} alt=""/></div>
                </div>
              </div>

              <div className="contact__promo">
                <div className="discount__wrapper">
                  <div className="discount__sale">
                  <p>{coupon.Amount}</p>
                  </div>
                </div>
                <button className="get__code">
                  Открыть код
                </button>
              </div>
            </div>

          </div>

        </div>


        {/*<p className='site'>{ coupon.Site }</p>*/}
        {/*<div className='descriptionContainer'>*/}
          {/*<span>{ coupon.Description }</span>*/}
        {/*</div>*/}
        {/*{ coupon.Expires && <p className='expires'>купон действует до <br /><span>{ coupon.Expires }</span></p> }*/}
      </Link>
    )
  }
}

export default CouponItem
