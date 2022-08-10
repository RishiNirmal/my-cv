import React, { Component } from 'react'
import MyImage from '../Logo/my-img.png'

export default class index extends Component {
    render() {
        return (
           <div>
  <section id="section-01" className="section section-sub-header animation interaction-in">
    <div className="section-body">
      <div className="jumbotron jumbotron-fluid pt-6 pt-lg-8 pb-0 mb-0">
        <img src={MyImage} className="jumbotron-img animation-translate animation-item-1" alt="Avatar" />
        <h1 className="display-1 display-animated display-animated-in animation-translate animation-item-2">Rishi<br />Kumar Nirmal</h1>
        <p className="lead animation-translate animation-item-3">Front Ent Developer</p>
      </div>
    </div>
    <div className="section-footer animation-translate animation-item-4">
      <a className="section-next goto-section" href="#section-02">
        <span className="section-next-counter">01/10</span>
        <span className="section-next-label">Next chapter</span>
        <span className="section-next-icon" />
      </a>
    </div>
  </section>
</div>

        )
    }
}
