import React, {Component} from "react"

export default class UserAdd extends Component {
  handleSubmit = (e)=>{
    e.preventDefault();
    
    let name = this.name.value
    let userStr = localStorage.getItem('users');
    let users = userStr ? JSON.parse(userStr) : [];
    users.push({id:Date.now(), name});

    localStorage.setItem('users', JSON.stringify(users));
    this.props.history.push('/user/list');
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="">姓名</label>
            {/*d是真實dom注入，在虛擬dom掛載的時候注入*/}
            <input type="text" className="form-control" ref={d=>{this.name=d}}/>
          </div>
          <div className="form-group">
            <input type="submit" className="btn btn-primary"/>
          </div>
        </form>
      </div>
    );
  }
}