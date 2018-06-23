import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Filters } from './'
import '../../styles/SelectItem.scss'

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
    const { selected, set, styles, opened } = this.props
    const { group } = this.state

    return (
      <div className='selectItem'>
        <div onClick={this.handleDropDownClick} className={`selected ${styles.selectedClassName || ''}`}>
          {
            group.map((item, key) => <span key={key}>{ item.Name }</span>)
          }
        </div>
        <div className={`dropdown opened`}>
          {
            set.map((item, key) => (
              <div key={key} className='item'>
                <input className="filter__check" type='checkbox' name={key} id={item.ID} onClick={this.handleCheckboxClick} />
                <div >
                <label className={
                  `${`filter__item button__filter${item.ID}`} ${this.state.checked__filter ? `active__filter` : ''}`}
                    htmlFor={item.ID}>{item.Name} </label>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

export default SelectItem
