import React from 'react'//rfce react function component 

function counter({title,count})//{title,..obj)}
 {
    //const {title,count}=props//array distructure  
  return (
    <div>
      <h1>{title} {count}</h1>
      
    </div>
  )
}

export default counter
