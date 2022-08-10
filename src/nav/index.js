import React, { Component } from 'react'

export default class index extends Component {
    render() {
        return (
            <div>
  <nav className="sections-nav-container">
    <ul id="sections-nav" className="nav sections-nav sections-nav-animated">
      <li className="sections-nav-item">
        <a href="#section-01" className="nav-link sections-nav-link goto-section active">
          <span className="sections-nav-counter">01</span>
          Top
        </a>
      </li>
      <li className="sections-nav-item">
        <a href="#section-02" className="nav-link sections-nav-link goto-section">
          <span className="sections-nav-counter">02</span>
          About me
        </a>
      </li>
      <li className="sections-nav-item">
        <a href="#section-03" className="nav-link sections-nav-link goto-section">
          <span className="sections-nav-counter">03</span>
          My services
        </a>
      </li>
      <li className="sections-nav-item">
        <a href="#section-04" className="nav-link sections-nav-link goto-section">
          <span className="sections-nav-counter">04</span>
          Skills
        </a>
      </li>
      <li className="sections-nav-item">
        <a href="#section-05" className="nav-link sections-nav-link goto-section">
          <span className="sections-nav-counter">05</span>
          Facts
        </a>
      </li>
      <li className="sections-nav-item">
        <a href="#section-06" className="nav-link sections-nav-link goto-section">
          <span className="sections-nav-counter">06</span>
          Experiences
        </a>
      </li>
      {/* <li className="sections-nav-item">
        <a href="#section-07" className="nav-link sections-nav-link goto-section">
          <span className="sections-nav-counter">07</span>
          References
        </a>
      </li> */}
      <li className="sections-nav-item">
        <a href="#section-08" className="nav-link sections-nav-link goto-section">
          <span className="sections-nav-counter">08</span>
          My Work
        </a>
      </li>
      <li className="sections-nav-item">
        <a href="#section-09" className="nav-link sections-nav-link goto-section">
          <span className="sections-nav-counter">09</span>
          Testimonials
        </a>
      </li>
      <li className="sections-nav-item">
        <a href="#section-10" className="nav-link sections-nav-link goto-section">
          <span className="sections-nav-counter">10</span>
          Contact
        </a>
      </li>
      <li className="sections-nav-item">
        <div className="sections-nav-info">
          <a href="mailto:info@rishikumarnirmal.online">info@rishikumarnirmal.online</a><br />
          <a href="tel:+917973490508">+91.797.3490.508</a>
        </div>
      </li>
    </ul>
  </nav>
</div>

        )
    }
}
