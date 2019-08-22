import React, { Component } from 'react';
import '../../styles/ProjectItem.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ProjectItem extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className='project-item-container'>
        <a className='project-link' href={this.props.info.url}>
        <div className='project-item'>
          <div className='proj-icon pi-pad'>
            <FontAwesomeIcon className='OB-icon' icon={this.props.info.icon} />
          </div>
          <div className='proj-title'>
            <div className='pt-wrapper pi-pad'>
              <h2>{this.props.info.title}</h2>
              <p>{this.props.info.subtitle}</p>
              <div className='m-proj-skills'>
                <p>{this.props.info.skill1} • {this.props.info.skill2} • {this.props.info.skill3}</p>
              </div>
            </div>
          </div>
          <div className='proj-skills pi-pad'>
            <div>
              <h4>Skills:</h4>
            </div>
            <div>
              <p>{this.props.info.skill1}</p>
              <p>{this.props.info.skill2}</p>
              <p>{this.props.info.skill3}</p>
            </div>
          </div>
        </div>
        </a>
      </div>
    )
  }
}



export default ProjectItem
