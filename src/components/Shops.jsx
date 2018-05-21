import React, { Component, Fragment } from 'react'
import { Route } from 'react-router'
import '../styles/Shops.scss'

// import { CItem } from './items'
// import { CouponContainer } from '../containers'
import { SiteItem } from '../components/items'
import { Filters } from './'


class Shops extends Component {
  constructor (props) {
    super(props)
    this.state = {
      categoriesFilter: []
    }
  }
  render () {
    const { shops, match: { url } } = this.props
    const { categoriesFilter } = this.state
    return (
      <Fragment>
        <Filters set={[]} caption={'по категориям'} onGroupsChange={() => {}} />
        <div className='shops'>
          {
            shops.map((item, key) =>
              categoriesFilter.length !== 0
              ? !categoriesFilter.every(category => category.Name !== item.Site) &&
                <p>bsrv</p>
              : <SiteItem
                  key={key}
                  site={item}
                  url={url}
                  />
            )
          }
        </div>
      </Fragment>
    )
  }
}

export default Shops
