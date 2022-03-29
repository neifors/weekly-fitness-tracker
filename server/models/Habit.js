const { init } = require ('../db_config/dbconfig.js')
const { ObjectId } = require('mongodb')
class Habit {
    constructor(data){
       this.username=data.username
       this.habitName = data.habitName
       this.frequency=data.frequency
       this.units=data.units
       /*this.topStreak=data.topStreak
       this.currentStreak=data.currentStreak
       this.currentAmount=data.currentAmount
       this.expectedAmount=data.expectedAmount*/
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
   

}

module.exports= Habit;