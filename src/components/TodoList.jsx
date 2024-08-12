import React from "react";

export default function TodoList(props){

    const [editId, setEditId] = React.useState(null)
    const [editedContent, setEditedContent] = React.useState("")

    function handleDelete(id){
        props.setStore((prevStore)=>{
            return(
                prevStore.filter((store)=>store.id !== id)
            )
        })
    }

    // function handleComplete(id){
    //     props.setStore(
    //         props.store.map((arrayItem)=>{
    //             if(arrayItem.id === id){
    //                 return({
    //                     ...arrayItem,
    //                     completed: !arrayItem.completed
    //                 })
    //             }
    //             return(arrayItem)
    //         })
    //     )
    // }

    function handleComplete(id){
        props.setStore((prevStore)=>{
            return(
                prevStore.map((arrayItem)=>{
                    return(
                        arrayItem.id === id && { ...arrayItem, completed: !arrayItem.completed}
                    )
                })
            )
        })
    }

    function handleEdit(id){
        const findTodo = props.store.find((todo)=> todo.id===id)
        setEditId(id)
        setEditedContent(findTodo.activity)
    }

    function handleEditChange(event) {
        setEditedContent(event.target.value);
    }

    
    function saveEdit(id){
        props.setStore((prevStore)=>{
            return (
                prevStore.map((arrayItem)=>{
                    return (
                        (arrayItem.id === id)?
                        {
                            ...arrayItem,
                            activity: editedContent
                        }:
                        arrayItem
                    )
                })
            )
        })
        setEditId(null)
    }

    const listItem = props.store.map((storeItem, index)=>{
        return(
            <li key={storeItem.id} className="list-item">
                {
                    editId === storeItem.id ?
                    (
                        <input 
                        type="text" 
                        value={editedContent} 
                        className="list"
                        onChange={handleEditChange}
                    />    
                    ) : (
                        <input 
                        type="text" 
                        value={storeItem.activity} 
                        className={storeItem.completed === false? "list": "list complete"}
                        readOnly
                    />    
                    )
                }
                <button className="button-complete task-button" onClick={()=>handleComplete(storeItem.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>                
                </button>
                {editId === storeItem.id ?
                    (
                        <button className="button-edit task-button" onClick={()=>saveEdit(storeItem.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                        </button>
                    ):
                    (
                        <button className="button-edit task-button" onClick={()=>handleEdit(storeItem.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"/></svg>
                        </button>
                    )
                }   
                <button className="button-delete task-button" onClick={()=>handleDelete(storeItem.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
                </button>
            </li>
        )
    })
    return(
        <ul>
            {listItem}
        </ul>
    )
}