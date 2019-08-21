import React, { Component } from 'react';
import Header from '../components/Header.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity,faBriefcase, faGolfBall } from '@fortawesome/free-solid-svg-icons';
import { faGithub,faTwitter } from '@fortawesome/free-brands-svg-icons';
import '../../styles/Resume.scss';

class Resume extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className='resume'>
        <Header className='r-header' title="Resume"/>
        <div className='resume-body'>
          <div className='r-column1'>
            <div className='r-photo blue-border'>
              <img className='r-profile' src="https://source.unsplash.com/user/erondu/300x400"/>
              <div className='r-social'>
                <h2 className='r-smsubtitle blue-text'>Social</h2>
                <a className='r-smlink' href='https://github.com/btatkinson'>
                  <div className='r-socialrow'>
                      <FontAwesomeIcon className='r-smicon' icon={faGithub} />
                      <p className='r-smtext'>Github</p>
                  </div>
                </a>
                <a className='r-smlink' href='https://twitter.com/BlakeTAtkinson'>
                  <div className='r-socialrow'>
                    <FontAwesomeIcon className='r-smicon' icon={faTwitter} />
                    <p className='r-smtext'>Twitter</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className='r-column2'>
            <div className='r-panel green-border'>
              <h2 className='r-subtitle green-text'>Work Experience</h2>
              <p className='r-info'>Sample paragraph</p>
            </div>
            <div className='r-panel orange-border'>
              <h2 className='r-subtitle orange-text'>Education</h2>
              <p className='r-info'>Sample paragraph</p>
            </div>
            <div className='r-panel pink-border'>
              <h2 className='r-subtitle pink-text'>Computer Languages</h2>
              <p className='r-info'>Sample paragraph</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}



export default Resume
