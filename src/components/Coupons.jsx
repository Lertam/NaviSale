import React, { Component, Fragment } from 'react'
import { Route } from 'react-router'
import { Filters } from './'
import '../styles/Coupons.scss'
import '../styles/Filters.scss'
import { CouponItem } from './items'
import { CouponContainer } from '../containers'
import nike from '../styles/images/logo__nike.png'

class Coupons extends Component {
  constructor (props) {
    super(props)
    this.state = {
      sitesFilter: []
    }
  }
  handleFilterGroupsChange = selected => {
    this.setState({ sitesFilter: selected })
  }
  render () {
    const { coupons, shops, couponsActions: { getCoupon }, match: { url } } = this.props
    const { sitesFilter } = this.state
    console.log(this.props)
    return (
      <Fragment>
        <div className="filters__sites-coupons">

        <div className='coupons'>
          {/*{*/}
            {/*coupons.map((item, key) =>*/}
              {/*sitesFilter.length !== 0*/}
              {/*? !sitesFilter.every(site => site.Name !== item.Site) &&*/}
                {/*<CouponItem*/}
                  {/*key={key}*/}
                  {/*coupon={item}*/}
                  {/*url={url}*/}
                  {/*onCouponClickAction={getCoupon}*/}
                  {/*/>*/}
              {/*: <CouponItem*/}
                  {/*key={key}*/}
                  {/*coupon={item}*/}
                  {/*url={url}*/}
                  {/*onCouponClickAction={getCoupon}*/}
                  {/*/>*/}
            {/*)*/}
          {/*}*/}
        </div>
        </div>
        <Route path={url + '/:couponId'} component={CouponContainer} />
      </Fragment>
    )
  }
}

export default Coupons
