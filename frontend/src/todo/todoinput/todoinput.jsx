/* eslint-disable react/prop-types */
import './todoinput.css'
function Todoinput({todolist,todo,addtodo}) {
  return (
    <div className='Todoinput-container'>
        <input value={todo} type="text" placeholder='New Todo'  onChange={todolist}/>
        <button onClick={addtodo}>ADD TODO</button>
    </div>
  )
}

export default Todoinput
