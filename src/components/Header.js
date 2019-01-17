import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1><strong>My name is Callum Fay</strong> </h1><br /> 
                    A DevOps evangelist and SRE that takes every step to make something work both
                    safely and in automation.
                    Papers & Presentations: <a href="https://docs.google.com/document/d/1LCg-6cQVqo0yLmJGkD4yIA_dcBHvBSqudOf8LZTUYvU/edit?usp=sharing">M.O.S.A.I.C</a> & <a href="https://dev-test-pres.netlify.com">Panoptic Culture</a>
                    <h1></h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
