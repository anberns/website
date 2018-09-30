import React from 'react';
import Aux from '../../hoc/aux';
import './homepage.css';
import Images from '../../images/index';

const homepage = (props) => {
    return (
        <Aux >
            <div >
                <table onClick={props.clicked} style={{cursor: "pointer"}}>
                    <tr>
                        <td><img src={Images.js} className="js"/></td>
                        <td><img src={Images.c} className="c"/></td>
                        <td><img src={Images.py} className="py"/></td>
                    </tr>
                    <tr>
                        <td><img src={Images.react} className="react"/></td>
                        <td><img src={Images.mongo} className="mongo"/></td>
                        <td><img src={Images.linux} className="linux"/></td>
                    </tr>
                </table>
            </div>
        </Aux>
    )
}

export default homepage;
