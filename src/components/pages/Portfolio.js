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
        'web':false
      },
    }
  }

  selectButton=(selected)=>{
    if (selected==='Writing'){
      this.setState({selectedButton:{
        'writing':true,
        'python':false,
        'web':false
      }})
    }
    if (selected==='Python'){
      this.setState({selectedButton:{
        'writing':false,
        'python':true,
        'web':false
      }})
    }
    if (selected==='Web'){
      this.setState({selectedButton:{
        'writing':false,
        'python':false,
        'web':true
      }})
    }
  }

  render(){
    return(
      <div className='portfolio'>
        <Header title="Portfolio"/>
        <div className='portfolio-body'>
          <div className='portfolio-options'>
            <OptionButton
              option='Writing'
              selected={this.state.selectedButton.writing}
              newSelect={this.selectButton}/>

            <OptionButton
              option='Python'
              selected={this.state.selectedButton.python}
              newSelect={this.selectButton}/>
            <OptionButton
              option='Web'
              selected={this.state.selectedButton.web}
              newSelect={this.selectButton}/>
          </div>
          <div className='p-listItems'>
            <div className='p-writing'>
            </div>
            <div className='p-python'>
            </div>
            <div className='p-web'>
            </div>
          </div>
        </div>
      </div>
    )
  }
}



export default Portfolio
