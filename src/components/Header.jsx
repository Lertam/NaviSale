import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.scss'
import logo from '../styles/images/logo__header.png'


class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      collapsed: false
    }
  }
  componentDidMount () {
    document.onscroll = () => window.pageYOffset > 30
                              ? this.setState({ collapsed: true })
                              : this.setState({ collapsed: false })
  }

  render () {
    const { collapsed } = this.state
    const { path } = this.props
    return (
        <div className='head__wrapper'>
             <header className="header__content">
                  <div className="header__content-logo">
                    <img src={logo} alt=""/>
                  </div>
                  <div className="social__content">
                    <ul className="social__links">
                      <li className="social__links-vk">
                        <a href="http://vk.com">vk</a>
                      </li>
                      <li className="social__links-telegram">
                        <a href="#">Telegram</a>
                      </li>
                      <li className="social__links-insta">
                        <a href="#">Instagram</a>
                      </li>
                    </ul>
                  </div>
             </header>
          </div>
    )
  }
}

export default Header


{/*<header className={`${collapsed && 'shrink'}`}>*/}
{/*<div className='logo'/>*/}
{/*<Link className={`${path.match('coupons') && 'active'}`} to='/coupons'>Промокоды</Link>*/}
{/*<Link className={`${path.match('shops') && 'active'}`} to='/shops'>Сайты</Link>*/}
{/*</header>*/}