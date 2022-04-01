# Weekly Fitness Tracker

## Table of Contents

- [Installation & Usage](#installation--usage)
- [Technologies](#technologies)
- [Database Schema](#database-schema)
- [Routes](#routes)

# Installation & Usage

### Installation

- Clone the repo
- Open terminal and navigate to the `weekly-fitness-tracker/server` folder
- Run `npm install` to install dependencies
- Navigate back to the `weekly-fitness-tracker` folder to run bash scripts

### Local Usage (Docker)

`bash _scripts/startDev.sh`

- Starts api & db services
- Runs db migrations
- Seeds db for development
- Serves api on `localhost:3000`
- Run client/index.html in liveserver (or open in browser)

Note: Press `Ctrl` + `C` to terminate the docker container

`bash _scripts/stop.sh`

- Stops all running services

`bash _scripts/teardown.sh`

- Stops all running services
- Removes containers
- Removes volumes

`bash _scripts/startTest.sh`

- Starts api & db services
- Runs db migrations
- Attaches to api container and triggers full test run
- No ports mapped to local host


<!-- ### Deployment

This server is continuosly deployed at  -->

## **Technologies**

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Docker](https://docker.com/)
- [Jest](https://jestjs.io/)
- [MongoDB](https://www.mongodb.com/)
<!-- - [MongoDB Atlas 🔗](https://www.mongodb.com/atlas/database)
- [Socket.io 🔗](https://socket.io/) -->

# Database Schema

- `users`

#### Users schema example:

```json
{
  "username": "futureproof",
  "email": "futureproof@gmail.com",
  "password": "$2a$10$tCppT1FG0aL9Hj4sHGyZHh6r5OUTLEvAcIorq"
}
```

- `habits`

#### Habits schema example:

```json
{
<<<<<<< HEAD
  "_id":"6246d9531ad56fbbe6fe017c",
  "username":"mike","habitName":"walking",
  "frequency":"4","notes":"Hello",
  "startDate":1648809674963,
  "finishDate":1649414474963,
  "complete":false,
  "currentStreak":1,
  "topStreak":1,
  "outOfWeek":false,
  "lastUpdate":"Fri, 01 Apr 2022"
  
  }


=======
   "_id":"6246bef32f55b00637816987",
   "username":"futureproof",
   "habitName":"running",
   "frequency":"7",
   "notes":"Half an hour every day",
   "startDate":1648797202189,
   "finishDate":1649402002189,
   "complete":false,
   "currentStreak":1,
   "topStreak":1,
   "outOfWeek":false,
   "lastUpdate":"Fri, 01 Apr 2022"
}
```

>>>>>>> 6ec78afa30355d0b660036eafd5d49b818d4b7d5
# Routes

## Auth Routes

| **URL**        | **HTTP Verb** | **Action**     |
| -------------- | ------------- | -------------- |
| /auth/login    | POST          | authentication |
| /auth/register | POST          | authentication |

#### Body for registration request

```json
{
<<<<<<< HEAD
  "username": "new_username",
  "email": "new_email",
  "password": "new_password"
=======
  "username": "futureproof",
  "email": "futureproof@gmail.com",
  "password": ""
>>>>>>> 6ec78afa30355d0b660036eafd5d49b818d4b7d5
}
```

#### Body for login request

```json
{
  "email": "Frank",
  "password": "frank_password"
}
```
<!--
## User Routes

| **URL**          | **HTTP Verb** | **Action** |
| ---------------- | ------------- | ---------- |
| /users           | GET           | index      |


## Score Routes

| **URL**                             | **HTTP Verb** | **Action**      |
| ----------------------------------- | ------------- | --------------- |
| /habits/:username                   | GET           | index           |



![homepage](https://i.ibb.co/687JsCR/homepage.png) 
![created habits](https://i.ibb.co/WnWpkpG/created-habits.png) ![incomplete&outofweek](https://i.ibb.co/gPwL73f/incomplete-outofweek.png) ![updated&complete](https://i.ibb.co/X3D2Lh0/updated-complete.png) !
