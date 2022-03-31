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

   static getHabitById(id){
      return new Promise(async (res, rej) => {
         try {
               const db = await init()
               const habitData = await db.collection('habits').find({_id:id}).toArray()
               const habit = habitData.map(h => new Habit({...h}))
               res(habit)
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
               console.log("This is the habit has been created into models/Habit.js")
               console.log(newHabit)
               res(`habit created succesfully`)
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

   static update(id,data){
      return new Promise(async (res, rej) => {
         try {
               const db = await init()
               console.log(data,data.today)
               const habitToUpdate = await this.getHabitById(id)
               let dataToUpdate = {}
               if (data.today > habitToUpdate.finishDate){ 
                     dataToUpdate = { outOfWeek: true }       
               } else {
                     if( habitToUpdate.currentStreak+1 > habitToUpdate.topStreak && habitToUpdate.currentStreak+1 === habitToUpdate.frequency){
                        
                        dataToUpdate = {
                              currentStreak: habitToUpdate.currentStreak+1,
                              topStreak : habitToUpdate.currentStreak+1,
                              complete : true
                        }

                     } else if (habitToUpdate.currentStreak+1 > habitToUpdate.topStreak && habitToUpdate.currentStreak+1 < habitToUpdate.frequency ) {
                        
                        dataToUpdate = {
                              currentStreak: habitToUpdate.currentStreak+1,
                              topStreak : habitToUpdate.currentStreak+1,
                        }

                     } else if ( habitToUpdate.currentStreak+1 <= habitToUpdate.topStreak ) {
                        
                        dataToUpdate = {
                              currentStreak: habitToUpdate.currentStreak+1
                        }
                     }
               }
               console.log(dataToUpdate)

               const usersData = await db.collection('habits').updateOne({"_id": ObjectId(id)},{ $set: {...dataToUpdate} })
               res(usersData)

         } catch (err) {
               rej(`Error updating habit for user: ${err}`)
         }
      })
  
    }

}

module.exports= Habit;
