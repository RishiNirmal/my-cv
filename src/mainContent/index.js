import React, { Component } from 'react'
import Experiences from '../experiences/index';
import Modal from '../modal/index';
import NameTitle from '../nameTitle/index';
import Projects from '../projects/index';
import Contact from '../contact/index';
import Facts from '../facts/index';
import References from '../references/index';
import Services from '../services/index';
import Skills from '../skills/index';
import Testimonial from '../testimonial/index';
import About from '../about/index';


export default class index extends Component {
    render() {
        return (
            <main className="content">
            <div className="container-fluid-limited">
              <div className="row">
                <div className="col col-xl-9">
            <NameTitle/>
            <About/>
            <Services/>
            <Skills/>
            <Facts/>
            <Experiences/>
            {/* <References/> */}
            <Projects/>
            <Testimonial/>
            <Contact/>
            
            </div>
    </div>
    </div>
    </main>
        )
    }
}
