import React, { Component, Fragment } from 'react';
import { withRouter, Route } from 'react-router';
import { connect } from 'react-redux';
import '../styles/Root.scss';
import { Header, Footer } from '../components';

import {
	CouponsContainer,
	ShopsContainer
} from './'

class RootContainer extends Component {
	constructor (props) {
		super(props);
	}
	render () {
		const {
			location: { pathname }
		} = this.props;
		return (
			<Fragment>
				<Header path={pathname} />
				<ShopsContainer />
				<CouponsContainer />
				<Footer />
			</Fragment>
		);
	}
}

export default withRouter(connect()(RootContainer));
