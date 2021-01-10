const express = require('express')

const app = express();

app.use('/users', (req, res, next) =>{
    res.send(
        '<h1>Users</h1><ul><li>User1</li><li>User2</li><li>User3</li></ul>'
        
)
});

app.use('/', (req, res, next) =>{
    res.send(
        '<h1>Hello</h1>'
)
});

app.listen(3000)