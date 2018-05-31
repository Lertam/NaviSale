import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Filters } from './'
import '../../styles/CouponItem.scss'

class CouponItem extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    const { coupon, url, to } = this.props
    return (
      <Link to={to || `${url}/${coupon.ID}`} className='couponItem'>
        <p className='site'>{ coupon.Site }</p>
        <div className='descriptionContainer'>
          <span>{ coupon.Description }</span>
        </div>
        { coupon.Expires && <p className='expires'>купон действует до <br /><span>{ coupon.Expires }</span></p> }
      </Link>
    )
  }
}

export default CouponItem
