import React, {Component} from "react"
import {render} from "react-dom"

class Counter extends Component {
  constructor() {
    super();
    this.state = {num:0}
  }

  handleClick = ()=>{
    // setState方法是异步的,
    // vue中，改变值的话，是异步渲染到页面上的，直接获取dom不准确
    this.setState({
      num: this.state.num+1
    },()=>{
      // 可以在回调函数中获取最新的状态值
      // console.log(this.state.num);
    })
    // console.log(this.state.num);
  }

  componentWillMount() {
    console.log('1.componentWillMount');
  }

  componentDidMount() {
    console.log('3.componentDidMount');
  }

  /*父组件是没有这个生命周期的 
    componentWillReceiveProps() {
    console.log('.........................');
  } */

  // 新的属性
  // 新的状态
  shouldComponentUpdate(newProps, newState) {
    console.log("newProps", "newState", newProps, newState);
    console.log("oldProps", "oldState", newProps, this.state);
    console.log('4.shouldComponentUpdate 组件是否要进行更新');
    if(newState.num % 5 === 0) {
      return true;
    }
    return false;
  }

  componentWillUpdate() {
    console.log('5.componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('6.componentDidUpdate');
  }

  render() {
    console.log('2.render');
    return (
      <div style={{border:"1px solid red", padding:'5px'}}>
        <p>{this.state.num}</p>
        <button onClick={this.handleClick}>+</button>
        <hr/>
        <SubCounter num={this.state.num}/>
      </div>
    );
  }
}

class SubCounter extends Component {
  componentWillReceiveProps() {
    console.log('==>SubConter', 'componentWillReceiveProps');
  }
  
  shouldComponentUpdate(newProps, newState) {
    console.log("==>newProps", newProps);
    console.log("==>oldProps", this.props);
    if(newProps.num % 3 === 0) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <div style={{border:"1px solid blue"}}>
        <p>{this.props.num}</p>
      </div>
    );
  }
}

render(<Counter/>,document.getElementById('root'));