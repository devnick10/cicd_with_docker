import React from 'react'
import { TodoInput } from '../components/todo-input'
import { Todos } from '../components/todos'

const page = () => {
  return (
    <div>
    <h1 style={{textAlign:"center",marginTop:"12px"}}>TODO APP</h1>
      <TodoInput />
      <Todos />
    </div>
  )
}
export default page;