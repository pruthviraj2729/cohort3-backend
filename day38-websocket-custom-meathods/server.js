import app from './src/app/app.js'
import {createServer} from 'node:http'
import initializeSocket from './src/socket/socket.server.js';

const httpServer = createServer(app);
initializeSocket(httpServer)

httpServer.listen(3000, () => {
    console.log("server is running on port 3000")
})