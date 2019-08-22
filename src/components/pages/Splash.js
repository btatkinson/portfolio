import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { Animated } from "react-animated-css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import '../../styles/Splash.scss';

class Splash extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showContact:true,
      beginContact: true,
      showInfo: false,
      beginInfo: false,
    }
  }

  getInfo = () => {
    this.setState({
      showContact:!this.state.showContact,
    });
    setTimeout(()=>{
      this.setState({
        beginInfo:!this.state.beginInfo,
        beginContact: !this.state.beginContact,
        showInfo:!this.state.showInfo,
      });
    },1050);
  };

  flipBack = () => {
    this.setState({
      showInfo:!this.state.showInfo,
    });
    setTimeout(()=>{
      this.setState({
        beginInfo:!this.state.beginInfo,
        beginContact: !this.state.beginContact,
        showContact:!this.state.showContact,
      });
    },1050);
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
            <Animated animationIn="flipInX" animationOut="flipOutX" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
              <Link className='sp-link' to='/portfolio'>
                <div className='hover-wrap'>
                  <h1 className='sp-page'>Portfolio</h1>
                </div>
              </Link>
            </Animated>
            <Animated animationIn="flipInX" animationOut="flipOutX" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
              <Link className='sp-link' to='/resume'>
                <div className='hover-wrap'>
                  <h1 className='sp-page'>Resume</h1>
                </div>
              </Link>
            </Animated>
            {this.state.beginContact && (
            <Animated animationIn="flipInX" animationOut="flipOutX" animationInDuration={1000} animationOutDuration={1000} isVisible={this.state.showContact}>
              <div onClick={this.getInfo} className='sp-link'>
                <div className='hover-wrap'>
                  <h1 className='sp-page'>Contact</h1>
                </div>
              </div>
            </Animated>)}
            {this.state.beginInfo && (
              <Animated animationIn="flipInX" animationOut="flipOutX" animationInDuration={1000} animationOutDuration={1000} isVisible={this.state.showInfo}>
                <div onClick={this.flipBack} className='sp-link'>
                  <div className='hover-wrap'>
                    <h1 className='sp-page'>Back</h1>
                  </div>
                </div>
              </Animated>
            )}
          </div>
        </div>
      </div>
    )
  }
}








export default Splash
