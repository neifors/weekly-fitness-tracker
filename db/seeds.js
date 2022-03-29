const db = connect("mongodb://localhost:27017/users")

db.users.drop();
db.habits.drop();
db.users.insertMany([
    {username: "isabel", email:"blabla@gmail.com", password: 123},
    {username: "leanne", email:"blabla2@gmail.com", password: 12345},
    {username: "paul", email:"ranjnjenj@gmail.com", password: 'Hello'},
    {username: "mike", email:"m.w.g.nelson@gmail.com", password: 'm1chael'}
])

db.habits.insertMany([
    {username: "isabel", habitName: "Running", frequency: 3, units:'1 mile'},
    {username: "leanne", habitName: "Cycling", frequency: 3, units:'1 mile'},
    {username: "mike", habitName: "Cycling", frequency: 5, units:'1 mile'},
    {username: "mike", habitName: "boxing", frequency: 3, units:'1 mile'},
    {username: "paul", habitName: "bench press", frequency: 2, units:'10 reps'},
])


