import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Filters } from './'
// import '../../styles/SiteItem.scss'


class SiteItem extends Component {
  constructor (props) {
    super(props)

    this.state = {
      opened: false,
      active:false
    }
    this.toggleTick = this.toggleTick.bind(this);
  }

  componentDidMount () {
    this.setState({ opened: this.props.opened })
  }
  getNumEnding(iNumber, aEndings)
  {
      var sEnding, i;
      iNumber = iNumber % 100;
      if (iNumber>=11 && iNumber<=19) {
          sEnding=aEndings[2];
      }
      else {
          i = iNumber % 10;
          switch (i)
          {
              case (1): sEnding = aEndings[0]; break;
              case (2):
              case (3):
              case (4): sEnding = aEndings[1]; break;
              default: sEnding = aEndings[2];
          }
      }
      return sEnding;
  }
  toggleTick() {
    const { group, site } = this.props;
    if (!group.filter(item => item.ID == site.ID).length > 0) {
      // non active shop
      this.setState({ active: !this.state.active });
    }
  }
  render () {
    const { active } = this.state;
    const {  site, url, prop, group } = this.props
    return (
      <div className={ `col-2 shop ${group.filter(item => item.ID == site.ID).length > 0 ? 'active-shop' : ''}` }
        style={{ width:'100%', padding:'0'}} 
        onMouseEnter={this.toggleTick}
        onMouseLeave={this.toggleTick}
        onClick={() => this.props.handleClick(site.ID, prop)}>
          <div className="row d-flex">
              <div className="col-12 shop-image">
                  { site.LogoUrl &&
                    <img className="mx-auto d-block img-fluid" src={site.LogoUrl} alt={site.Name} />
                  }
                  <i className="fa fa-check" id='tick' style = { active ? {opacity:'1'} : {opacity:'0'}}></i>
              </div>
              <div className="col-12 mt-3 mb-4">
                  <p className="text-center">{site.Name}</p>
                  <div className="col-12 flex-nowrap">
                      <p className="text-center">{site.Promocodes.length} предложени{ `${ site.Promocodes.length > 0 ? this.getNumEnding(site.Promocodes.length, ['е', 'я', 'й']) : 'й'}` }</p>
                  </div>
              </div>
          </div>
      </div>
      // <div className="selectItem">
      //   <div>
      //           <div  className={`item__${site.ID}-item item${site.ID}`}>
      //             <input className="filter__check" type="checkbox"
      //                    key={this.props.prop} name={this.props.prop} id={site.ID} onClick={(evt) =>this.props.handleClick(evt)}  />
      //             <div >
      //               <label
      //                 className={
      //                   `${` button__filter${site.ID}`} ${this.state.checked__filter ? `active__filter` : ''}`}
      //                 htmlFor={site.ID}>
      //                 <div className="filter__shop__wrapper" >
      //                   <div className="image__filter__content">
      //                     <div className="image__wrapper"> <img src={site.LogoUrl} alt="" /> </div>
      //                   </div>
      //                   <div className="filter__shop__content"  >
      //                     <p>{site.Name}</p>
      //                     <p>{site.Amount} предложений</p>
      //                   </div>
      //                 </div>
      //               </label>
      //             </div>
      //           </div>
      //   </div>
      // </div>
    )
  }
}

export default SiteItem
