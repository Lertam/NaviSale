import React, { Component } from 'react';
import { SelectItemMenu } from './items';

class FilterMenu extends Component {
	constructor (props) {
		super(props)
		this.state = {
			opened: false,
			group: [],
			checked__filter: false
		};
	}
	handleSelectChange = selected => {
		const { onGroupsChange } = this.props;
		onGroupsChange(selected);
	}
	handleCheckboxClick = ({ target: { name } }) => {
		const { set } = this.props;
		let _newGroup = [set[name]];
		this.setState({ group: _newGroup, checked__filter: !this.state.checked__filter  });
		this.handleSelectChange(_newGroup);
	}
	render () {
		const { set } = this.props;
		const { opened } = this.state;
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
		);
	}
}

export default FilterMenu;