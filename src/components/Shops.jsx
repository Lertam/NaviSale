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
              <div className="filters__sites-category">
                <div className="filter__wrapper">
                <div className="heading__text-filter">
                      <h3 className="filter__head">Используй промокоды для экономного интернет-шопинга</h3>
                      <p className="filter__title">Выбирите категорию магазинов:</p>
                </div>
              <Filters set={categories} caption={''} onGroupsChange={this.handleFilterGroupsChange} />
              </div>
              </div>
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
