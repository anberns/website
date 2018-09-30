import React, { Component } from 'react';
import Aux from '../../hoc/aux';
import './Footer.css';

class Footer extends Component {

    gitHandler = () => {
        window.open('https://github.com/anberns');
    }
    linkedHandler = () => {
        window.open('https://linkedin.com/in/aaron-berns-70128355');
    }
    componentDidMount = () => {
        document.body.style.background = "white";
    }
    render () {
    
        return (
            <Aux >
                <div className="Footer">
                    <input type="image" src={require("../../images/github.png")} className="Thumb" onClick={this.gitHandler}/>
                    <input type="image" src={require("../../images/linkedin.dms")} className="Thumb" onClick={this.linkedHandler}/>    
                    <a href="mailto:anberns@gmail.com"><img src={require("../../images/email.png")} className="Thumb"/></a>
                </div>
            </Aux>
        )
    }
}
export default Footer;