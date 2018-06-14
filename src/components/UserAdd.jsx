import React, {Component} from "react"
import {Prompt} from "react-router-dom"

export default class UserAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blocking: false
    }
  }

  handleChange = (e) => {
    this.setState({
      blocking: e.target.value ? true : false
    });
  }

  handleSubmit = (e)=>{
    e.preventDefault();
    
    let name = this.name.value
    let userStr = localStorage.getItem('users');
    let users = userStr ? JSON.parse(userStr) : [];
    users.push({id:Date.now(), name});

    localStorage.setItem('users', JSON.stringify(users));
    this.setState({
      blocking: false
    },()=>{
      this.props.history.push('/user/list');
    });
  }

  render() {
    return (
      <div>
        {/*只有路由跳转的时候，才会起作用*/}
        <Prompt when={this.state.blocking} message={(location)=>`你確定要跳轉到${location.pathname}嗎？`}/>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="">姓名</label>
            {/*d是真實dom注入，在虛擬dom掛載的時候注入*/}
            <input type="text" className="form-control" ref={d=>{this.name=d}} onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <input type="submit" className="btn btn-primary"/>
          </div>
        </form>
      </div>
    );
  }
}