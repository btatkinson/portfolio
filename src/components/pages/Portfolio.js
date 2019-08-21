import React, { Component } from 'react';
import Header from '../components/Header.js';
import OptionButton from '../components/OptionButton.js';
import ProjectItem from '../components/ProjectItem.js';
import { pwriting }from '../../objects/portfolio-writing.js';
import { pweb }from '../../objects/portfolio-web.js';
import { ppython }from '../../objects/portfolio-python.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
    const portfolioItems = [];
    const wrILength = Object.keys(pwriting).length;

    for (let i = 0; i < wrILength; i++) {
      portfolioItems.push(<ProjectItem key={i} info={pwriting[i]}/>);
    };

    const webItems = [];
    const wILength = Object.keys(pweb).length;
    for (let i = 0; i < wILength; i++) {
      webItems.push(<ProjectItem key={i} info={pweb[i]}/>);
    };


    const pythonItems = [];
    const pILength = Object.keys(ppython).length;
    for (let i = 0; i < pILength; i++) {
      pythonItems.push(<ProjectItem key={i} info={ppython[i]}/>);
    };

    return(
      <div className='portfolio'>
        <Header className='p-header' title="Portfolio"/>
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
              {this.state.selectedButton.writing ? portfolioItems : ''}
            </div>
            <div className='p-python'>
              {this.state.selectedButton.python ? pythonItems : ''}
            </div>
            <div className='p-web'>
              {this.state.selectedButton.web ? webItems : ''}
            </div>
          </div>
        </div>
      </div>
    )
  }
}



export default Portfolio
