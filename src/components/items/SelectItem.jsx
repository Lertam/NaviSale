import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Filters } from './'
import '../../styles/SelectItem.scss'

class SelectItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      opened: false,
      group: []
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

    if (checked) {
      _newGroup.push(set[name])
      this.setState({ group: _newGroup })
    } else {
      _newGroup = _newGroup.filter(item => id != item.ID)
      this.setState({ group: _newGroup })
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
        <div className={`dropdown ${opened && 'opened'}`}>
          {
            set.map((item, key) => (
              <div key={key} className='item'>
                <input type='checkbox' name={key} id={item.ID} onClick={this.handleCheckboxClick} />{ item.Name }
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

export default SelectItem
