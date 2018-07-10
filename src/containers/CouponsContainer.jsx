import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { couponsActions, shopsActions } from '../actions';
import { Coupons } from '../components';

class CouponsContainer extends Component {
	constructor (props) {
		super(props);
	}
	componentDidMount () {
		const { couponsActions: { getCoupons }, shopsActions: { getShops } } = this.props;
		getCoupons();
		getShops();
	}
	render () {
		const { coupons, shops, meta, couponsActions, shopsActions, match } = this.props;
		return <Coupons
			coupons={coupons.set}
			sitesFilter={coupons.filter}
			shops={shops.set}
			meta={meta}
			couponsActions={couponsActions}
			shopsActions={shopsActions}
			match={match}
		/>
	}
}

const mapStateToProps = state => ({
	coupons: state.coupons,
	shops: state.shops,
	meta: state.meta
});
const mapDispatchToProps = dispatch => ({
	couponsActions: bindActionCreators(couponsActions, dispatch),
	shopsActions: bindActionCreators(shopsActions, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CouponsContainer));