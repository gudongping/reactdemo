import React from "react"
import ReactDOM, {render} from "react-dom"

let Message = (props)=> {
  return (
    <div>
      <h1 style={props.style}>{props.msg}</h1>
    </div>
  );
}

/* render(
  <Message msg='hello' style={{color:'red', fontSize:'20px'}}/>,
  document.getElementById('root')
); */
render(
  <div className='red'>
    Hello World
    <span style={{fontSize:'20px', color:'blue'}}>
      哈哈
    </span>
  </div>,
  document.getElementById('root')
);