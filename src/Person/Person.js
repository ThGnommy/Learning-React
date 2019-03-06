import React from 'react'

const Person = (props) => {
  return (
    <div>
      <h1>Ciao! Sono {props.name} ed ho {props.age} anni!</h1>
      <h1>{props.children}</h1>
    </div>
  )
}

let n = Math.floor(Math.random() * 30);
//console.log(n);

export default Person
