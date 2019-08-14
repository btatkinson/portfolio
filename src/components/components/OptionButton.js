import React, { Component } from 'react';
import '../../styles/OptionButton.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faDesktop } from '@fortawesome/free-solid-svg-icons';
import { faPython } from '@fortawesome/free-brands-svg-icons';

class OptionButton extends Component {
  constructor(props) {
    super(props);

    this.handleSelect = this.handleSelect.bind(this);
  }

  getIcon=()=>{
    if(this.props.option=='Writing'){
      return <FontAwesomeIcon className='OB-icon' icon={faEdit} />
    }
    if(this.props.option=='Python'){
      return <FontAwesomeIcon className='OB-icon' icon={faPython} />
    }
    if(this.props.option=='Web'){
      return <FontAwesomeIcon className='OB-icon' icon={faDesktop} />
    }
    else{
      return <div></div>
    }
  }

  handleSelect(selected){
    this.props.newSelect(this.props.option);
  }

  render(){
    const icon = this.getIcon();
    return(
      <div className='OB-container'>
        <div
          className={`OptionButton ${this.props.option} ${this.props.selected ? 'OP-selected' : ''}`}
          onClick={this.handleSelect}>
          {icon}
        </div>
      </div>
    )
  }
}



export default OptionButton
