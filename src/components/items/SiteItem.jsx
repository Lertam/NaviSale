import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Filters } from './'
import '../../styles/SiteItem.scss'


class SiteItem extends Component {
  constructor (props) {
    super(props)

    this.state = {
      opened: false,
    }
  }

  componentDidMount () {
    this.setState({ opened: this.props.opened })
  }


  render () {

    const {  site, url } = this.props
    console.log(site)
    const { group } = this.state
    const options = {
      nav: true,
      loop: true,
      slideBy:1,
      navClass: ['owl-prev__left', 'owl-next__right'],
      margin: 10
    };

    return (
      <div className="selectItem">
        <div>
                <div  className={`item__${site.ID}-item item${site.ID}`}>
                  <input className="filter__check" type="checkbox"
                         key={this.props.prop} name={this.props.prop} id={site.ID} onClick={(evt) =>this.props.handleClick(evt)}  />
                  <div >
                    <label
                      className={
                        `${` button__filter${site.ID}`} ${this.state.checked__filter ? `active__filter` : ''}`}
                      htmlFor={site.ID}>
                      <div className="filter__shop__wrapper" >
                        <div className="image__filter__content">
                          <div className="image__wrapper"> <img src={site.LogoUrl} alt="" /> </div>
                        </div>
                        <div className="filter__shop__content"  >
                          <p>{site.Name}</p>
                          <p>{site.Amount} предложений</p>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
        </div>
      </div>
    )
  }
}

export default SiteItem
