import React,{Component} from "react"
import ReactDOM, {render} from "react-dom"
import PropTypes from "prop-types"

class Person extends Component {
  // 默认属性，es6中是一个对象，
  // es5是一个函数，getDefaultProps
  static defaultProps = {
      name: '無名氏'
  }
  // 如果对属性有类型限制
  static propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired
  }
  constructor() {
    super();
    this.state = {happy:''}
  }
  handleClick = ()=>{
    this.setState({
      happy: !this.state.happy
    });
  }
  render() {
    // 属性必须要有默认值存在
    let heart = this.state.happy ? '开心':'难过'
    return (
      <div>
        <p>姓名: {this.props.name}</p>
        <p>年龄: {this.props.age}</p>
        <p>心情: {heart}</p>
        {/*用es6语法的话，那么函数必须定义成箭头函数*/}
        {/*用es5语法的话，那么函数必须要bind一下*/}
        <button onClick={this.handleClick.bind(this)}>改变</button>
      </div>
    )
  }
}

render(<Person age={100}/>, document.getElementById('root'));