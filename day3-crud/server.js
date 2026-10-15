const express = require('express');

const app = express();

//  middleware for accepting json data
app.use(express.json())
let users = []


// get-Read
app.get('/', (req,res) => {
    res.send(users)
})

// create
app.post('/create', (req, res) => {
    let body = req.body
    users.push(body)

    res.send('user saved successfully')
})

// delete
app.delete("/delete/:id", (req, res) => {
    let {id} = req.params

    let deletedUser = users.filter((val) => val.id !== id )
    users = deletedUser

    res.send(users)
})

// update
app.put("/update/:id", (req, res) => {
    let {id} = req.params
    let {name} = req.body

    let updatedUser = users.map((val) => val.id === id ? {...val, name}: val)
    users = updatedUser

    res.send('user updated successfully')
})

app.listen(3000,() => {
    console.log('server is running on port 3000')
}) 