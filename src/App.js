import React, { Component } from 'react';
import './App.css';
import Homepage from './components/homepage/homepage';
import Layout from './components/layout/layout';
import Aux from './hoc/aux';

class App extends Component {
  state = {
     home: true
  }

  homepageClickHandler= () => {
    let homeVar = this.state.home;
    if (homeVar === true) {
      homeVar = false;
    }
    this.setState({home: homeVar});
  }
  componentWillMount() {
    document.title = "Projects";
  }

  render() {

  let homepage = null;
  let projectpage = null;
  
  if (this.state.home === true) {
    homepage = (
      <Aux>
        <Homepage clicked={this.homepageClickHandler}/>
      </Aux>
    )
  }
  if (this.state.home === false) {
    projectpage = (
      <Layout />
    )
  }

    return (
      <Aux>
        {homepage}
        {projectpage}
      </Aux>
    );
  }
}

export default App;
