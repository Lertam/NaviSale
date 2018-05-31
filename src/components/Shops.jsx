import React, { Component, Fragment } from 'react'
import { Route } from 'react-router'
import '../styles/Shops.scss'

// import { CItem } from './items'
// import { CouponContainer } from '../containers'
import { SiteItem } from '../components/items'
import { Filters } from './'
import { ShopContainer } from '../containers'

class Shops extends Component {
  constructor (props) {
    super(props)
    this.state = {
      categoriesFilter: []
    }
  }
  handleFilterGroupsChange = selected => {
    this.setState({ categoriesFilter: selected })
  }
  render () {
    const { shops, categories, match: { url, isExact } } = this.props
    const { categoriesFilter } = this.state
    const flatFilter = categoriesFilter.map(cat => cat.Name)
    return (
      <Fragment>
        {
          isExact && (
            <Fragment>
              <Filters set={categories} caption={'по категориям'} onGroupsChange={this.handleFilterGroupsChange} />
              <div className='shops'>
                {
                  shops.map((item, key) =>
                  categoriesFilter.length !== 0
                  ? item.Categories && item.Categories.some(cat => flatFilter.includes(cat))  &&
                    <SiteItem
                      key={key}
                      site={item}
                      url={url}
                      />
                  : <SiteItem
                      key={key}
                      site={item}
                      url={url}
                      />
                )}
              </div>
            </Fragment>
          )
        }
        {
          !isExact && <Route path={url + '/:shopId'} component={ShopContainer} />
        }
      </Fragment>
    )
  }
}

export default Shops
