import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Filters } from './'
import '../../styles/SiteItem.scss'
import OwlCarousel from 'react-owl-carousel2';
import '../../styles/SelectItem.scss'

class SiteItem extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    this.setState({ opened: this.props.opened })
  }
  handleDropDownClick = () => {
    const { opened } = this.state
    if (opened) {
      this.setState({ opened: false })
    } else {
      this.setState({ opened: true })
      // document.onclick = () => this.setState({ opened: false })
    }
  }
  handleCheckboxClick = ({ target: { checked, name, id } }) => {
    const { group } = this.state
    const { set, onListChange } = this.props
    let _newGroup = group
    this.setState({checked__filter:{ target: { checked, name }}})
    if (checked) {
      _newGroup.push(set[name])
      this.setState({ group: _newGroup }, () => {
        console.log(this.state.group)
      })
    } else {
      _newGroup = _newGroup.filter(item => id != item.ID)
      this.setState({ group: _newGroup }, () => {
        console.log(this.state.group)
      })
    }
    onListChange(_newGroup)
  }



  render () {
    const { site, url } = this.props
    console.log(this.props)
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
