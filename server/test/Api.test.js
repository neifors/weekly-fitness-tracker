const supertest = require('supertest');
const app = require("../server");
const request= supertest(app)

describe('api test', () => {
    it('It gets all users endpoint', async ()=> {
        const res = await request.get("/users");
        expect(res.statusCode).toBe(200)
    });
    it('It gets habits by username', async ()=>{
        const res=await request.get("/habits/isabel")
        expect(res.statusCode).toBe(200)
    })
    it('Cant login with unknown emails', async ()=>{
        const body = {username: "random", email: "test@gmail.com", password: 111}
        const res=await request.post("/auth/login")
           .send(body)
        expect(res.statusCode).toBe(401)
    })
});
