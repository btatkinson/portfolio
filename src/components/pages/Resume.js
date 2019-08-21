import React, { Component } from 'react';
import Header from '../components/Header.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity,faBriefcase, faDesktop } from '@fortawesome/free-solid-svg-icons';
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
              <div className='photo-wrap'>
                <img className='r-profile' src="https://source.unsplash.com/user/erondu/300x300"/>
              </div>
              <div className='r-social'>
                <h2 className='r-smsubtitle blue-text'>Social</h2>
                <div className='r-socialrow'>
                  <a className='r-smlink git-link' href='https://github.com/btatkinson'>
                    <FontAwesomeIcon className='r-smicon' icon={faGithub} />
                    <p className='r-smtext'>Github</p>
                  </a>
                </div>
                <div className='r-socialrow'>
                  <a className='r-smlink twit-link' href='https://twitter.com/BlakeTAtkinson'>
                    <FontAwesomeIcon className='r-smicon' icon={faTwitter} />
                    <p className='r-smtext'>Twitter</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='r-column2'>
            <div className='r-panel green-border'>
              <h2 className='r-subtitle green-text'>
                <FontAwesomeIcon className='r-icon' icon={faBriefcase} />Work Experience
              </h2>

              <h3 className='r-subsect'>
                  Freelance Developer, Oct 2017-Present
              </h3>
              <div className='r-desc'>
                <p className='r-info'>Offered a variety of developer services for various clients. Key projects include:</p>
                <ul className='r-info'>
                  <li className='r-bullet'>Created & currently maintain <a className='cl-link' href='http://www.collaborativelaw.com'>Cincinnati Academy of Collaborative Professionals website.</a> Built a custom wordpress theme from scratch. Utilized PHP, Javascript, and existing plugins to create members area that includes a forum, a group calendar,
                      and other features.
                  </li>
                  <li className='r-bullet'>Developed horseracing software for a private client. Software scraped horseracing data from a variety of sources, and then used feature engineering to create novel statistics and model inputs. Built a regression ensemble model to predict races.
                  </li>
                  <li className='r-bullet'>Worked with <a className='cl-link' href='http://www.ralphvr.com'>RalphVR</a> on a three dimensional billiards augmented reality video game. Gained experience with object-oriented programming and group version control.
                  </li>
                </ul>
              </div>

              <h3 className='r-subsect'>
                  Awesome Inc. Bootcamp, May 2017-Oct 2017
              </h3>
              <div className='r-desc'>
                <p className='r-info'>A 4-month intense "bootcamp" that taught me how to code.</p>
                <ul className='r-info'>
                  <li className='r-bullet'>Built web applications with HTML, CSS, JavaScript, AngularJS, three.js, and Laravel
                  </li>
                  <li className='r-bullet'>Used Github version control software to collaborate with other students from various backgrounds
                  </li>
                </ul>
              </div>

              <h3 className='r-subsect'>
                  Retirement Investment Specialist, Kentucky Retirement Systems, April 2016-April 2017
              </h3>
              <div className='r-desc'>
                <ul className='r-info'>
                  <li className='r-bullet'>Coordinated capital calls and distributions for $14.8 billion retirement system
                  </li>
                  <li className='r-bullet'>Inspected operational due diligence practices of hedge funds and alternative assets
                  </li>
                  <li className='r-bullet'>Created monthly press releases and investment reports
                  </li>
                  <li className='r-bullet'>Promoted in January 2017 from Investment Operations
                  </li>
                </ul>
              </div>

              <h3 className='r-subsect'>
                  Engineering Tech, Magnum Hunter Production, June 2013-March 2016
              </h3>
              <div className='r-desc'>
                <ul className='r-info'>
                  <li className='r-bullet'>Created live accounting spreadsheets for horizontal well projects
                  </li>
                  <li className='r-bullet'>Recorded, distributed, and displayed oil and gas production from 3,000 wells
                  </li>
                  <li className='r-bullet'>Promoted in June 2015 from Jr. Operations Analyst
                  </li>
                </ul>
              </div>
              <h3 className='r-subsect'>
                  Contributing Intern, RealClearScience.com, 2013-14
              </h3>
              <div className='r-desc'>
                <p className='r-info'>Authored science-related articles to be published for a mass science-literate audience.</p>
              </div>
            </div>
            <div className='r-panel orange-border'>
              <h2 className='r-subtitle orange-text'>
                <FontAwesomeIcon className='r-icon' icon={faDesktop} />Key Skills
              </h2>
              <h3 className='r-subsect'>Primary:</h3>
              <div className="graph-cont">
                <div className="r-bar r-bar1"><p className='r-btext'>Python</p></div>
                <div className="r-bar r-bar2"><p className='r-btext'>React</p></div>
                <div className="r-bar r-bar2"><p className='r-btext'>HTML5</p></div>
                <div className="r-bar r-bar2"><p className='r-btext'>CSS3/SCSS</p></div>
                <div className="r-bar r-bar2"><p className='r-btext'>Javascript</p></div>
                <div className="r-bar r-bar2"><p className='r-btext'>NodeJS</p></div>
                <div className="r-bar r-bar2"><p className='r-btext'>Github</p></div>
                <div className="r-bar r-bar3"><p className='r-btext'>PHP</p></div>
              </div>
              <h3 className='r-subsect'>Also I have experience with:</h3>
              <ul className='r-info'>
                <li>C#</li>
                <li>Angular/Typescript</li>
                <li>Photoshop</li>
              </ul>
            </div>
            <div className='r-panel pink-border'>
              <h2 className='r-subtitle pink-text'>
                <FontAwesomeIcon className='r-icon' icon={faUniversity} />Education
              </h2>
              <h3 className='r-subsect'>
                  Transylvania University
              </h3>
              <p className='r-info'>Bachelor of the Arts in Physics and Chemistry graduated May 2013. Math Minor.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}



export default Resume
