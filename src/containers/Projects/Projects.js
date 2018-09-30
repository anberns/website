import React, { Component } from 'react';
import Aux from '../../hoc/aux';
import './Projects.css';
import Project from '../../components/project/project';

class Projects extends Component {
    state = {
        graphical: {
            heading: "Graphical Webcrawler",
            img: "graphical",
            text: "My Post-Baccalaureate capstone project that I completed with two fellow students. Built using Javascript, d3.js, Jinja and Bootstrap on the frontend and Python with Flask on the backend, it takes a starting website and follows a specified number of random links if a depth-first search is chosen, or all links for each page if a breadth-first search is chosen. As the links are visited, their page data is sent to the frontend of the application through a websocket, allowing the d3.js graph to update in real time. Crawls are stored in a MongoDB database and can be retrieved and re-displayed. I was responsible for creating the backend as well as getting the application hosted, connecting the database, and connecting the visualizer with the webcrawler application via a websocket.",
            languages: "Javascript, Python, Flask, MongoDB, Flask-sockets, d3.js, Heroku",
            appUrl: "https://graphicalwebcrawler.herokuapp.com",
            buttonValue: "Run App",
            buttonState: "enabled",
            docs: "https://github.com/anberns/technicalWriting/blob/master/Graphical%20Web%20Crawler%20Final%20Report.pdf", 
            code: "https://github.com/anberns/grus"
        },
        monitor: {
            heading: "Room Monitor",
            img: "monitor",
            text: "This personal project allowed me to explore the intersection of hardware and software by using two Raspberry Pi's connected over an ad hoc network to monitor and report room conditions. One unit is equipped with several sensors including temperature, smoke, motion and sound. It monitors the environment concurrently by connecting the sensors to the Raspberry Pi's GPIO pins, which are able to trigger kernel interrupts. Sensor signals are sent to the display unit, which reports conditions on a small OLED screen, and sounds a small buzzer in the event of an emergency. A menu function allows the user to adjust the sensor sensitivity as well as the acceptable room temperature range. The display unit software is written in Python and concurrently monitors and responds to sensor messages while also running the settings function.",
            languages: "C, Python, Linux, Raspberry Pi, RPi.GPIO",
            appUrl: "",
            buttonValue: "Demonstration",
            buttonState: "disabled",
            docs: "https://github.com/anberns/pi/blob/master/wireless_room_monitor_description.pdf", 
            code: "https://github.com/anberns/pi"
        },
        rapid: {
            heading: "Rapid Exchange",
            img: "rapid",
            text: "In order to round out my web development knowledge, I'm currently working on an educational application that will help students with dyslexia learn to recognize and blend together individual phonemes, or letter sounds. It uses Node.js on the backend and React with Redux on the frontend. Authentication is handled by Google&#8217s oAuth and user data is stored and accessed using Mongoose and MongoDB.",
            languages: "Javascript, React, Redux, Node, MongoDB",
            appUrl: "",
            buttonValue: "Run App",
            buttonState: "disabled",
            docs: null, 
            code: "https://github.com/anberns/react_app"
        }
    }
   
    
    render () {
    
        return (
            <Aux >
                <Project data={this.state.graphical} />
                <hr className="hr"/>
                <Project data={this.state.monitor} />
                <hr className="hr"/>
                <Project data={this.state.rapid} />
            </Aux>
        )
    }
}
export default Projects;