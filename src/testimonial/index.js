import React, { Component } from 'react'

export default class index extends Component {
    render() {
        return (
           <div>
  <section id="section-09" className="section animation">
    <div className="section-body">
      <h2 className="section-title animation-translate-overline animation-item-1">Testimonials</h2>
      <div id="carousel" className="carousel slide animation-translate animation-item-2" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="testimonial">
              <img src="assets/img/testimonial_1.jpg" className="testimonial-img" alt="James Smith" />
              <div className="testimonial-body">
                <h3 className="testimonial-title">James Smith</h3>
                <h4 className="testimonial-subtitle">WEBSITE OWNER — <a href="#">www.website.com</a></h4>
                <p className="testimonial-text">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                  tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.  At vero
                  eos et accusam et justo duo dolores et ea rebum.  Stet clita kasd gubergren, no sea
                  takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="testimonial">
              <img src="assets/img/testimonial_2.jpg" className="testimonial-img" alt="James Smith" />
              <div className="testimonial-body">
                <h3 className="testimonial-title">Alice Jones</h3>
                <h4 className="testimonial-subtitle">E-SHOP OWNER — <a href="#">www.eshop.com</a></h4>
                <p className="testimonial-text">
                  At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                  gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </div>
        </div>
        <ol className="carousel-indicators">
          <li data-target="#carousel" data-slide-to={0} className="active" />
          <li data-target="#carousel" data-slide-to={1} />
        </ol>
        <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
    <div className="section-footer animation-translate animation-item-3">
      <a className="section-next goto-section" href="#section-10">
        <span className="section-next-counter">09/10</span>
        <span className="section-next-label">Next chapter</span>
        <span className="section-next-icon" />
      </a>
    </div>
  </section>
</div>

        )
    }
}
