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

# Routes

## Auth Routes

| **URL**        | **HTTP Verb** | **Action**     |
| -------------- | ------------- | -------------- |
| /auth/login    | POST          | authentication |
| /auth/register | POST          | authentication |

#### Body for registration request

```json
{
  "username": "futureproof",
  "email": "futureproof@gmail.com",
  "password": ""
}
```

#### Body for login request

```json
{
  "username": "Frank",
  "password": "frank_password"
}
```
<!--
## User Routes

| **URL**          | **HTTP Verb** | **Action** |
| ---------------- | ------------- | ---------- |
| /users           | GET           | index      |
| /users/:username | GET           | show       |

## Score Routes

| **URL**                             | **HTTP Verb** | **Action**      |
| ----------------------------------- | ------------- | --------------- |
| /scores                             | GET           | index           |
| /scores/username/:username          | GET           | show            |
| /scores/cat/:cat                    | GET           | show            |
| /scores/username/:username/cat/:cat | GET           | show            |
| /scores/leadersboard                | GET           | show            |
| /scores/post                        | POST/PATCH    | create & update |
| /scores/username/:username          | DELETE        | destroy         |

#### Body for the score POST request

```json
{
  "username": "Frank",
  "cat": "science fiction",
  "score": 28
}
``` -->

![homepage](https://i.ibb.co/687JsCR/homepage.png) 
![created habits](https://i.ibb.co/WnWpkpG/created-habits.png) ![incomplete&outofweek](https://i.ibb.co/gPwL73f/incomplete-outofweek.png) ![updated&complete](https://i.ibb.co/X3D2Lh0/updated-complete.png) !
