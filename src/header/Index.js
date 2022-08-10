import React, { Component } from 'react'
import LOGO from '../Logo/RnLogo.png'

export default class Index extends Component {
    render() {
        return (
  <div>
       <header className="header">
          <div className="container-fluid-limited d-flex align-items-center justify-content-between">
            <a href="/" className="header-brand">
             <img src={LOGO} data-light-src={LOGO}  data-dark-src={LOGO} alt="logo" />
          </a>
       </div>
  </header>
</div>

        )
    }
}
