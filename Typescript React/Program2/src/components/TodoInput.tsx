import { useState } from "react"

interface inputData{
    handleAdd:(title:string)=>void
}

export const TodoInput = ({handleAdd}:inputData) => {
const [text,setText]=useState<string>("")

const handleChange:React.ChangeEventHandler<HTMLInputElement>=(e)=>{
setText(e.target.value)
}

  return (
    <div>
        <input value={text} type="text" placeholder='Write Todos' onChange={handleChange} />
        <button onClick={()=>handleAdd(text)}>ADD</button>
    </div>
  )
}
