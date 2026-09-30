/*
Purpose:
Express framework with node.js
-Try GET, POST, PUT, DELETE methods
-use routes instead of pure paths - like an API in your own
software's backend
-Compare and contrast GET query vs params
*/

const express = require("express");
const app = express()

const SERVER_PORT = process.env.PORT || 3000;

// --------------Middleware setup for each of our needs on the web server--------------
// Serving static files
// Public folder is not usally accessible by default
// Notice there is no real folder in our filesystem called static
// But this will be a path we can access in URL
app.use("/static", express.static("public"))

// Serving Static JSON
app.use(express.json())

// Serving traditional HTML body
// if we add the object parameter with property extended: true
//we can use the library qs instead of library querystring
app.use(express.urlencoded({extended: true}))

//=--------------------------------------------

//http://localhost:3000/ 
app.get("/", (request, response) => {
    response.send("<h1>Welcome to the root path of the server</h1>")
})

//http://localhost:3000/hello
app.get("/hello", (request, response) => {
    response.status(200).send("<h1>Welcome to the root path of the /hello</h1>")
})

app.get("/college",(request, response) => {
    const college = {
        method: "GET",     //This was not anything built in, we created property
        name: "Georgebrown College",
        location: "Toronto",
        established: 1907
    }
    response.json(college)  //We trust our backend as an API
})

app.get("/students/:name/:age/:city", (request, response) => {
    console.log(request.params)
    if(!request.params.name || !request.params.age || !request.params.city){
        return response.status(400).json({error:"Missing path parameters"})
    }
    const name = request.params.name;
    const age = request.params.age;
    const city = request.params.city;

    response.json({
        student_name: name,
        student_age: age,
        student_city: city
    })
})

app.post("/college",(request, response) => {
    const college = {
        method: "POST",    //This was not anything built in, we created property
        name: "Georgebrown College",
        location: "Toronto",
        established: 1907
    }
    response.json(college)  //We trust our backend as an API
})

app.put("/college",(request, response) => {
    const college = {
        method: "PUT",     //This was not anything built in, we created property
        name: "Georgebrown College",
        location: "Toronto",
        established: 1907
    }
    response.json(college)  //We trust our backend as an API
})

app.delete("/college",(request, response) => {
    const college = {
        method: "DELETE",     //This was not anything built in, we created property
        name: "Georgebrown College",
        location: "Toronto",
        established: 1907
    }
    response.json(college)  //We trust our backend as an API
})

app.listen(SERVER_PORT, () => {
    console.log("Server is running on http://localhost:" + SERVER_PORT)
})