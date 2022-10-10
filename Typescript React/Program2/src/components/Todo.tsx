
import axios, { AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import { TodoInput } from './TodoInput'
import { TodoList } from './TodoList'

export interface inputFormat{
    title:string,
    status:boolean,
    id:number
}

export const Todo = () => {

    const [data,setData]=useState<inputFormat[]>([])

    const getData=()=>{
        axios.get("http://localhost:8080/todos").then((res: AxiosResponse<inputFormat[]>)=>setData(res.data))
    }
    useEffect(()=>{
        getData()

    },[])

    const handleAdd=(title:string)=>{
        if(title){
            const payload={
                title,
                status:false
            }
            axios.post("http://localhost:8080/todos",payload).then(res=>getData()).catch(e=>console.log(e))
        }
    }

    const handleToggle=(id:number,inpu:boolean)=>{
        if(id){
            axios.patch(`http://localhost:8080/todos/${id}`,{status:!inpu}).then(res=>getData()).catch(e=>console.log(e))
        }
    }

    const handleDelete=(id:number)=>{
        if(id){
            axios.delete(`http://localhost:8080/todos/${id}`).then(res=>getData()).catch(e=>console.log(e))
        }
    }
  return (
    <div>
        <TodoInput handleAdd={handleAdd}/>
        <TodoList label={"Todo List"} handleDelete={handleDelete} todoData={data} handleToggle={handleToggle}/>
    </div>
  )
}
