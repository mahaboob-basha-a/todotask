import React, { useEffect, useState } from 'react';
import TodoCard from '../TodoCard';
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import Header from '../Header';

const TodoContent = () => {
    const [todoList,setTodoList] = useState([])
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [label,setLabel] = useState('')
    const [labelStatus,setLabelStatus] = useState(false)
    const [editStatus,setEdit] = useState(false)
    const [editId,setEditId] = useState(null)
    const [filterTodoList,setFilterTodoList] = useState([])
    const [searchLabel,setSearchLabel] = useState('')
    const [filterStatus,setFilterStatus] = useState(false)

    // local todo task data fetching 
    useEffect(()=>{
        const localTodolist = localStorage.getItem('todotask')
        if(localTodolist){
            setTodoList(JSON.parse(localTodolist))
        }
    },[])
    // search todo by label
    const searchTodoItem = value =>{
        if(value !== ''){
            // eslint-disable-next-line
            const searchList = todoList.filter(item =>{
                const {labels} = item
                const isExist = labels.some(item=>{
                    return item.label.includes(value)
                })
                if(isExist){
                    return item
                }
            })
            setFilterTodoList(searchList)
            setFilterStatus(true)
        }else{
            setFilterStatus(false)
        }
    }

    // Adding new todo item method
    const addTodoItem = e =>{
        e.preventDefault()
        if(title !== '' && description !== ''){
            const newTodoItem = {
                id:crypto.randomUUID(),
                title,description,labels:[]
            }
            setTodoList(prev => [...prev,newTodoItem])
            localStorage.setItem('todotask',JSON.stringify([...todoList,newTodoItem]))
            setTitle('')
            setDescription('')
            toast.success('Todo task added successfully')
        }else{
            toast.error('Title and description not been empty')
        }
    }

    // Edit todo task
    const editTodoItem = e =>{
        e.preventDefault()
        const editTodoTask = todoList.map(item => {
            if(item.id === editId){
                return {...item,title,description}
            }
            return item
        })
        setTodoList(editTodoTask)
        localStorage.setItem('todotask',JSON.stringify(editTodoTask))
        toast.success('Todo task edited successfully')
        setEdit(false)
        setTitle('')
        setDescription('')
        setEditId(null)
    }

    // Add label for todo task
    const addTodoLabel = e =>{
        e.preventDefault()
        if(label !== ''){
            const addLabelTag = todoList.map(item => {
                if(item.id === editId){
                    const newlabel = [...item.labels,{labelId:crypto.randomUUID(),label}]
                    return {...item,labels:newlabel}
                }
                return item
            })
            setTodoList(addLabelTag)
            localStorage.setItem('todotask',JSON.stringify(addLabelTag))
            setLabel('')
            setLabelStatus(false)
        }else{
            toast.error('Label not been empty')
        }
    }

    // Delete perticular todo task
    const deleteTodoItem = id =>{
        const deletedTodoList = todoList.filter(item => item.id !== id)
        setTodoList(deletedTodoList)
        localStorage.setItem('todotask',JSON.stringify(deletedTodoList))
        setLabelStatus(false)
        toast.warning('Todo deleted successfully')
    }
    // Delete label tag of todo item
    const deleteTodoLabel = (todoId,labelId) =>{
        const removeTodoLabel = todoList.map(item => {
            if(item.id === todoId){
                const removeLabel = item.labels.filter(tag => tag.labelId !== labelId)
                return {...item,labels:removeLabel}
            }
            return item
        })
        setTodoList(removeTodoLabel)
        localStorage.setItem('todotask',JSON.stringify(removeTodoLabel))
        toast.warning('Label removed successfully')
    }
    
  return (
    <>
    <Header searchLabel={searchLabel} setSearchLabel={setSearchLabel} searchTodoItem={searchTodoItem} />
    <div className='todo-container'>
        <div className='todo-input-container'>  
            {labelStatus ? <form>
                <input value={label} onChange={element => setLabel(element.target.value)} placeholder='Add Label' />
                <button type='submit' onClick={addTodoLabel}>Add Label</button>
            </form> :
            <form>
            <div className='input-description'>
                <input value={title} onChange={element => setTitle(element.target.value)} className='title-input' type='text' placeholder='Title' />
                <input value={description} onChange={element => setDescription(element.target.value)} className='description-input' type='text' placeholder='Description' />
            </div>
            {editStatus ? <button onClick={editTodoItem}>Edit</button>
            :<button type='submit' onClick={addTodoItem}>Add</button>}
        </form>}
        </div>
        {filterStatus ? 
        <div className='todo-card-container'>
        {filterTodoList.length > 0 ?<>
        {filterTodoList.map(item => {
            const {id, title, description, labels} = item
            return <TodoCard key={id} id={id} title={title} description={description} labels={labels} deleteTodoItem={deleteTodoItem} deleteTodoLabel={deleteTodoLabel} editTodoItem={editTodoItem} editTitle={setTitle} editDescription={setDescription} editId={setEditId} editStatus={setEdit} setLabelStatus={setLabelStatus} />
        })}
        </> : <h2>No todo tasks matched</h2>}
        </div>
        : <div className='todo-card-container'>
            {todoList.length > 0 ?<>
            {todoList.map(item => {
                const {id, title, description, labels} = item
                return <TodoCard key={id} id={id} title={title} description={description} labels={labels} deleteTodoItem={deleteTodoItem} deleteTodoLabel={deleteTodoLabel} editTodoItem={editTodoItem} editTitle={setTitle} editDescription={setDescription} editId={setEditId} editStatus={setEdit} setLabelStatus={setLabelStatus} />
            })}
            </> : <h2>No todo tasks found</h2>}
        </div> }
        <ToastContainer />
    </div>
    </>
  )
}

export default TodoContent;