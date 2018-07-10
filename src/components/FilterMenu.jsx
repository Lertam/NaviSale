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
  handleCheckboxClick = ({ target: { name, dataset } }) => {
    const { group } = this.state;
    const { set } = this.props;
    let _newGroup = group;
    let checked = _newGroup.filter(item => item.ID == parseInt(dataset.id)).length == 0;
    this.setState({checked__filter: !this.state.checked__filter });
    if (checked) {
      _newGroup.push(set[name]);
      this.setState({ group: _newGroup, checked__filter: !this.state.checked__filter });
    } else {
      _newGroup = _newGroup.filter(item => parseInt(dataset.id) != item.ID);
      this.setState({ group: _newGroup, checked__filter: !this.state.checked__filter  });
    }
    this.handleSelectChange(_newGroup);
  }


  render () {
    const { set, caption } = this.props
    const { opened } = this.state
    return (
        <div className="row justify-content-center mt-4">
            <SelectItemMenu
                set={set}
                opened={opened}
                check__filter={this.state.checked__filter}
                imgUrl={this.props.image}
                uniqLabel={this.props.uniq}
                handleClick={this.handleCheckboxClick}
                group = { this.state.group }
                styles={{
                  selectedClassName: 'categorySelect'
                }}
                onListChange={this.handleSelectChange}
            />
        </div>
        // <div className='filters'>
        //   <SelectItemMenu
        //       set={set}
        //       opened={opened}
        //       check__filter={this.state.checked__filter}
        //       imgUrl={this.props.image}
        //       uniqLabel={this.props.uniq}
        //       handleClick={this.handleCheckboxClick}
        //       styles={{
        //         selectedClassName: 'categorySelect'
        //       }}
        //       onListChange={this.handleSelectChange}
        //   />
        // </div>
    )
  }
}

export default FilterMenu
