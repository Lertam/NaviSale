import React, { Component, Fragment } from 'react';
import { SiteItem } from '../components/items/index';
import { FilterMenu } from './';
import Carousel from 'react-slick';

class Shops extends Component {
	constructor (props) {
		super(props)
		this.state = {
			categoriesFilter: [],
			group: []
		};
		this.handleFilterGroupsChange = this.handleFilterGroupsChange.bind(this);
	}
	handleFilterGroupsChange = selected => {
		let group = this.state.group.filter(gr => (gr.Categories.filter(cat => -1 !== selected.map(cat => cat.Name).indexOf(cat)).length > 0));
		this.setState({ categoriesFilter: selected, group: group });
		this.props.onSitesChange(group);
	}
	handleCheckboxClick = (id, name) => {
		const { group } = this.state;
		const { shops } = this.props;
		let _newGroup = group;
		let checked = _newGroup.filter(item => item.ID == parseInt(id)).length == 0;
		if (checked) {
			_newGroup.push(shops[name]);
			this.setState({ group: _newGroup, checked__filter: !this.state.checked__filter });
		} else {
			_newGroup = _newGroup.filter(item => parseInt(id) != item.ID);
			this.setState({ group: _newGroup, checked__filter: !this.state.checked__filter  });
		}
		this.props.onSitesChange(_newGroup);
	}
	render () {
		const { shops, categories, match: { url } } = this.props;
		const { categoriesFilter, group } = this.state;
		const flatFilter = categoriesFilter.map(cat => cat.Name);
		const config = {
			dots: false,
			infinite: false,
			speed: 300,
			slidesToShow: 6,
			slidesToScroll: 2,
			responsive: [{
					breakpoint: 1025,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 2,
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						centerMode:true
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						centerMode: true
					}
				}
			]
		};
		return (
			<Fragment>
				<Fragment>
					<section id="category">
						<div className="container">
							<h1 className="text-center">
								Используй промокоды для экономного интернет-шопинга
							</h1>
							<h3 className="text-center">
								Выберите категорию магазинов:
							</h3>
							<FilterMenu set={categories}
								uniq={'shop__filter'} onGroupsChange={this.handleFilterGroupsChange} />
						</div>
					</section>
						<section id="shops">
							<div className="container">
								<Carousel className="col-md-12" { ...config }>
									{
										shops.map((item, key) =>
											categoriesFilter.length !== 0
												? item.Categories && item.Categories.some(cat => flatFilter.includes(cat))  &&
												<SiteItem
														key={`site-${key}`}
														group={group}
														prop={key}
														site={item}
														url={url}
														onListChange={this.handleSelectChange}
														handleClick={this.handleCheckboxClick}
												/>
												:
													<SiteItem
														key={`site-${key}`}
														group={group}
														prop={key}
														site={item}
														onListChange={ this.handleFilterGroupsChange }
														handleClick={this.handleCheckboxClick}
														url={url}  />
									)}
								</Carousel>
							</div>
					</section>
				</Fragment>
			</Fragment>
		);
	}
}

export default Shops;