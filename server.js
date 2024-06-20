const express = require('express');
const app = express();
const port = 3000;


let todos = [];

app.use(express.json());
app.use(express.static('public'));

app.get('/api/todos', (req, res) => {
    res.json(todos);
});

app.post('/api/todos', (req, res) => {
    const todo = req.body.todo;
    todos.push(todo);
    res.status(201).json({ message: 'Todo added!' });
});

if (require.main === module) {
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
}

module.exports = app;
