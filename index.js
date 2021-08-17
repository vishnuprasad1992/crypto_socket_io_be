const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const morgan = require('morgan')
const dbConnection = require('./db/dbConnection')
const userRoute = require("./routes/userRoute")
const dataRoute = require("./routes/dataRoute")
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server,{
    cors:{origin: "*"}
});


// const{encrypt, decrypt} = require('./Auth/auth')

dbConnection();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({
    extended:true
}));
app.use(morgan('tiny'))
app.use("/api/user",userRoute);
app.use("/api/data",dataRoute);

// app.listen()

server.listen(port,()=>{
    console.log(`server connected on http://localhost:${port}`)
});
io.on("connection", (socket) => { 
    console.log("id " + socket.id)

    socket.on('disconnect',()=>{
        console.log('disconnected')
    })

    socket.on('notification',(data)=>{
        socket.broadcast.emit('notification',data)
    })
 });
//  crypto_socket_io_be



