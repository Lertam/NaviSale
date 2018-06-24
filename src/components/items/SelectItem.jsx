import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Filters } from './'
import '../../styles/SelectItem.scss'
import OwlCarousel from 'react-owl-carousel2';
import right from '../../styles/images/Right.png'

class SelectItem extends Component {
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
    const { selected, set, styles, opened, uniqLabel } = this.props
    const { group } = this.state
    const options = {
      nav: true,
      loop: true,
      center: true,
      items:6,
      slideBy:1,
      navClass: ['owl-prev__left', 'owl-next__right'],
      margin: 10
    };
    return (
      <div className='selectItem'>
        {/*<div onClick={this.handleDropDownClick} className={`selected ${styles.selectedClassName || ''}`}>*/}
          {/*{*/}
            {/*group.map((item, key) => <span key={key}>{ item.Name }</span>)*/}
          {/*}*/}
        {/*</div>*/}
        <div className={`dropdown opened`}>
          <OwlCarousel  options={options} >
          {
            set.map((item, key) => (
              <div key={key} className={`item__${uniqLabel}-item item${item.ID}`}>
                <input className="filter__check" type='checkbox' name={key} id={item.ID} onClick={this.handleCheckboxClick} />
                <div >
                <label className={
                  `${`button__filter${item.ID}`} ${this.state.checked__filter ? `active__filter` : ''}`}
                    htmlFor={item.ID} >
                  <div className="filter__shop__wrapper" >
                    <div className="image__filter__content" >
                    <div className="image__wrapper"> <img  src={item.LogoUrl} alt=""/> </div>
                    </div>
                    <div className="filter__shop__content" >
                  <p>{item.Name}</p>
                      <p>{item.Amount} предложений</p>
                    </div>
                  </div>
                </label>
                </div>
              </div>
            ))
          }
          </OwlCarousel>
        </div>
      </div>
    )
  }
}

export default SelectItem
