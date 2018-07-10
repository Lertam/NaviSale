import React, { Component } from 'react';
import logo from '../styles/images/logo__header.png';

class Header extends Component {
	render() {
		return (
			<section id="topnav">
				<div className="container h-100 align-items-center">
					<div className="row">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item">
								<a className="navbar-brand" href="#">
									<img src={logo} alt="logo" />
								</a>
							</li>
						</ul>
						<ul className="navbar-nav ml-auto d-flex flex-row">
							<li className="nav-item col">
								<a className="nav-link" href="https://vk.com/dealfinder">
									<i className="fab fa-vk"></i>
								</a>
							</li>
							<li className="nav-item col">
								<a className="nav-link" href="https://t.me/dealfinder">
									<i className="fab fa-telegram-plane"></i>
								</a>
							</li>
							<li className="nav-item col">
								<a className="nav-link" href="https://instagram.com/dealfinder">
									<i className="fab fa-instagram"></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</section>
		);
	}
}

export default Header;