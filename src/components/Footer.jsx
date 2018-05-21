import React, { Component } from 'react'
import '../styles/Footer.scss'

class Footer extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <footer>
        <div className='logo'></div>
        <p>2018</p>
        <div className='social vk'></div>
        <div className='social tg'></div>
        <div className='social in'></div>
      </footer>
    )
  }
}

export default Footer
