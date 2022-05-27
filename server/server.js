const express=require('express');
const cors= require('cors');
const server=express();
server.use(cors("*"));
server.use(express.json());
var path=require('path')


const usersRoutes = require("./controllers/users")
const authRoutes = require("./controllers/auth")
const habitsRoutes = require("./controllers/habits")

server.use("/habits", habitsRoutes);
server.use("/users", usersRoutes);
server.use("/auth", authRoutes);
server.use(express.static(path.join(__dirname, "client")))

server.get('/', (req, res)=>{
    res.json('Hello world')
})
server.get('/home', (req, res)=>{
    res.sendFile('index.html',{root: 'client'})
})

console.log(path.resolve('index.html'))
console.log(__dirname+ path.resolve('../client/index.html'))


module.exports= server;
