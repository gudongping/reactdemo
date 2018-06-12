import React, {Component} from "react"
import {render} from "react-dom"

class Input extends Component {
  constructor() {
    super();
    this.state = {
      b: ''
    }
  }

  // 非受控组件，与状态无关，是通过ref来定位dom，然后获取原生dom的值
  handleChange = (e)=> {
    console.log(this.refs.a.value);
    console.log(this.b.value);
  }
  // 不写value，或者写defaultValue都是非受控组件
  render() {
    return (
      <div>
        <p><input type="text" onChange={this.handleChange} ref='a'/></p>
        <p><input type="text" onChange={this.handleChange} ref={ref=>this.b = ref}/></p>
      </div>
    );
  }
}

render(<Input/>, document.getElementById('root'));
