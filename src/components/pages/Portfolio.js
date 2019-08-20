import React, { Component } from 'react';
import Header from '../components/Header.js';
import OptionButton from '../components/OptionButton.js';
import ProjectItem from '../components/ProjectItem.js';
import { pwriting }from '../../objects/portfolio-writing.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFootballBall,faBasketballBall, faGolfBall } from '@fortawesome/free-solid-svg-icons';
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
    const explInfo = {
      'title':'The 2018 Kansas City Chiefs and an Explosiveness Metric in Football',
      'subtitle': 'How do we quantify explosiveness?',
      'icon':faFootballBall,
      'skill1':'Python',
      'skill2':'Cleaning',
      'skill3':'Math',
      'url':'https://towardsdatascience.com/the-2018-kansas-city-chiefs-and-an-explosiveness-metric-in-football-c3b3fd447d73',
    }

    const projectItems = [];
    const pILength = Object.keys(pwriting).length;

    for (let i = 0; i < pILength; i++) {
      projectItems.push(<ProjectItem key={i} info={pwriting[i]}/>);
    };

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
              {projectItems}
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
