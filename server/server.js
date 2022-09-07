const express=require('express');
const cors = require('cors');
const server=express();
server.use(cors({
    origin: 'https://weekly-fitness-tracker.netlify.app',
}));

// CORS config START
// server.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "https://weekly-fitness-tracker.netlify.app")
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested, Content-Type, Accept Authorization")
//     if (req.method === "OPTIONS") {
//       res.header(
//         "Access-Control-Allow-Methods",
//         "POST, PUT, PATCH, GET, DELETE"
//       )
//       return res.status(200).json({})
//     }
//     next()
// });
// CORS config END

server.use(express.json());


const usersRoutes = require("./controllers/users")
const authRoutes = require("./controllers/auth")
const habitsRoutes = require("./controllers/habits")

server.use("/habits", habitsRoutes);
server.use("/users", usersRoutes);
server.use("/auth", authRoutes);

server.get('/', (req, res)=>{
    res.json('Hello world')
})


module.exports= server;
