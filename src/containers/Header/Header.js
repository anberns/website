import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    gitHandler = () => {
        window.open('https://github.com/anberns');
    }
    linkedHandler = () => {
        window.open('https://linkedin.com/in/aaron-berns-70128355');
    }
    render () {

        return (
            <div className="header">
                <div className="overlay">
                    <div className="text">
                        <h1>Projects</h1>
                        <h3>Aaron Berns</h3>
                        <input type="image" src={require("../../images/github.png")} className="Thumb" onClick={this.gitHandler}/>
                        <input type="image" src={require("../../images/linkedin.dms")} className="Thumb" onClick={this.linkedHandler}/>    
                        <a href="mailto:anberns@gmail.com"><img src={require("../../images/email.png")} className="Thumb"/></a>
                    </div>
                </div>

            </div>
        );
    }
}

export default Header;