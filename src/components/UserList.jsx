import React, {Component} from "react"
import {Link} from "react-router-dom"

export default class UserList extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
  }
  
  componentWillMount() {
    let userStr = localStorage.getItem('users');
    let users = userStr ? JSON.parse(userStr) : [];
    this.setState({
      users
    });
  }

  render() {
    return (
      <div>
        <ul className="list-group">
          {/* <li className="list-group-item">
            <Link to='/user/detail/1'>張三</Link>
          </li>
          <li className="list-group-item">
            <Link to='/user/detail/2'>李四</Link>
          </li>
          <li className="list-group-item">
            <Link to='/user/detail/3'>王五</Link>
          </li> */}
          {
            this.state.users.map(item=>{
              return (
                <li className='list-group-item' key={item.id}>
                  <Link to={`/user/detail/${item.id}`}>{item.name}</Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}