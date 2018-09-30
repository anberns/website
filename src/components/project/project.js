import React from 'react';
import Aux from '../../hoc/aux';
import './project.css';
import Images from '../../images/index';

const project = ( props ) => {
    let image = null;
    if (props.data.img === "graphical") {
        image = Images.graphical;
    } else if (props.data.img === "monitor") {
        image = Images.monitor;
    } else {
        image = Images.rapid;
    }

    let buttonClass = "button";
    let disabled = false;
    if (props.data.buttonState === "disabled") {
        buttonClass += " not-allowed";
        disabled = true;
    }

    const open = () => {
        window.open(props.data.appUrl);
    }
    
   return (
       <Aux>
           <div class="row">
                <div class="column">
                    <img src={image} className="img"/>
                </div>
                <div class="column">
                    <h2>{props.data.heading}</h2>
                    <p>{props.data.text}</p>
                    <p>
                    <span className="bold">Languages and Technologies: </span>
                    {props.data.languages}</p>
                    <form>
                        <input className = {buttonClass} disabled={disabled} type="button" value={props.data.buttonValue} onClick={open} />
                    </form>
                    <a class="a" href={props.data.docs} target="_blank">Documentation</a>
                    <a class="a" href={props.data.code} target="_blank">Code</a>
                </div>
            </div>
       </Aux>
   )
}

export default project;