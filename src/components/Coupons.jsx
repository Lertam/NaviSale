import React, { Component, Fragment } from 'react'
import { Route } from 'react-router'
import { Filters } from './'
import '../styles/Coupons.scss'

import { CouponItem } from './items'
import { CouponContainer } from '../containers'

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
    return (
      <Fragment>
        <Filters set={shops} caption={'по сайтам'} onGroupsChange={this.handleFilterGroupsChange} />
        <div className='coupons'>
          {
            coupons.map((item, key) =>
              sitesFilter.length !== 0
              ? !sitesFilter.every(site => site.Name !== item.Site) &&
                <CouponItem
                  key={key}
                  coupon={item}
                  url={url}
                  onCouponClickAction={getCoupon}
                  />
              : <CouponItem
                  key={key}
                  coupon={item}
                  url={url}
                  onCouponClickAction={getCoupon}
                  />
            )
          }
        </div>
        <Route path={url + '/:couponId'} component={CouponContainer} />
      </Fragment>
    )
  }
}

export default Coupons
