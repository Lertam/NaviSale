import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Filters } from './'
import '../../styles/SiteItem.scss'

class SiteItem extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    const { site, url } = this.props
    console.log(site);
    return (
      <Link to={`${url}/${site.ID}`} className='siteItem'>
        <p className='name'>{ site.Name }</p>
        <p className='domain'>{ site.Domain }</p>
        <div className='descriptionContainer'>
          <span dangerouslySetInnerHTML={{__html: site.DeliveryInfo}}></span>
        </div>
      </Link>
    )
  }
}

export default SiteItem
