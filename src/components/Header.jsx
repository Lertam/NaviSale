import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.scss'

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
      <header className={`${collapsed && 'shrink'}`}>
        <div className='logo'/>
        <Link className={`${path.match('coupons') && 'active'}`} to='/coupons'>Промокоды</Link>
      <Link className={`${path.match('shops') && 'active'}`} to='/shops'>Сайты</Link>
      </header>
    )
  }
}

export default Header
