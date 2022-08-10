import React, { Component } from 'react'

export default class index extends Component {
    render() {
        return (
           <div>
  <section id="section-05" className="section animation">
    <div className="section-body">
      <h2 className="section-title animation-translate-overline animation-item-1">Facts</h2>
      <div className="row animation-translate animation-item-2">
        <div className="col-12 col-md-6 col-lg-3">
          <div className="counter mb-6 mb-lg-0">
            <span className="counter-label">Coffees / per day</span>
            <span data-counter-from={0} data-counter-to={3}>6</span>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <div className="counter mb-6 mb-lg-0">
            <span className="counter-label">Launched websites</span>
            <span data-counter-from={0} data-counter-to={35}>30+</span>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <div className="counter mb-6 mb-lg-0">
            <span className="counter-label">Lines of code</span>
            <span data-counter-from={0} data-counter-to={12000}>12&nbsp;000+</span>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <div className="counter">
            <span className="counter-label">Happy clients</span>
            <span data-counter-from={0} data-counter-to={32}>16+</span>
          </div>
        </div>
      </div>
    </div>
    <div className="section-footer animation-translate animation-item-3">
      <a className="section-next goto-section" href="#section-06">
        <span className="section-next-counter">05/10</span>
        <span className="section-next-label">Next chapter</span>
        <span className="section-next-icon" />
      </a>
    </div>
  </section>
</div>

        )
    }
}
