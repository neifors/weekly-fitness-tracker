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
                const users = usersData.map(user => new User({...user,id:user._id}))
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
                const users = await db.collection('users').find({email:email})
                res(users)
                
            } catch (err) {
                rej(`Error retrieving user: ${err}`)
            }
        })
    }
}

module.exports = User;
