import React from 'react'
import { TodoInput } from '../components/todo-input'
import { Todos } from '../components/todos'

const page = () => {
  return (
    <div>
      <TodoInput />
      <Todos />
    </div>
  )
}
export default page;