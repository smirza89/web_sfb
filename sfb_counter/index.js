const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

app.use('/style',express.static(__dirname + '/style'))
app.get('/', (req,res) => res.sendFile(__dirname + '/index.html'))
io.on('connection', (socket)=> {
    socket.on('fullC', (msg) => io.emit('fullC',(msg)))
    //socket.on('client_num', (msg) => console.log(msg));
    //socket.on('client_letter', (msg) => console.log(msg));
})
http.listen(3000, () => console.log ('Listening 3000'))