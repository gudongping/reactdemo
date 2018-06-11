import React from 'react'
import ReactDOM from 'react-dom'

let eleObj = {
  type:'div',
  props:{
    className:'red',
    id:1,
    children:['hello', {
      type:'span',
      key: 1,
      props: {
        className: 'blue',
        children: ['world']
      }
    }]
  }
};

/* let obj = React.createElement('h1',{id:'haha', style:{fontSize:'20px',background:'red'}},['hello world',
  React.createElement('span',{key:1},['嘿嘿'])
]);
console.log(obj);
ReactDOM.render(obj,document.getElementById('root')); */

function render(eleObj, container) {
  let {type, props} = eleObj;
  console.log(type, props);
  let ele = document.createElement(type);
  for(let attr in props) {
    if(attr === 'children') {
      props.children.forEach(function(item) {
        if(typeof item === 'string') {
          let textNode = document.createTextNode(item)
          ele.appendChild(textNode);
        } else {
          render(item,ele);
        }
      });
    } else if(attr === 'className') {
      ele.setAttribute('class', props[attr]);
    } else {
      ele.setAttribute(attr, props[attr]);
    }
  }
  container.appendChild(ele);
}

render(eleObj, document.getElementById('root'));