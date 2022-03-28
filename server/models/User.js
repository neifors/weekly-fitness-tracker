const { init } = require ('../db_config/dbconfig.js')
const { ObjectId } = require('mongodb')

class User {
   constructor(data){
      this.username = data.username
      this.email = data.email
      this.password = data.password
   }
   
   static get all(){
      return new Promise(async (res, rej) => {
         try {
               const db = await init()
               const usersData = await db.collection('users').find().toArray()
               const users = usersData.map(user => new User({...user}))
               res(users);
         } catch (err) {
               rej(`Error retrieving users: ${err}`)
         }
      })
   }

   // static findById(id){
   //    return new Promise(async (res, rej) => {
   //       try {
   //             const db= await init();
   //             const users = await db.collection('users').findById(ObjectId)

               
   //       } catch (err) {
   //             rej(`Error retrieving user: ${err}`)
   //       }
   //    })
   // }

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
}

module.exports = User
