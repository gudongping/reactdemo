import React, {Component} from "react"
import {render} from "react-dom"

let Observer = {
  obj: {},
  on: function(type, fn) {
    if(!this.obj[type]) {
      this.obj[type] = [fn];
    } else {
      this.obj[type].push(fn)
    }
  },
  fire: function(type) {
    let args = [].slice.call(arguments).slice(1);
    let arr = this.obj[type];
    arr.forEach(fn => {
      fn.apply(null,args);
    });
  }
}

class Parent extends Component {
  constructor() {
    super();
    this.state = {
      color:''
    }
    Observer.on('changeColor', (args)=>{
      this.setState({
        color: args
      });
    });
  }
  handleClick=(color, e)=>{
    console.log('color',color);
    /* this.setState({
      color: color
    }) */
  }
  render() {
    return (
      <div style={{border:"1px solid red", width: '300px', height: '300px', backgroundColor:this.state.color}}>
        我是父组件
        <Child handler={this.handleClick}/>
      </div>
    );
  }
}

class Child extends Component {
  constructor() {
    super();
    this.state = {
      colors:['red', 'blue', 'black', 'yellow','pink','green']
    }
  }

  handleClick(color) {
    // this.props.handler.call(this,color);
    Observer.fire('changeColor', color);
  }

  render() {
    return (
      <div>
        <p style={{border:'1px solid blue', padding:'10px'}}>
          <span>我是子组件</span>
          {/*<button onClick={this.props.handler.bind(this,this.state.colors[Math.round(Math.random()*5)])}>点我变色</button>*/}
          {/*<button onClick={this.handleClick.bind(this, this.state.colors[Math.round(Math.random()*5)])}>点我变色</button>*/}
          <button onClick={this.handleClick.bind(this, this.state.colors[Math.round(Math.random()*5)])}>点我变色</button>
        </p>
      </div>
    );
  }
}

render(<Parent />, document.getElementById('root'));

