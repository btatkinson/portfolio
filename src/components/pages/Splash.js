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
            <Link className='sp-link' to='/portfolio'>
              <div className='hover-wrap'>
                <h1 className='sp-page'>Portfolio</h1>
              </div>
            </Link>
            <br/>
            <Link className='sp-link' to='/resume'>
              <div className='hover-wrap'>
                <h1 className='sp-page'>Resume</h1>
              </div>
            </Link>
            <br/>
            <Link className='sp-link' to='/contact'>
              <div className='hover-wrap'>
                <h1 className='sp-page'>Contact</h1>
              </div>
            </Link>
            <br/>
          </div>
        </div>
      </div>
    )
  }
}








export default Splash
