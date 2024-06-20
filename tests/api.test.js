const request = require('supertest');
const app = require('../server'); // server.js dosyasının doğru yolu

describe('Todo API', () => {
    beforeEach(() => {
        // Testlerden önce todos dizisini temizle
        app.locals.todos = [];
    });

    it('should return an empty list of todos initially', async () => {
        const res = await request(app).get('/api/todos');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([]);
    });

    it('should add a new todo', async () => {
        const newTodo = 'Learn QA Ops';
        const res = await request(app)
            .post('/api/todos')
            .send({ todo: newTodo });
        expect(res.statusCode).toEqual(201);
        expect(res.body.message).toEqual('Todo added!');

        const todosRes = await request(app).get('/api/todos');
        expect(todosRes.body).toContain(newTodo);
    });
});
