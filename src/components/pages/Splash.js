import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
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
            <h4>Data Science • Front End Web Development</h4>
          </div>
          <div className='sp-body'>
            <Link className='sp-link' to='/portfolio'><h1 className='bump-hover'>Portfolio</h1></Link>
            <Link className='sp-link' to='/resume'><h1 className='bump-hover'>Resume</h1></Link>
            <Link className='sp-link' to='/contact'><h1 className='bump-hover'>Contact</h1></Link>
          </div>
        </div>
      </div>
    )
  }
}








export default Splash
