import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Splash.scss';

class Splash extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    const {size, text, header} = this.props.splashClasses;
    return (
      <div className={size}>
        <div className={`sp-container ${text}`}>
          <div className={`sp-header ${text}`}>
            <h1>Blake Atkinson</h1>
            <h4>Web Design and Data Science</h4>
          </div>
          <div className={`spr-box ${text}`}>
            <Link to='/portfolio'>
            Portfolio</Link>
          </div>
          <div className={`spp-box ${text}`}>
            <Link to='/resume'>Resume</Link>
          </div>
        </div>
        <div className={`hd-container ${header}`}>
          <h1>Portfolio</h1>
          <Link to='/'>Back</Link>
        </div>
      </div>
    )
  }
}








export default Splash
