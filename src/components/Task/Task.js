import { MdClose, MdEdit  } from "react-icons/md";
import { IoIosCloseCircle, IoMdCheckmark  } from "react-icons/io";

import css from "./Task.module.css";
import { useDispatch, useSelector } from "react-redux";
// import { changeTodo, removeTodo } from "redux/todos/todosSlice";
import { changeTodo, deleteTodo, updateTodo } from "redux/todos/todosOperation";
import { useState } from "react";
import { selectById } from "redux/todos/todosSlice";


export const Task = ({ taskId }) => {
  const task = useSelector(state => selectById(state, taskId));
  const dispatch = useDispatch();
  const [isClicked, setIsClicked] = useState(false)
  
  const handleChange = () => {
  dispatch(changeTodo(
    { ...task, completed: !task.completed }
  ))
      console.log({ ...task, completed: !task.completed })

  }

  const handleRemove = () => {
    dispatch(deleteTodo(task.id));
  }

  const handleDubbleClick = (e) =>{
    setIsClicked(true)
    return console.log(e)
  }

  const handleUpdate = (e) => {
    e.preventDefault()
    console.log(e.target.elements.newTodo.value.trim()) 
    if (!e.target.elements.newTodo.value.trim()){setIsClicked(false); return} 
dispatch(updateTodo({...task, text: e.target.elements.newTodo.value.trim()}))
        // console.log(task)
        // console.log(e.target.value)
        setIsClicked(false)
  }


  const handleKeyDown = (e) =>{
   
   if(e.key === "Escape"){
    setIsClicked(false)
   } 
   if(e.key === "Enter"){
        if (!e.target.value.trim()){setIsClicked(false); return} 
    dispatch(updateTodo({...task, text: e.target.value.trim()}))
   }
  }

  // const handleBlur = (e) =>{
  //   handleUpdate(e)
  // }
  
  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
        onChange={handleChange} 
      />
      { isClicked ?
        <form onSubmit={handleUpdate}>
        <input type="text" className={css.text} defaultValue={task.text} onKeyDown={handleKeyDown} name="newTodo"/>
        <button type="button" onClick={() => setIsClicked(false)} className={css.btnStop}><IoIosCloseCircle size={18} /></button>
        <button type="submit" className={css.btnSubmit}><IoMdCheckmark size={18} /></button>
        </form>
        : 
        <><p className={css.text} onDoubleClick={handleDubbleClick}>{task.text}</p>
        <button className={css.edit} type="button" onClick={handleDubbleClick}><MdEdit  size={24} /></button>
              <button className={css.btn} type="button" onClick={handleRemove}><MdClose size={24} /></button>
              </>

        }

    </div>
  );
};
