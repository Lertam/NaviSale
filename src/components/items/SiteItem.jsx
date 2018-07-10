import React, { Component } from 'react';

class SiteItem extends Component {
	constructor (props) {
		super(props);
		this.state = {
			active:false
		};
		this.toggleTick = this.toggleTick.bind(this);
	}
	getNumEnding(iNumber, aEndings)
	{
		var sEnding, i;
		iNumber = iNumber % 100;
		if (iNumber>=11 && iNumber<=19) {
			sEnding=aEndings[2];
		}
		else {
			i = iNumber % 10;
			switch (i)
			{
				case (1): sEnding = aEndings[0]; break;
				case (2):
				case (3):
				case (4): sEnding = aEndings[1]; break;
				default: sEnding = aEndings[2];
			}
		}
		return sEnding;
	}
	toggleTick() {
		const { group, site } = this.props;
		if (!group.filter(item => item.ID == site.ID).length > 0) {
			this.setState({ active: !this.state.active });
		}
	}
	render () {
		const { active } = this.state;
		const {  site, url, prop, group } = this.props
		let activeShop = group.filter(item => item.ID == site.ID).length > 0;
		return (
			<div className={ `col-2 shop ${activeShop ? 'active-shop' : ''}` }
				style={{ width:'100%', padding:'0'}} 
				onMouseEnter={this.toggleTick}
				onMouseLeave={this.toggleTick}
				onClick={() => this.props.handleClick(site.ID, prop)}>
					<div className="row d-flex">
						<div className="col-12 shop-image">
							{ site.LogoUrl &&
								<img className="mx-auto d-block img-fluid" src={site.LogoUrl} alt={site.Name} />
							}
							<i className="fa fa-check" id='tick' style = { active || activeShop  ? {opacity:'1'} : {opacity:'0'}}></i>
						</div>
						<div className="col-12 mt-3 mb-4">
							<p className="text-center">{site.Name}</p>
							<div className="col-12 flex-nowrap">
								<p className="text-center">{site.Promocodes.length} предложени{ `${ site.Promocodes.length > 0 ? this.getNumEnding(site.Promocodes.length, ['е', 'я', 'й']) : 'й'}` }</p>
							</div>
						</div>
					</div>
			</div>
		);
	}
}

export default SiteItem;