import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { shopsActions, couponsActions } from '../actions'
import { Shops } from '../components'

class ShopsContainer extends Component {
  constructor (props) {
    super(props)
  }
  componentDidMount () {
    const { shopsActions: { getShops, getCategories } } = this.props
    getShops()
    getCategories()
  }
  render () {
    const { shops, categories, meta, shopsActions, match, couponsActions : { applyFilter } } = this.props
    return <Shops
      shops={shops.set}
      categories={categories.set}
      meta={meta}
      shopsActions={shopsActions}
      match={match}
      onSitesChange={applyFilter}
      />
  }
}

const mapStateToProps = state => ({
  shops: state.shops,
  categories: state.categories
})
const mapDispatchToProps = dispatch => ({
  shopsActions: bindActionCreators(shopsActions, dispatch),
  couponsActions: bindActionCreators(couponsActions, dispatch)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShopsContainer))
