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
server.use(express.static(path.join(__dirname, "../client")))

server.get('/', (req, res)=>{
    res.sendFile('index.html',{root: '../client'})
}) //Serving the index page at localhost:5000

module.exports= server;
