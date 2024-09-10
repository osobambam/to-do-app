import React from "react";
import {v4 as uuidv4} from "uuid"

export default function Form(props){

    function inputChange(event){
        const {name, value, type, checked} = event.target
        props.setTodoStore((prevTodoStore)=>{
            return ({
                ...prevTodoStore,
                [name]: value,
                id: uuidv4()
            })
        })
    }

    function onFormSubmit(event){
        event.preventDefault()
        props.setStore((prevStore)=>{
            return(
                [...prevStore, props.todoStore]
            )
        })
        props.setTodoStore((prevTodoStore)=>{
            return ({
                ...prevTodoStore,
                activity: ""
            })
        })
    }

    // console.log(props.todoStore)
    // console.log(props.store)

    return(
        <form action="" className="form-cont" onSubmit={onFormSubmit}>
            <input 
                type="text" 
                name="activity" 
                id="activity" 
                placeholder="Enter an activity" 
                className="task-input" 
                value={props.todoStore.activity} 
                onChange={inputChange}
                required
            />
            <button type="submit" className="button-add">Add</button>
        </form>
    )
}