const { init } = require ('../db_config/dbconfig.js')
const { ObjectId } = require('mongodb')

class User {
   constructor(data){
      this.id=data.id
      this.username = data.username
      this.email = data.email
      this.password = data.password
   }
   
   static get all(){
      return new Promise(async (res, rej) => {
         try {
               const db = await init()
               const usersData = await db.collection('users').find().toArray()
               const users = usersData.map(user => new User({...user, id: user._id }))
               res(users);
         } catch (err) {
               rej(`Error retrieving users: ${err}`)
         }
      })
   }

   static findByEmail(email){
      return new Promise(async (res, rej) => {
         try {
               const db= await init();
               const result = await db.collection('users').find({email: email}).toArray()
               console.log("This is printed by models/User.js. It's the amount of users resulted of searching by email")
               console.log(result.length)
               let user = new User(result[0]);
               res(user)
               
         } catch (err) {
               rej(`Error retrieving user: ${err}`)
         }
      })
   }

   static create(name, age){
      return new Promise (async (resolve, reject) => {
          try {
              const db = await init();
              let newuser = await db.collection('users').insertOne({ name, age })
              let newUser = new User(newuser.ops[0]);
              resolve (newDog);
          } catch (err) {
              reject('Error creating dog');
          }
      });
  }
}


/* let result = await db.collection("users").insertOne({
   username: req.body.username, 
   email: req.body.email, 
   password: req.body.password
}) */

module.exports = User
