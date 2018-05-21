import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { couponsActions, shopsActions } from '../actions'
import { Coupon } from '../components'

class CouponContainer extends Component {
  constructor (props) {
    super(props)
  }
  componentDidMount () {
    const { couponsActions: { getCoupon }, match: { params: { couponId } } } = this.props
    getCoupon(couponId)
  }
  render () {
    const { match, history: { push }, coupons: { current, currentRequest } } = this.props
    return <Coupon
      match={match}
      historyPush={push}
      coupon={current}
      requesting={currentRequest}
      />
  }
}

const mapStateToProps = state => ({
  coupons: state.coupons,
  shops: state.shops,
  meta: state.meta
})
const mapDispatchToProps = dispatch => ({
  couponsActions: bindActionCreators(couponsActions, dispatch),
  shopsActions: bindActionCreators(shopsActions, dispatch)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CouponContainer))
