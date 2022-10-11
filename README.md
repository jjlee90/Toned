<p align="center">
<img src="client/src/imgs/toned-logo.svg" width="25%" >
<h1 align="center">Toned</h1>
<h3 align="center"><a  src="https://toned-mern.herokuapp.com/">Website</a>
</h3></p>

Toned is a wonderful new fitness tracker to help you reach and maintain all of your fitness goals. Toned allows you to track your progress by logging your exercises, sets, reps, and weight. Create a workout plan before the gym or log your workouts as you go. Not sure how much weight you pulled during your last session? No problem! Toned has you covered, just look back at your previous exercises! Keep pushing, stay motivated and get Toned!

<br/>
<br/>

<img src="https://media0.giphy.com/media/EazosNyOy70am5CuRp/giphy.gif?cid=790b761147d87e040867d9efb477d6801be9a9d451bb6834&rid=giphy.gif&ct=g" width="45%">
<img src="https://media3.giphy.com/media/MbYk7w9AoBC9QL4ViB/giphy.gif?cid=790b76111cc06d71349d942a32d321f19aec4694d2365a48&rid=giphy.gif&ct=g" width="45%"/>

<br/>

## Features

- Create User
- Add Workouts
- View Past Workouts
- Edit Past Workouts
- Delete Past Workouts

</br>

## Technologies

This project was built using the following:

- MongoDB
- Express
- React
- Node

</br>

## Run application locally

- Fork and clone repository
- Run npm install in root directory

- Connect to a database. Cd /server and create config.env. In config.env create variable ATLAS_URI="YOUR CONNECTION STRING"
  PORT=3000

- cd server and run node server.js
- cd ../client and run npm install
- Run npm start

</br>

## Endpoints

<table>
    <thead>
        <tr>
        <th>Method</th>
        <th>Endpoint</th>
        <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>GET</td>
            <td>/exercise/:user</td>
            <td>Retrieves all exercises related to the user</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/exercise/id/:id</td>
            <td>Get an exercise by the exercise id</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/:user/specific/:workout</td>
            <td>Return all instances of a specific workout related to the user. E.g. return all squats</td>
        </tr>
        <tr>
            <td>POST</td>
            <td>/</td>
            <td>Create exercise</td>
        </tr>
        <tr>
            <td>PUT</td>
            <td>/:id</td>
            <td>Update exercise by id</td>
        </tr>
        <tr>
            <td>DELETE</td>
            <td>/:id</td>
            <td>Delete exercise by id</td>
        </tr>
    </tbody>
</table>

/user endpoints operate similarly. Depending on specified endpoint, User can be retrieved, created, updated or deleted.

User must be logged in, in order to CRUD exercises.

</br>

## Contributors

- [Joey Hoellerich](https://github.com/JoeyHoellerich)
- [Jaxson Johnson](https://github.com/WaffleKone)
- [Joseph Lee](https://github.com/jjlee90)
- [Dimitri Ferguson](https://github.com/Dimitriferg)
