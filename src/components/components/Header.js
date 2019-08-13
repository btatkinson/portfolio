import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import '../../styles/Header.scss';

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div className='header'>
        <div className='title-group'>
          <h1 className='hd-title'>{this.props.title}</h1>
          <Link to='/' className='hd-link'>
            <FontAwesomeIcon className='hd-link-text' icon={faChevronCircleLeft} />
            <h3 className='hd-link-text'> Back</h3>
          </Link>
        </div>
      </div>
    )
  }
}



export default Header
