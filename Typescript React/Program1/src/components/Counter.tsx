import { useState } from 'react';
import { Button } from './Button';
import { Count } from './Count';


export const Counter = () => {
const [count,setCount]=useState<number>(0)

const handleChange=(val:number)=>{
    setCount(count+val)
  }
  return (
    <div>
        <Count label={count}/>
        <div style={{display:"flex",justifyContent:"center"}}>
        <Button label="ADD" onClick={()=>handleChange(+1)}/>
        <Button label="REDUCE" onClick={()=>handleChange(-1)}/>
        </div>
    </div>
  )
}
