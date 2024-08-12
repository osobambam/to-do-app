import React from 'react'
import Header from './components/Header'
import Form from './components/Form'
import TodoList from './components/TodoList'
import './App.css'


export default function App() {

  // const [input, setInput] = React.useState("")
  // const [store, setStore] = React.useState([])
  const [store, setStore] = React.useState(JSON.parse(localStorage.getItem("store")) || [])
  const [todoStore, setTodoStore] = React.useState(
    {
      activity: "",
      completed: false
    })
  const [editTodo, setEditTodo]= React.useState(null)

    React.useEffect(()=>{
    localStorage.setItem("store", JSON.stringify(store))
    },[store])

  return (
    <div className='container'>
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form 
            store={store}
            setStore={setStore}
            todoStore={todoStore}
            setTodoStore={setTodoStore}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>
        <div><TodoList store={store} setStore={setStore} editTodo={editTodo} setEditTodo={setEditTodo} /></div>
      </div>
    </div>
  )
}

