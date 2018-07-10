import React, { Component, Fragment } from 'react';
import { CouponItem } from './items';
import { Tabs, TabLink, TabContent } from 'react-tabs-redux';

class Coupons extends Component {
	constructor (props) {
		super(props);
	}
	handleFilterGroupsChange = selected => {
		this.setState({ sitesFilter: selected });
	}
	render () {
		const { coupons, sitesFilter, shops, couponsActions: { getCoupon }, match: { url } } = this.props;
		return (
			<Fragment>
				<section id="coupons">
					<Tabs renderActiveTabContentOnly={true} className="container justify-content-center align-items-center mb-3">
						<TabLink to="popularTab" className="button coupon-menu mr-3" 
							activeClassName="coupon-menu-active" default>
								Популярные
						</TabLink>
						<TabLink to="newTab" className="button coupon-menu mr-3"
							activeClassName="coupon-menu-active">
								Новые
						</TabLink>
						<TabLink to="endingTab" className="button coupon-menu mr-3" 
							activeClassName="coupon-menu-active">
								Скоро закончатся
						</TabLink>
						<div className="container ">
							<TabContent for="popularTab">
								<div className="row d-flex flex-wrap justify-content-center">
									{
										coupons.sort((a,b) => a.Description > b.Description).map((item, key) =>
											sitesFilter.length !== 0
													? !sitesFilter.every(site => site.Name !== item.Site) &&
													<CouponItem
														key={key}
														coupon={item}
														url={url}
														site = {shops.filter(shop => item.Site == shop.Domain || item.Site == shop.Name)}
														onCouponClickAction={getCoupon}
													/>     
													: <CouponItem
														key={key}
														coupon={item}
														url={url}
														site = {shops.filter(shop => item.Site == shop.Domain || item.Site == shop.Name)}
														onCouponClickAction={getCoupon}
													/>
											)
										}
									</div>
								</TabContent>
								<TabContent for="newTab">
									<div className="row d-flex flex-wrap justify-content-center">
										{
											coupons.sort((a,b) => a.Code > b.Code).map((item, key) =>
												sitesFilter.length !== 0
													? !sitesFilter.every(site => site.Name !== item.Site) &&
													<CouponItem
														key={key}
														coupon={item}
														url={url}
														site = {shops.filter(shop => item.Site == shop.Domain || item.Site == shop.Name)}
														onCouponClickAction={getCoupon}
													/>
													: <CouponItem
														key={key}
														coupon={item}
														url={url}
														site = {shops.filter(shop => item.Site == shop.Domain || item.Site == shop.Name)}
														onCouponClickAction={getCoupon}
													/>
											)
										}
									</div>
								</TabContent>
								<TabContent for="endingTab">
									<div className="row d-flex flex-wrap justify-content-center">
										{
											coupons.sort((a,b)=>(new Date(a.Expires)) > (new Date(b.Expires))).map((item, key) =>
												sitesFilter.length !== 0
													? !sitesFilter.every(site => site.Name !== item.Site) &&
													<CouponItem
														key={key}
														coupon={item}
														url={url}
														site = {shops.filter(shop => item.Site == shop.Domain || item.Site == shop.Name)}
														onCouponClickAction={getCoupon}
													/>
													: <CouponItem
														key={key}
														coupon={item}
														url={url}
														site = {shops.filter(shop => item.Site == shop.Domain || item.Site == shop.Name)}
														onCouponClickAction={getCoupon}
													/>
											)
										}
									</div>
								</TabContent>
							</div>
						</Tabs>
				</section>
			</Fragment>
		);
	}
}

export default Coupons;