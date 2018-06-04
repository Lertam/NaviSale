import React, { Component } from 'react'
import '../styles/Filters.scss'

import { SelectItem } from './items'

class Filters extends Component {
  constructor (props) {
    super(props)
    this.state = {
      opened: false
    }
  }
  handleSelectChange = selected => {
    const { onGroupsChange } = this.props
    onGroupsChange(selected)
  }
  handleOpenClick = () => this.setState({ opened: !this.state.opened })

  render () {
    const { set, caption } = this.props
    const { opened } = this.state
    return (
      <div className='filters'>
        <div className='captions'>
          <b>фильтр</b> <p>{ caption }</p>
          <div className='downIcon' onClick={this.handleOpenClick}></div>
        </div>
        <SelectItem
          selected={'привет'}
          set={set}
          opened={opened}
          styles={{
            selectedClassName: 'categorySelect'
          }}
          onListChange={this.handleSelectChange}
          />
      </div>
    )
  }
}

export default Filters
