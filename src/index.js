import React from 'react'
import ReactDOM from 'react-dom'

let eleObj = {
  type:'div',
  props:{
    className:'red',
    id:1,
    children:['hello', {
      type:'span',
      props: {
        className: 'blue',
        children: ['world']
      }
    }]
  }
};

/* ReactDOM.render(
  ele,
  document.getElementById('root')
); */

console.log(React.createElement('h1',{id:'haha'},['hello world']));

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