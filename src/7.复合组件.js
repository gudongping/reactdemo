import React, {Component} from "react"
import {render} from "react-dom"
import "bootstrap/dist/css/bootstrap.css"

class Panel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'black'
    }
  }
  render() {
    return (
      <div className="panel panel-default">
        <span><button onClick={()=>{this.setState({color:'red'})}}>红</button></span>
        <span><button onClick={()=>{this.setState({color:'green'})}}>绿</button></span>
        <PanelHead head = {this.props.head} color={this.state.color}/>
        <PanelBody body = {this.props.body}/>
        <PanelFooter footer = {this.props.footer}/>
      </div>
    );
  }
}
class PanelHead extends Component {
  render() {
    return (
      <div className="panel-heading" style={{color:this.props.color}}>
        {this.props.head}
      </div>
    );
  }
}
class PanelBody extends Component {
  render() {
    return (
      <div className="panel-body">
        {this.props.body}
      </div>
    );
  }
}
class PanelFooter extends Component {
  render() {
    return (
      <div className="panel-footer">
        {this.props.footer}
      </div>
    );
  }
}
render(<Panel head="头" body="体" footer="尾"/>, document.getElementById('root'));

