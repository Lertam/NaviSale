import React, { Component, Fragment } from 'react'
import { Route } from 'react-router'
import '../styles/Shops.scss'
import '../styles/Filters.scss'
// import { CItem } from './items'
// import { CouponContainer } from '../containers'
import { SiteItem } from '../components/items/index'
import { FilterMenu } from './'
import { ShopContainer } from '../containers'
import '../styles/NewStyles/Header__Filter.scss'
import OwlCarousel from 'react-owl-carousel2';

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

  handleSelectChange = selected => {
    const { onGroupsChange } = this.props
    onGroupsChange(selected)
  }

  handleCheckboxClick = ({ target: { checked, name, id } }) => {

    const { group } = this.state
    const { set, onListChange } = this.props
    let _newGroup = group
    this.setState({checked__filter: !this.state.checked__filter })
    if (checked) {
      _newGroup.push(set[name])
      this.setState({ group: _newGroup, checked__filter: !this.state.checked__filter }, () => {
        console.log(this.state.group)
      })
    } else {
      _newGroup = _newGroup.filter(item => id != item.ID)
      this.setState({ group: _newGroup, checked__filter: !this.state.checked__filter  }, () => {
        console.log(this.state.group)
      })
    }
    this.handleSelectChange(_newGroup)
  }





  render () {
    const { shops, categories, match: { url, isExact } } = this.props
    const { categoriesFilter } = this.state
    const flatFilter = categoriesFilter.map(cat => cat.Name)
    console.log(categories)
    const options = {
      nav: true,
      loop: true,
      center: true,
      items: 7,
      slideBy:1,
      navClass: ['owl-prev__left', 'owl-next__right'],
    };
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
              <FilterMenu set={categories}
                       uniq={'shop__filter'} onGroupsChange={this.handleFilterGroupsChange} />
              </div>
              </div>
              <div className='shops'>
                <OwlCarousel options={options} >
                {
                  shops.map((item, key) =>
                      categoriesFilter.length !== 0
                          ? item.Categories && item.Categories.some(cat => flatFilter.includes(cat))  &&
                          <SiteItem
                              key={key}
                              site={item}
                              url={url}
                              handleClick={this.handleCheckboxClick}
                          />
                          :
                            <SiteItem
                              key={key}
                              site={item}
                              handleClick={this.handleCheckboxClick}
                              url={url}  />
                  )}
                </OwlCarousel>
              </div>
            </Fragment>
          )
        }
        {/*{*/}
          {/*!isExact && <Route path={url + '/:shopId'} component={ShopContainer} />*/}
        {/*}*/}
      </Fragment>
    )
  }
}

export default Shops
