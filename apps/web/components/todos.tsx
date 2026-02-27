export const dynamic = "force-dynamic"
import React from 'react'
import { prisma } from '@repo/db'

export const Todos: React.FC = async () => {
    const todos = await prisma.todo.findMany();
    return (
        <div style={{ display: "flex", justifyContent: "center", width: "100vw" }}>
            {todos.length === 0 && (<>
                <div>
                    NO todos yet
                </div>
            </>)}
            {todos.map((todo) => (
                <div key={todo.id}>
                    <h3>{todo.title}</h3>
                </div>
            ))}
        </div>
    )
}
