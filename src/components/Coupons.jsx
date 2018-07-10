import React, { Component, Fragment } from 'react'
import { Route } from 'react-router'
import { Filters } from './'
// import '../styles/Coupons.scss'
// import '../styles/Filters.scss'
import { CouponItem } from './items'
import { CouponContainer } from '../containers'
import { Tabs, TabLink, TabContent } from 'react-tabs-redux';

class Coupons extends Component {
  constructor (props) {
    super(props)
  }
  handleFilterGroupsChange = selected => {
    this.setState({ sitesFilter: selected })
  }
  render () {
    const { coupons, sitesFilter, shops, couponsActions: { getCoupon }, match: { url } } = this.props;
    console.log(coupons);
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
        {/* <div className="filters__sites-coupons"> */}
          {/* <Filters set={shops} uniq={'coupon__filter'}  onGroupsChange={this.handleFilterGroupsChange} /> */}
          {/* <div className="coupons__container">
            <div className="coupons__wrapper">
            <Tabs activeLinkStyle={styles.activeLinkStyle} visibleTabStyle={styles.visibleTabStyle} style={styles.tabs}>
              <div style={styles.links}>
                <TabLink to="popularTab" default style={styles.tabLink}>Популярные</TabLink>
                <TabLink to="newTab"  style={styles.tabLink}>Новые</TabLink>
                <TabLink to="endingTab" style={styles.tabLink}>Скоро закончатся</TabLink>
              </div>
              <div style={styles.content}>
                <TabContent for="popularTab">
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
                </TabContent>
                <TabContent for="newTab">
                  <h2>newTab content</h2>
                  <div>¯\_(ツ)_/¯</div>
                </TabContent>
                <TabContent for="endingTab">
                  <h2>endingTab content</h2>
                  <div>(╯°□°）╯︵ ┻━┻)</div>
                </TabContent>
              </div>
            </Tabs>
            </div>
          </div>

        </div> */}
        {/* <Route path={url + '/:couponId'} component={CouponContainer} /> */}
      </Fragment>
    )
  }
}

export default Coupons
