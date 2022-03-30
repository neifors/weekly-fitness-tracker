const db = connect("mongodb://localhost:27017/users")

db.users.drop();
db.habits.drop();
db.users.insertMany([
    {username: "leanne", email:"blabla2@gmail.com", password: 12345},
    {username: "paul", email:"ranjnjenj@gmail.com", password: 'Hello'},
])

db.habits.insertMany([
    {username: "isabel", habitName: "Running", frequency: 3, units:'1 mile'},
    {username: "leanne", habitName: "Cycling", frequency: 3, units:'1 mile'},
    {username: "mike", habitName: "Cycling", frequency: 5, units:'1 mile'},
    {username: "mike", habitName: "boxing", frequency: 3, units:'1 mile'},
    {username: "paul", habitName: "bench press", frequency: 2, units:'10 reps'},
])

/*db.c20160712.updateOne(
    { "Attribute" : "good" }, 
    { $set: {"Type" : "DVD", "Title" : "Matrix, The", "Released" : 1999, "Genre" : "Action" } },
    { upsert: true }
);*/
