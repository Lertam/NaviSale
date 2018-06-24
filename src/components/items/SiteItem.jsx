import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Filters } from './'
import '../../styles/SiteItem.scss'


class SiteItem extends Component {
  constructor (props) {
    super(props)

    this.state = {
      opened: false,
      group: [],
      checked__filter: false
    }
  }

  componentDidMount () {
    this.setState({ opened: this.props.opened })
  }


  render () {

    const { key, site, url } = this.props
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
        {/*<div onClick={this.handleDropDownClick} className={`selected ${styles.selectedClassName || ''}`}>*/}
          {/*{*/}
            {/*group.map((item, key) => <span key={key}>{ item.Name }</span>)*/}
          {/*}*/}
        {/*</div>*/}
        <div >
                <div key={key} className={`item__${site.ID}-item item${site.ID}`}>
                  <input className="filter__check" type="radio" name={key} id={site.ID} onClick={this.props.handleClick}  />
                  <div >
                    <label
                      className={
                        `${` button__filter${site.ID}`} ${this.state.checked__filter ? `active__filter` : ''}`}
                      htmlFor={site.ID}
                    >
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
