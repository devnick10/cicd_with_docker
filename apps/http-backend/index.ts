import "dotenv/config";
import express from "express";
const app = express();
import { prisma } from "@repo/db";
import cors from "cors"

app.use(express.json());
app.use(cors())

app.post("/signup", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await prisma.user.create({
            data: {
                email,
                password
            }
        });
        res.status(200).json({
            message: "signup successfully.",
            id: user.id
        })
    } catch (error) {
        console.error(error);
    }
})
app.post("/signin", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await prisma.user.findFirst({
            where: {
                email,
                password
            }
        });
        res.status(200).json({
            message: "signin successfully.",
            id: user?.id
        })
    } catch (error) {
        console.error(error);
    }
})

app.get("/todo/:id", async (req, res) => {
    const todoId = req.params.id;

    try {
        await prisma.todo.delete({
            where: {
                id: todoId
            }
        });
        res.status(200).json({
            message: "todos deleted.",
        })
    } catch (error) {
        console.error(error);
    }
})
app.get("/todos", async (req, res) => {
    try {
        const todos = await prisma.todo.findMany();
        res.status(200).json({
            message: "todos fetched.",
            todos
        })
    } catch (error) {
        console.error(error);
    }
})

app.post("/todos", async (req, res) => {
    const { title, userId } = req.body;
    try {
        await prisma.todo.create({
            data: {
                title,
                userId
            }
        });
        res.status(201).json({
            message: "todo created.",
        })
    } catch (error) {
        console.error(error);
    }
})

app.listen(3001, () => {
    prisma.$connect().then(() => {
        console.log('databse connected')
    })
    console.log("Server is running")
})