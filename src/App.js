import React, { Component,useState } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition, Transition } from 'react-transition-group';
import Splash from './components/pages/Splash.js';
import Resume from './components/pages/Resume.js';
import Portfolio from './components/pages/Portfolio.js';
import './styles/Transitions.scss';
import './styles/App.scss';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      splashClasses:{
        size:'splash',
        text:'fade-in',
        header:'hd-hide',
      },
      showResume: false,
      showPortfolio: false,
    }
  }

  render(){
    return (
      <Route render={({ location }) => {
        const { pathname, key } = location;
        return (
          <TransitionGroup component={null}>
            <CSSTransition
              key={key}
              timeout={{enter: 2000, exit: 2000}}
              classNames={'transition'}
            >
              <Switch location={location}>
                <Route exact path="/" component={Splash}/>
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/resume" component={Resume} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )
      }}/>
    );
  }
}

export default App;
