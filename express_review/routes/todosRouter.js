//Steps
//Create a route for todos
//Query the db with knex to get all todos
//Render index view with todos that we got back

//So inside the routes directory we create this new file for todos routes, and we call it todosRouter
//The name of this router comes from the table name within our database called "todos"
//Add out first route 

const express = require('express');
const knex = require('../db/client'); //this allows us to interact with the db

//we are only using the route functionality from express
//so we don't need to create the initial of express
//but the initial of express.Router
const router = express.Router();

//NAME: todos#index, METHOD: GET, PATH: /todos
router.get('/', (req, res) => {
    //Query the db with knex to get all the todos
    //knex.select(*).from('todos').then(...) <- this works, but it's easier to write the line below:
    knex('todos')
    .orderBy("createdAt", "desc")
    .then(todos => {
        console.log(todos);
        res.render("todos/index", {list: todos}); //list here is just what we call the key "variable" that we have access to in the view page with the value of the database "todos"
    })
})

//get the new page to create a new todo item
router.get('/new', (req, res) => {
    res.render("todos/new");
})

//post the data that is entered into the new todo item form
router.post('/', (req, res) => {
    //all the data fro the form is going to be stored inside req.body
    //it has to be a todo req
    let username=req.cookies.username || 'anonymous';
    knex('todos')
    .insert({
       username: username,
       title: req.body.title,
       content: req.body.content,
       imageUrl: req.body.imageUrl
    })
    .returning('*') //ask knex to return the record we just added
    .then(data => {
        res.redirect(`/todos/${data[0].id}`)
        // /todos/5
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    knex('todos')
    .where("id", id)
    .first()
    .then(data => {
        res.render("todos/show", { todo: data })
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    knex('todos')
    .where("id", id)
    .del()
    .then(() => {
        res.redirect('/todos')
    })
})

//route to get the edit page
//also get that specific record and pass it to the edit page
router.get('/:id/edit', (req,res) => {
    knex("todos")
    .where("id", req.params.id)
    .then(data => {
        res.render("todos/edit", { todo: data[0] });
    })
})

router.patch('/:id', (req, res) => {
    console.log(req.body);
    console.log(req.params);
    knex("todos")
    .where("id", req.params.id)
    .update(
        {
        title: req.body.title,
        content: req.body.content,
        imageUrl: req.body.imageUrl
    }
    ).then(() => {
        res.redirect(`/todos/${req.params.id}`)
    })
})

//export this router in the end so that we can use the routes inside app.js
module.exports = router;
