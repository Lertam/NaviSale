import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { couponsActions, shopsActions } from '../actions'
import { Shop } from '../components'

class CouponContainer extends Component {
  constructor (props) {
    super(props)
  }
  componentDidMount () {
    const { shopsActions: { getShop }, match: { params: { shopId } } } = this.props
    getShop(shopId)
  }
  render () {
    const { match: { url }, history: { push }, shops: { current } } = this.props
    return <Shop shop={current} url={url} />
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
