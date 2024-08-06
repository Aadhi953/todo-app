

import React,{useState} from 'react';
import './App.css';

function App() {
  const [toDos,setTodos]= useState([])
  const [toDo,setTodo]=useState("")

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
      <i  onClick={()=> {if (toDo.trim() !== ""){
        const now = new Date();
        const formattedDate = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
        const formattedTime = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
        setTodos([...toDos,{id:Date.now() ,text: toDo,status:false, date: formattedDate, time: formattedTime }])
        setTodo("")}}}
        className="fas fa-plus"></i>
      </div>
      <div className="todos">
       {toDos.map((obj)=>{
    return(    <div className="todo" key={obj.id}>
          <div className="left">
            <input onChange={(e)=>{
              console.log(e.target.checked)
              console.log(obj)
              setTodos(toDos.filter(obj2=>{
                if(obj2.id===obj.id){
                  obj2.status=e.target.checked
                  
                }
                return obj2
              }))

              
            }} value={obj.status} type="checkbox" name="" id="" />
            <div>
            <p >{obj.text}</p>  
            <p >      {`Date: ${obj.date}, Time: ${obj.time}`}</p> 
            </div>
          </div>
          <div className="right">
          <i 
            onClick={() => setTodos(toDos.filter(todo => todo.id !== obj.id))} 
            className="fas fa-times"
          ></i> 
          </div>
        </div>)

          })}
          <div className='display'>
            <h2>completed task</h2>
          {toDos.map((obj)=>{
            if(obj.status){
              return(<h2>{obj.text}</h2>)
            }
            return null
          })}
          </div>
      </div> 
    
    </div>
  );
}

export default App;