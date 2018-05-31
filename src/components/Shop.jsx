import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Route } from 'react-router'

import { Loader } from './'
import '../styles/Shop.scss'
import '../styles/Coupons.scss'
import { CouponItem } from './items'
import { CouponContainer } from '../containers'

class Shop extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { shop, url } = this.props

    return (
      <div className='shopContainer'>
        <div className='shopInfo'>
          <a href={`http://${shop.Domain}`}className='name'>{ shop.Name }</a>
          <p className='delivery' dangerouslySetInnerHTML={{ __html: shop.DeliveryInfo }}></p>
        </div>
        <div className='coupons shop'>
          {
            shop.Promocodes && shop.Promocodes.length > 0 && shop.Promocodes.map((item, key) => <CouponItem key={key} to={`${url}/coupons/${item.ID}`} coupon={item}/>)
          }
          {
            shop.Promocodes && shop.Promocodes.length === 0 && (
              <div className='no_coupones'><p>Купоны для этого магазина скоро появятся</p></div>
            )
          }
        </div>
        <Route path={`${url}/coupons/:couponId`} component={CouponContainer} />
      </div>
    )
  }
}

export default Shop
