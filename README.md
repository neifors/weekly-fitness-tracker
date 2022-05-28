# Weekly Fitness Tracker

Now live here: https://weekly-fitness-tracker.netlify.app/ (https://weekly-fitness-tracker.netlify.app/)
[Isabel](https://github.com/neifors), [Leanne](https://github.com/leannesobogun), [Mike](https://github.com/mwezn) and [Paul](https://github.com/PaulNKD)

## Table of Contents

- Purpose of our app
- Installation & Usage
- Technologies
- Database Schema
- Routes

# Purpose of our app
- The purpose of our app is to allow users to keep track of their habits 
- The basic functionality is now working,
- Frontend features to be added could include a calendar, a email reminder &/or a general improvement in the CSS.


# Installation & Usage

### Installation

- Clone the repo
- Open terminal and navigate to the `weekly-fitness-tracker/server` folder
- Run `npm install` to install dependencies
- Navigate back to the `weekly-fitness-tracker` folder to run bash scripts

### Local Usage (Docker for Server and Database)

`bash _scripts/startDev.sh`

- Starts api & db services
- Runs db migrations
- Seeds db for development
- Serves api & client/index.html on `localhost:3000`
### If theres problems running startDev.sh (because of OS) ensure docker is installed on your system then
  Manually type the following:
   - For Linux OS: `docker-compose -f docker-compose.yaml -f docker-compose.dev.yaml up`
   - For Windows OS: `docker compose -f docker-compose.yaml -f docker-compose.dev.yaml up`
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

### Local Usage (Cient)

- Go to client folder and open index.html using your browser.
- You can also Open with Live Server from VS Code if you have installed the extension.
- It depends on the server so it won't work properly until the server is running

## **Technologies**

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Docker](https://docker.com/)
- [Jest](https://jestjs.io/)
- [MongoDB](https://www.mongodb.com/)

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
  "password": "password1"

}
```

#### Body for login request

```json
{
  "email": "futureproof@gmail.com",
  "password": "password1"
}
```

## User Routes

| **URL**     | **HTTP Verb** | **Action** |
| ----------- | ------------- | ---------- |
| /users      | GET           | index      |



## Habits Routes

| **URL**            | **HTTP Verb** | **Action**     |
| ------------------ | ------------- | -------------- |
| /habits/:username  | GET           | index          |
| /habits            | POST          | create         |
| /habits/:id        | DELETE        | delete         |
| /habits/:id        | PATCH         | update         |

#### Body for create habit request

```json
{
  "username": "futureproof",
  "habitName": "Squats",
  "frequency": "3",
  "notes": "ideally 60 repetition/day"
}
```

#### Body for update request

```json
{
  "today": "217763187491"
}
```

# Wins & Challenges

## Wins

## Challenges

# HOW CLIENT LOOKS

![homepage](https://i.ibb.co/687JsCR/homepage.png) 
![created habits](https://i.ibb.co/WnWpkpG/created-habits.png) ![incomplete&outofweek](https://i.ibb.co/gPwL73f/incomplete-outofweek.png) ![updated&complete](https://i.ibb.co/X3D2Lh0/updated-complete.png) !
