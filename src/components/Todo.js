import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
  return (
    <div className='Todo'>
        <p onClick={() => toggleComplete(task.editTodo)} className={`${task.completed ? 'completed': ""}`}>{task.task}</p>
        <div className='butts'>
            <FontAwesomeIcon className='edit' icon={faPenToSquare} onClick={() => editTodo(task.id)}/>
            <FontAwesomeIcon className='delete' icon={faTrash} onClick={() => deleteTodo (task.id)}/>
        </div>
    </div>
  )
}
