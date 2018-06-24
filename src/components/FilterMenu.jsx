import React, { Component } from 'react'
import { SelectItemMenu } from './items'

class FilterMenu extends Component {
  constructor (props) {
    super(props)
    this.state = {
      opened: false,
      group: [],
      checked__filter: false
    }
  }
  handleSelectChange = selected => {
    const { onGroupsChange } = this.props
    onGroupsChange(selected)
  }
  handleCheckboxClick = ({ target: { checked, name, id } }) => {

    const { group } = this.state
    const { set, onListChange } = this.props
    let _newGroup = group
    this.setState({checked__filter:{ target: { checked, name }}})
    if (checked) {
      _newGroup.push(set[name])
      this.setState({ group: _newGroup, checked__filter: !this.state.checked__filter }, () => {
        console.log(this.state.group)
      })
    } else {
      _newGroup = _newGroup.filter(item => id != item.ID)
      this.setState({ group: _newGroup, checked__filter: !this.state.checked__filter  }, () => {
        console.log(this.state.group)
      })
    }
    this.handleSelectChange(_newGroup)
  }


  render () {
    const { set, caption } = this.props
    const { opened } = this.state
    return (
        <div className='filters'>
          <SelectItemMenu
              set={set}
              opened={opened}
              checked__filter={this.state.checked__filter}
              imgUrl={this.props.image}
              uniqLabel={this.props.uniq}
              handleClick={this.handleCheckboxClick}
              styles={{
                selectedClassName: 'categorySelect'
              }}
              onListChange={this.handleSelectChange}
          />
        </div>
    )
  }
}

export default FilterMenu
