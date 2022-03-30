const { init } = require ('../db_config/dbconfig.js')
const { ObjectId } = require('mongodb')
let now= new Date().getTime()
let week1=now+(3600*24*7*1000)
let start= new Date(now).toUTCString().slice(0,16)
let finish=new Date(week1).toUTCString().slice(0,16)
class Habit {
    constructor(data){
       this._id=data._id
       this.username=data.username
       this.habitName = data.habitName
       this.frequency=data.frequency
       this.units=data.units
       this.startDate = start
       this.finishDate= finish
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

    static update(data){
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
   

}

module.exports= Habit;