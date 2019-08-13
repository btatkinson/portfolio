import React, { Component } from 'react';
import Header from '../components/Header.js';
import OptionButton from '../components/OptionButton.js';
import '../../styles/Portfolio.scss';

class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedButton:{
        'writing':true,
        'python':false,
        'webdev':false
      },

    }
  }

  render(){
    return(
      <div className='portfolio-container'>
        <Header title="Portfolio"/>
        <div className='portfolio-body'>
          <div className='portfolio-options'>
            <OptionButton option='writing' selected='false'/>
            <OptionButton option='python' selected='false'/>
            <OptionButton option='webdev' selected='false'/>
          </div>
          <div className='p-writing'>
          </div>
          <div className='p-python'>
          </div>
          <div className='p-webdev'>
          </div>
        </div>
      </div>
    )
  }
}



export default Portfolio
