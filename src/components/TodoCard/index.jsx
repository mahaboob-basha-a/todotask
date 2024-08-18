import React from 'react';
import { MdDelete, MdOutlineNewLabel } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { HiOutlineXMark } from "react-icons/hi2";
import './index.css';

const TodoCard = (prop) => {
    const {id,title,description,labels,deleteTodoItem,deleteTodoLabel,editTitle,editDescription,editId,editStatus,setLabelStatus} = prop
    const editTodo = () =>{
        editTitle(title)
        editDescription(description)
        editId(id)
        editStatus(true)
        setLabelStatus(false)
    }
    const addLabel = () =>{
        editTitle('')
        editDescription('')
        editId(id)
        editStatus(false)
        setLabelStatus(true)
    }
  return (
    <div className='todo-card' key={id}>
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <div className='label-container'>
                {labels.map(labels=>{
                const {labelId,label} = labels
                return <span className='label-tag' key={labelId}>{label} <button onClick={()=> deleteTodoLabel(id,labelId)}><HiOutlineXMark /></button></span>
                })}
            </div>
        </div>
        <div className='button-container'>
            <button onClick={()=> deleteTodoItem(id)}><MdDelete /></button>
            <button onClick={addLabel}><MdOutlineNewLabel /></button>
            <button onClick={editTodo}><CiEdit /></button>
        </div>
    </div>
  )
}

export default TodoCard;