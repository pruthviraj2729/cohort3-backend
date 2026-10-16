import {Server} from "socket.io"

export default function initializeSocket(httpServer) {
    const io = new Server(httpServer)

    io.on("connection", (socket) => {
        console.log("a user connected", socket.id)


        socket.on("elon", (msg) => {
            console.log(msg)
            io.emit("musk", "hi from server")
        })

        socket.on("disconnect", () => {
            console.log("a user disconnected", socket.id)
        })
    })
}