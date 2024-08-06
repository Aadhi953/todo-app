import React from 'react'

function Employee(props) {
  return (
    <div>
      <h1>Name:{props.name},position:{props.position},age:{props.age}</h1>
    </div>
  )
}

export default Employee
