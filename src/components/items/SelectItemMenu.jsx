import React, { Component } from 'react';

class SelectItemMenu extends Component {
	constructor (props) {
		super(props);
	}
	render () {
		const { group, set } = this.props;
		return (
			<div className="col-10 d-flex justify-content-around flex-wrap">
				{ set.slice(0, set.length > 5 ? 4 : 5).map((item, key) => (
						<button key={key} data-id = {item.ID} name={key} 
							onClick={this.props.handleClick}
							className={ `button button-category ${group.filter(group => group.ID == item.ID).length > 0 ? 'active-b' : ''} ` }>
								{ item.Name }
						</button>
					))
				}
				{ set.length > 5 &&
					<div className="dropdown">
							<button className={ `button button-category dropdown-toggle ${set.slice(4).map(item=>item.ID).filter(id => group.map(item => item.ID).includes(id)).length > 0 ? 'active-b' : ''}` } type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
									aria-expanded="false">
									Еще+
							</button>
							<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
								{
									set.slice(4).map((item, key) => 
										<a data-id = {item.ID} name={key+4}
											onClick={this.props.handleClick} key={key+4} className={ `dropdown-item ${ group.filter(group => group.ID == item.ID).length > 0 ? 'active-b' : ''}`}>{ item.Name }</a>
									)
								}
							</div>
					</div>
				}
			</div>
		);
	}
}

export default SelectItemMenu;
