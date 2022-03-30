const { init } = require ('../db_config/dbconfig.js')
const { ObjectId } = require('mongodb')

class Habit {
    constructor(data){
       this._id=data._id
       this.username=data.username
       this.habitName = data.habitName
       this.frequency=data.frequency
       this.notes=data.notes
       this.startDate = data.startDate
       this.finishDate= data.finishDate
       this.complete= data.complete
       this.currentStreak = data.currentStreak 
       this.topStreak = data.topStreak 
       this.outOfWeek = data.outOfWeek 
    }

   static gethabits(person){
      return new Promise(async (res, rej) => {
         try {
               const db = await init()
               const usersData = await db.collection('habits').find({username:person}).toArray()
               const users = usersData.map(user => new Habit({...user}))
               res(users)
         } catch (err) {
               rej(`Error retrieving habits for user: ${err}`)
         }
      })
   }

   static create(data){
      return new Promise(async (res, rej) => {
         try {
               const db = await init()
               const newHabit = await db.collection('habits').insertOne(data)
               const habit = new Habit({...newHabit})
               res(habit)
         } catch (err) {
               rej(`Error creating habits for user: ${err}`)
         }
      })
   }

   static delete(data){
      return new Promise(async (res, rej) => {
         try {
               const db = await init()
               const usersData = await db.collection('habits').deleteOne({"_id": ObjectId(data)})
               //const users = usersData.map(user => new Habit({...user}))
               res(usersData)
         } catch (err) {
               rej(`Error deleting habit for user: ${err}`)
         }
      })


   }

//     static update(data){
//       return new Promise(async (res, rej) => {
//          try {
//                const db = await init()
//                const usersData = await db.collection('habits').deleteOne({"_id": ObjectId(data)})
//                //const users = usersData.map(user => new Habit({...user}))
//                res(usersData)
//          } catch (err) {
//                rej(`Error deleting habit for user: ${err}`)
//          }
//       })

//     }
   

}

module.exports= Habit;
