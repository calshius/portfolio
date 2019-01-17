import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><b>Want to know more? Reach out: </b></li>
                        <li><a href="https://www.linkedin.com/in/callum-fay/" className="icon fa-linkedin"><span className="label">LinkedIN</span></a></li>
                        <li><a href="https://github.com/calshius" className="icon fa-github"><span className="label">Github</span></a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
