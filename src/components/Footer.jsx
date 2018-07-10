import React, { Component } from 'react';
import logo from '../styles/images/logo__header.png';

class Footer extends Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
        <section id="footer">
            <div className="container h-100 align-items-center">
                <div className="row justify-content-between align-items-center">
                    <ul className="navbar-nav mr-auto col-12 justify-content-center col-md-1">
                        <li className="nav-item text-center">
                            <a className="navbar-brand" href="#">
                                <img src={logo} alt="logo" />
                            </a>
                        </li>
                    </ul>
                    <p className="text-center col-md-5 col-12">Все права защищены 2017-2018г.</p>
                    <ul className="navbar-nav ml-auto d-flex flex-row col-md-2 col-12 text-center">
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

export default Footer;