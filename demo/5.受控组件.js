import React, {Component} from "react"
import {render} from "react-dom"

class Input extends Component {
  constructor() {
    super();
    this.state = {val:0}
  }

  handleChange = (e)=> {
    this.setState({
      val: e.target.value
    })
  }

  render() {
    return (
      <div>
        <p>{this.state.val}</p>
        <input type="text" onChange={this.handleChange} value={this.state.val}/>
      </div>
    );
  }
}

render(<Input/>, document.getElementById('root'));
