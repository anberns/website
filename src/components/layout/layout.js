import React from 'react';
import Header from '../../containers/Header/Header';
import Footer from '../../containers/Footer/Footer';
import Aux from '../../hoc/aux';
import Projects from '../../containers/Projects/Projects';
import './layout.css';

const layout = () => {
    return (
        <Aux >
            <Header />
            <Projects />
            <Footer />
        </Aux>
    )

}

export default layout;