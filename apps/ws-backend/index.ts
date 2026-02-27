import "dotenv/config";
import { WebSocketServer } from 'ws';
import { prisma } from "@repo/db"
const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
    ws.on('error', console.error);

    ws.on('message', async function message(data) {
        const message = JSON.parse(data.toString());
        if (message.type === "TODOS") {
            const todos = await prisma.todo.findMany();
            ws.send(JSON.stringify({ message: "todos fetched", todos }))
        }
    });
    ws.send('hii there');
});