import * as path from "path";
import * as express from "express";
import * as socketio from "socket.io";

const http = require('http');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const port = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname, '../public');

const defaultUser = 'Admin';

app.use(express.static(publicDirectoryPath));

app.get("/", (req, res) => {
    res.send("Hello World!!");
});


server.listen(port, () => {
     console.log(`Server is running in http://localhost:${port}`)
});