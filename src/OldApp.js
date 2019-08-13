import React, { Component,useState } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Splash from './components/pages/Splash.js';
import Resume from './components/pages/Resume.js';
import Portfolio from './components/pages/Portfolio.js';
import Page from './components/helpers/Page.js';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      splashClass: 'splash',
      showResume: false,
      showPortfolio: false,
    }
  }

  transition=()=>{
    this.setState({showPortfolio:true});
  }

  toggleSplash=()=>{
    if(this.state.splashClass==='splash'){
      this.setState({splashClass:'condensed'})
    }
    else{
      this.setState({splashClass:'splash'})
    }
  }

  render(){
    return (
      <div className='App'>
        <Splash size={this.state.splashClass} transition={this.transition}/>
        <CSSTransition
          in={this.state.showPortfolio}
          timeout={300}
          classNames="portfolio"
          unmountOnExit
          onEnter={this.toggleSplash}
          onExited={this.toggleSplash}
        >
          <Portfolio />
        </CSSTransition>
      </div>
    );
  }
}

export default App;
