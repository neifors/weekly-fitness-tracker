const { init } = require ('../db_config/dbconfig.js')
const { ObjectId } = require('mongodb')
class Habit {
    constructor(data){
       this.username=data.username
       this.habitName = data.habitName
       this.frequency=data.frequency
       this.units=data.units
    }
    static gethabits(person){
      return new Promise(async (res, rej) => {
         try {
               const db = await init()
               const usersData = await db.collection('habits').find({username:person}).toArray()
               //const users = usersData.map(user => new Habit({...user}))
               res(usersData)
         } catch (err) {
               rej(`Error retrieving habits for user: ${err}`)
         }
      })
   }
   static create(data){
      return new Promise(async (res, rej) => {
         try {
               const db = await init()
               const usersData = await db.collection('habits').insertOne(data)
               //const users = usersData.map(user => new Habit({...user}))
               res(usersData)
         } catch (err) {
               rej(`Error creating habits for user: ${err}`)
         }
      })

   }
   

}

module.exports= Habit;