import React, { Component } from 'react'
import '../styles/Filters.scss'

import { SelectItem } from './items'

class Filters extends Component {
  constructor (props) {
    super(props)
  }
  handleSelectChange = selected => {
    const { onGroupsChange } = this.props
    onGroupsChange(selected)
  }
  render () {
    const { set, caption } = this.props
    return (
      <div className='filters'>
        <b>фильтр</b> <p>{ caption }</p>
          <SelectItem
            selected={'привет'}
            set={set}
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
