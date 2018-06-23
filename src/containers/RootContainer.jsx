import React, { Component, Fragment } from 'react'
import { withRouter, Route } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import '../styles/Root.scss'
import { Header, Footer } from '../components'

import {
  CouponContainer,
  CouponsContainer,
  ShopContainer,
  ShopsContainer
} from './'

class RootContainer extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    const {
      coupons, shops, meta, location: { pathname }
    } = this.props
    return (
      <Fragment>
        <Header path={pathname} />
        <div className="category__filter">
          <ShopsContainer/>
        </div>
        <div className="contentWrapper">
          <CouponsContainer/>
          {/*<Route path="/coupons" component={CouponsContainer} />*/}
          {/*<Route path="/shops" component={ShopsContainer} />*/}
        </div>
        <Footer />
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  meta: state.meta
})
// const mapDispatchToProps = dispatch => ({
//   couponActions: bindActionCreators(couponsActions, dispatch),
// })

export default withRouter(connect(mapStateToProps)(RootContainer))
