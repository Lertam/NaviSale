import React, { Component } from 'react'
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

  render () {
    const { set, caption } = this.props
    const { opened } = this.state
    return (
      <div className='filters'>
        <SelectItem
          set={set}
          opened={opened}
          uniqLabel={this.props.uniq}
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
