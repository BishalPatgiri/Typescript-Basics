import { inputFormat } from "./Todo"

interface input{
  label:string,
  todoData:inputFormat[],
  handleToggle:(id:number,inpu:boolean)=>void,
  handleDelete:(id:number)=>void
}

export const TodoList = ({label,todoData,handleToggle,handleDelete}:input) => {
  return (
    <div style={{lineHeight:"5px",width:"25%",margin:"auto",}}>
      <h1>{label}</h1>
      {
        todoData.length>0 && todoData.map(ele=>(
          <div style={{display:"flex",justifyContent:"space-between",width:"100%",marginTop:"10px"}} key={ele.id}>
           <h2>{ele.title}</h2>
           <h2>{ele.status?("Completed"):("Not Completed")}</h2>
           <button onClick={()=>handleToggle(ele.id,ele.status)}>Toggle</button>
           <button onClick={()=>handleDelete(ele.id)} style={{color:"white",backgroundColor:"red",border:"0"}}>Delete</button>
          </div>
        ))
      }
    </div>
  )
}
