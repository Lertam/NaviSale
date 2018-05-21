import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { shopsActions } from '../actions'
import { Shops } from '../components'

class ShopsContainer extends Component {
  constructor (props) {
    super(props)
  }
  componentDidMount () {
    const { shopsActions: { getShops } } = this.props
    getShops()
  }
  render () {
    const { shops, meta, shopsActions, match } = this.props
    return <Shops
      shops={shops.set}
      meta={meta}
      shopsActions={shopsActions}
      match={match}
      />
  }
}

const mapStateToProps = state => ({
  shops: state.shops
})
const mapDispatchToProps = dispatch => ({
  shopsActions: bindActionCreators(shopsActions, dispatch)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShopsContainer))
