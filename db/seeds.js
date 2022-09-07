const db = connect("mongodb://localhost:27017/users")

db.users.drop();
db.habits.drop();
db.users.insertMany([
    {username: "isabel", email:"blabla@gmail.com", password: 123}
])


