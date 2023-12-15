/* eslint-disable react/prop-types */
import {useState} from 'react' 
import { FaTrashAlt,FaPen } from "react-icons/fa";
import Update from '../updatess/Update'
import './todooutput.css'
import axios from 'axios';

const Maparray =({list,handledelete,saveinput,listvalue,update,setUpdate})=>{
  const [toggle,setToggle] = useState(false)
  const handletoggle = ()=>{
      setToggle((prev)=>
        !prev
         
      )
  }
 
  return(
    <div>

<div className='Todooutput-container'>
  <div className='todolist'>
  <h2>{list.todo}</h2>
 </div> 
  <div className="icons-container">
  <FaPen onClick={()=>handletoggle(list.todo)}/>
  <FaTrashAlt onClick={()=>{
    handledelete(list)
  }}/>
  
  </div>
  
  </div>
      {toggle && <Update handletoggleclose={()=>setToggle((prev)=>!prev)}
       saveinput={()=>saveinput(list)}
       listvalue={()=>{listvalue(list._id)}} 
       setUpdate={setUpdate} 
       update={update}/> }
  </div>
   ) 
 
}


function Todooutput({todos,setTodos}) {
  const [current,setCurrent] = useState('')
  const [update,setUpdate] = useState('')
  const api = "https://todo-app-server-jibinshans-projects.vercel.app/todo"
  
  const listvalue = (list)=>{
    setUpdate(list)
  }
  const saveinput = async(list)=>{
    // setTodos(todos.filter((item)=>{
    //   if (item.id === list.id) {
    //     item.text = update
    //   }
    //   return item
    // }))
    const response = await axios(api,{
      method:"PUT",
      data:{
        _id:list._id,
        todo:update
      }
    })
    setTodos(response.data)
    setUpdate("")
  }
//   const handletoggleopen = (list,text)=>{
//      setCurrent(current === list ? '':list)
//      listvalue(text)
//  } 
 const handletoggleclose =(list)=>{
  setCurrent(current === list ? '':'')
 }
   const handledelete =async(list)=>{
       
      // setTodos(todos.filter((item)=>item.id !== list.id))
      const response = await axios(api,{
        method:"DELETE",
        data:{
          _id:list._id
        }
      })
      setTodos(response.data)
   }
  return (
     <div className='output'>
    {todos.map((list)=>{
       return(
        <Maparray
        list={list}
        handledelete={handledelete}
        handletoggleclose={handletoggleclose}
        saveinput={saveinput}
        listvalue={listvalue}
        update={update}
        setUpdate={setUpdate}
        key={list._id}
        />
       )
          })}
        </div>
    )
}
export default Todooutput
