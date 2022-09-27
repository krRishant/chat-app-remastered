const http = require("http");
const express = require("express");
const cors = require("cors");
const socketIO = require("socket.io");

const app = express();
const server = http.createServer(app);
app.use(cors());
const io = socketIO(server);
const port = 5000 || process.env.PORT;
app.get("/", (req, res) => {
  res.send("server is up and live");
});

io.on('connection',(socket)=>{
     console.log("user is connected");
     
})
// 
// io.on("connection", (socket) => {
//   console.log("user is connected");
//     socket.on('join',({name,room})=>{
//         console.log(`${name} has joined room ${room}`);
//     })

//     socket.on('disconnect',()=>{
//        console.log(`user has left room`);
//     })
// });

server.listen(port, (req, res) => {
  console.log(`server is live on http://localhost:${port}`);
});
