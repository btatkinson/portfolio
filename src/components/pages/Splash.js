import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Splash.scss';

class Splash extends Component {
  
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className='splash'>
        <div className='sp-container'>
          <div className='sp-header'>
            <h1>Blake Atkinson</h1>
            <h4>Web Design and Data Science</h4>
          </div>
          <div className='spr-box'>
            <Link to='/portfolio'>
            Portfolio</Link>
          </div>
          <div className='spp-box'>
            <Link to='/resume'>Resume</Link>
          </div>
        </div>
      </div>
    )
  }
}








export default Splash
