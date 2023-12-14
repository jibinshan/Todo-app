import {useEffect, useState} from 'react'
import './todo.css'
import Todoinput from './todoinput/todoinput'
import Todooutput from './todooutput/Todooutput'
import axios from 'axios'


function Todo() {
    
    const [todo,setTodo] = useState('')
    const [todos,setTodos] = useState([])
    const api = "https://todo-app-server-jibinshans-projects.vercel.app/todo"
    const fetchdata = async()=>{
       const response = await axios(api)
       setTodos(response.data)
    }
   
    const todolist = (e)=>{
        setTodo(e.target.value)
    }
    const addtodo = async()=>{
      // setTodos([...todos,{id:Date.now(),text:todo,status:false,}])
      // console.log(todos);
      const response = await axios(api,{
        method:"POST",
        data:{
          todo:todo,
        }
      })
      setTodos(response.data)
      setTodo('')
    }
    useEffect(()=>{
        fetchdata()
    },[])
  return (
    <div className='Todo-container'>
         <h1>Todo List</h1>
          <Todoinput todolist={todolist}  todo={todo} addtodo={addtodo}/>  
          <Todooutput  todo={todo} todos={todos} setTodos={setTodos}  setTodo={setTodo}  />
          
          
    </div>
  )
}

export default Todo
