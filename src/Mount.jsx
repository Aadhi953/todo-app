import React ,{useState,useEffect}from 'react'


function Mount() {
  const [count,setCount]=useState(0)
  useEffect(()=>{
    console.log("mounting...");
    console.log("updatind.."+count);
    return ()=>{
       console.log("unmounting.."+count);
    }
  },[count]);
    
  return (
    <div >
        <button onClick={()=>setCount(count+1)  }>increment</button>
      <h1>i hate you:{count}</h1>

    </div>
  );
}

export default Mount

//mount
//unmount
//updating