import React, { Component, Fragment } from 'react'
import { Route } from 'react-router'
import { Filters } from './'
import '../styles/Coupons.scss'
import '../styles/Filters.scss'
import { CouponItem } from './items'
import { CouponContainer } from '../containers'
import { Tabs, TabLink, TabContent } from 'react-tabs-redux';
import nike from '../styles/images/logo__nike.png'
import '../styles/NewStyles/Coupons.scss'

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
    const { coupons, shops, couponsActions: { getCoupon }, match: { url } } = this.props;
    const { sitesFilter } = this.state;
    const styles = {
      tabs: {
        width: '400px',
        display: 'inline-block',
        marginRight: '30px',
        verticalAlign: 'top'
      },
      links: {
        margin: 0,
        padding: 0
      },
      tabLink: {
        margin: '7px',
        cursor: 'pointer',
        padding: '11px',
        display: 'inline-block',
        borderRadius: '3px',
        backgroundColor: '#ffffff',
        fontSsize: '14px',
        fontFamily: "Open Sans",
        fontWeight: 'bold',
        outline: 'none'
      },
      activeLinkStyle: {
        border: '1px solid rgb(229,22,30)',
         color: 'rgb(229,22,30)',
        backgroundColor: 'rgba(255, 255, 255, 0)'
      },
      visibleTabStyle: {
        display: 'inline-block'
      },
      content: {
        padding: '0 15px'
      }
    };
    return (
      <Fragment>
        <div className="filters__sites-coupons">
          <Filters set={shops} uniq={'coupon__filter'}  onGroupsChange={this.handleFilterGroupsChange} />
          <div className="coupons__container">
            <div className="coupons__wrapper">
            <Tabs activeLinkStyle={styles.activeLinkStyle} visibleTabStyle={styles.visibleTabStyle} style={styles.tabs}>
              <div style={styles.links}>
                <TabLink to="tab1" default style={styles.tabLink}>Популярные</TabLink>
                <TabLink to="tab2"  style={styles.tabLink}>Новые</TabLink>
                <TabLink to="tab3" style={styles.tabLink}>Скоро закончатся</TabLink>
              </div>
              <div style={styles.content}>
                <TabContent for="tab1">
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
                <TabContent for="tab2">
                  <h2>Tab2 content</h2>
                  <div>¯\_(ツ)_/¯</div>
                </TabContent>
                <TabContent for="tab3">
                  <h2>Tab3 content</h2>
                  <div>(╯°□°）╯︵ ┻━┻)</div>
                </TabContent>
              </div>
            </Tabs>
            </div>
          </div>

        </div>
        <Route path={url + '/:couponId'} component={CouponContainer} />
      </Fragment>
    )
  }
}

export default Coupons
