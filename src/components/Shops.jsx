import React, { Component, Fragment } from 'react'
import { Route } from 'react-router'
// import '../styles/Shops.scss'
// import '../styles/Filters.scss'
// import { CItem } from './items'
// import { CouponContainer } from '../containers'
import { SiteItem } from '../components/items/index'
import { FilterMenu } from './'
import { ShopContainer } from '../containers'
// import '../styles/NewStyles/Header__Filter.scss'
import OwlCarousel from 'react-owl-carousel2';
import right from '../styles/images/Right.png'
import $ from 'jquery';
import Carousel from 'react-slick';

class Shops extends Component {
  constructor (props) {
    super(props)
    this.state = {
      categoriesFilter: [],
      group: []
    };

    this.handleFilterGroupsChange = this.handleFilterGroupsChange.bind(this);
  }
  componentDidUpdate() {
    // $(".shop")
    //   .hover(function () {
    //     if (!($(this).hasClass('active-shop'))) {
    //       $(this).find('#tick').fadeTo(0, 1);
    //     }

    //   })
    //   .mouseleave(function () {
    //     if (!($(this).hasClass('active-shop'))) {
    //       $(this).find('#tick').fadeTo(1, 0);
    //     }
    //   })
    //   .click(function () {
    //     if ($(this).hasClass('active-shop')) {
    //       $(this).removeClass('active-shop');
    //       var tick = $(this).find('#tick');
    //       tick.css("background-color", "#e6e6e6");
    //       tick.fadeTo(1, 0);

    //     } else {
    //       $(this).addClass('active-shop');
    //       var tick = $(this).find('#tick');
    //       tick.css("background-color", "#2196f3");
    //       tick.fadeTo(0, 1);
    //     }
    //   });
  }
  handleFilterGroupsChange = selected => {
    let group = this.state.group.filter(gr => (gr.Categories.filter(cat => -1 !== selected.map(cat => cat.Name).indexOf(cat)).length > 0))
    this.setState({ categoriesFilter: selected, group: group }, () => 
    console.log('Categories', selected, group))
    this.props.onSitesChange(group);
  }
  handleCheckboxClick = (id, name) => {
    const { group } = this.state;
    const { shops } = this.props;
    let _newGroup = group;
    let checked = _newGroup.filter(item => item.ID == parseInt(id)).length == 0;
    // this.setState({checked__filter: !this.state.checked__filter });
    if (checked) {
      _newGroup.push(shops[name]);
      this.setState({ group: _newGroup, checked__filter: !this.state.checked__filter });
    } else {
      _newGroup = _newGroup.filter(item => parseInt(id) != item.ID);
      this.setState({ group: _newGroup, checked__filter: !this.state.checked__filter  });
    }
    this.props.onSitesChange(_newGroup);
  }
  render () {
    const { shops, categories, match: { url, isExact } } = this.props
    const { categoriesFilter, group } = this.state
    const flatFilter = categoriesFilter.map(cat => cat.Name)
    const config = {
      dots: false,
      infinite: false,
      // draggable: true,
      speed: 300,
      slidesToShow: 6,
      slidesToScroll: 2,
      responsive: [{
          breakpoint: 1025,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode:true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true
          }
        }
      ]
    }
    return (
      <Fragment>
        {/* {
          isExact && ( */}
            <Fragment>
              <section id="category">
                <div className="container">
                    <h1 className="text-center">
                        Используй промокоды для экономного интернет-шопинга
                    </h1>
                    <h3 className="text-center">
                        Выберите категорию магазинов:
                    </h3>
                    <FilterMenu set={categories}
                       uniq={'shop__filter'} onGroupsChange={this.handleFilterGroupsChange} />
                </div>
              </section>
            <section id="shops">
              <div className="container">
                  <Carousel className="col-md-12" { ...config }>
                    {
                      shops.map((item, key) =>
                        categoriesFilter.length !== 0
                            ? item.Categories && item.Categories.some(cat => flatFilter.includes(cat))  &&
                            <SiteItem
                                key={`site-${key}`}
                                group={group}
                                prop={key}
                                site={item}
                                url={url}
                                onListChange={this.handleSelectChange}
                                handleClick={this.handleCheckboxClick}
                            />
                            :
                              <SiteItem
                                key={`site-${key}`}
                                group={group}
                                prop={key}
                                site={item}
                                onListChange={ this.handleFilterGroupsChange }
                                handleClick={this.handleCheckboxClick}
                                url={url}  />
                    )}
                  </Carousel>
              </div>
          </section>




              {/* <div className="filters__sites-category">
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

              </div> */}
            </Fragment>
          {/* )
        } */}
        {/*{*/}
          {/*!isExact && <Route path={url + '/:shopId'} component={ShopContainer} />*/}
        {/*}*/}
      </Fragment>
    )
  }
}

export default Shops
