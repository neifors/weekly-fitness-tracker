const db = connect("mongodb://localhost:27017/users")

db.users.drop();
db.users.insertMany([
    {username: "isabel", email:"blabla@gmail.com", password: 123},
    {username: "leanne", email:"blabla2@gmail.com", password: 12345},
    {username: "paul", email:"ranjnjenj@gmail.com", password: 'Hello'},
    {username: "mike", email:"m.w.g.nelson@gmail.com", password: 'm1chael'}
])


