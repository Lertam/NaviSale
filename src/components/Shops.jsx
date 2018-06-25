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
import right from '../styles/images/Right.png'

class Shops extends Component {
  constructor (props) {
    super(props)
    this.state = {
      categoriesFilter: [],
      group: []
    }
  }
  handleFilterGroupsChange = selected => {
    this.setState({ categoriesFilter: selected })
  }


  handleCheckboxClick = (evt) => {
    console.log(evt.target.name)
    const { group } = this.state
    const { shops, onListChange } = this.props
    let _newGroup = group
    this.setState({checked__filter: !this.state.checked__filter })
    if (evt.target.checked) {
      _newGroup.push(shops[evt.target.name])
      this.setState({ group: _newGroup, checked__filter: !this.state.checked__filter }, () => {
        console.log(this.state.group)
      })
    } else {
      _newGroup = _newGroup.filter(item => evt.target.id != item.ID)
      this.setState({ group: _newGroup, checked__filter: !this.state.checked__filter  }, () => {
        console.log(this.state.group)
      })
    }

  }





  render () {
    const { shops, categories, match: { url, isExact } } = this.props
    const { categoriesFilter } = this.state
    const flatFilter = categoriesFilter.map(cat => cat.Name)
    console.log(categories)
    const options = {
      nav: true,
      items: 7,
      loop: true,
      dots:false,
      slideBy:1,
      navClass: ['owl-prev__left', 'owl-next__right'],
      navText: ['<div class="navTextRight"> </div>', '']
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
                              prop={key}
                              site={item}
                              url={url}
                              onListChange={this.handleSelectChange}
                              handleClick={this.handleCheckboxClick}
                          />
                          :
                            <SiteItem
                              prop={key}
                              site={item}
                              onListChange={ this.handleFilterGroupsChange }
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
