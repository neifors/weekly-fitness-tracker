const { init } = require ('../db_config/dbconfig.js')
const { ObjectId } = require('mongodb')
let now= new Date().getTime()
let week1=now+(3600*24*7*1000)
let start= new Date(now).toUTCString()
let finish=new Date(week1).toUTCString()

function canModify(now){
   let n=now.getTime()
}

class Habit {
    constructor(data){
       this._id=data._id
       this.username=data.username
       this.habitName = data.habitName
       this.frequency=data.frequency//days of week
       this.log=[]
       this.startDate = start
       this.finishDate= finish
       this.note= data.note
       this.currentStreak=0
       this.complete=false;
       this.outOfWeek=false;
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
               const usersData = await db.collection('habits').insertOne(data)
               //const users = usersData.map(user => new Habit({...user}))
               res(usersData)
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
               console.log(data,data._id)
               const usersData = await db.collection('habits').updateOne({"_id": ObjectId(id)},
               { $set: { ...data} })
               //const users = usersData.map(user => new Habit({...user}))
               res(usersData)
         } catch (err) {
               rej(`Error updating habit for user: ${err}`)
         }
      })

    }
   

}

module.exports= Habit;