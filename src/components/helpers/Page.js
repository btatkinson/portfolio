import React, { Component } from 'react';

const ani_duration = 500;

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path: this.props.location
    }
  }

  componentDidMount(){
    setTimeout(()=>{
      console.log('componentDidMount');
      if (this.state.path ==='/'){
        this.setState({className:'splash'});
      }
      else if (this.state.path ==='/portfolio'){
        this.setState({className:'portfolio'});
      }
      else if (this.state.path ==='/resume'){
        this.setState({className:'resume'});
      }
      else {
        this.setState({className:'splash'})
      }
    },ani_duration)
  }

  render(){
    return (<div className={this.state.className}>{this.props.children}</div>)
  }
}

export default Page;
