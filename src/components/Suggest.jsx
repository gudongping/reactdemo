import React, {Component} from "react"
import jsonp from 'jsonp'

export default class Suggest extends Component {
  constructor() {
    super();
    this.state = {
      words:[],
      index:-1,
      val:''
    };
  }
  handleChange = (e)=>{
    let wd = e.target.value;
    this.setState({index: -1});
    jsonp(`http://www.baidu.com/su?wd=${wd}`, {
      param:'cb'
    }, (err, data) => {
      this.setState({
        words: data.s,
        wd,
        val:wd
      })
    });
  }

  handleKeyDown = (e) => {
    let index = this.state.index,
        total = this.state.words.length;

    if(e.keyCode === 38 || e.keyCode === 40) {
      e.preventDefault();
      if(e.keyCode === 38) {
        index >= 0 ? --index: index = total-1;
      } else if(e.keyCode === 40) {
        index < total ? ++index : index = 0;
      }
      console.log(this.state.words[index],this.state.val);
      this.setState({
        index,
        val: this.state.words[index] || this.state.wd
      });
    }    
  } 

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-heading">
                <input type="text" onKeyDown={this.handleKeyDown} className="form-control" 
                onChange={this.handleChange} value={this.state.val}/>
              </div>
              <div className="panel-body">
                <ul className="list-group">
                  {
                    this.state.words.map((word,index)=> {
                        return <li key={index} className={"list-group-item "+(index === this.state.index ? 'active': '')}>{word}</li>
                    })
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>      
      </div>
    );
  }
}