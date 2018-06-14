import React, {Component} from "react"

export default class UserDetail extends Component {
  constructor() {
    super();
  }
  render() {
    // 屬性裡面包含了路由信息
    // console.log(this.props);
    // history 跳轉路由，路徑
    // math 匹配路由結果
    // location 當前路徑 pathname search
    let id = this.props.match.params.id;
    let userStr = localStorage.getItem('users');
    let users = userStr ? JSON.parse(userStr) : [];
    let user = users.find(item=> `${item.id}`===id);
    // console.log(id, user);
    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
                <th>編號</th>
                <th>姓名</th>
              </tr>
          </thead>
          <tbody>
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}