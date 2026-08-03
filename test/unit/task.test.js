const request = require("supertest");
const app = require("../app");

describe("Task API", () => {

    let id;

    test("POST /api/tasks", async () => {
        const res = await request(app)
            .post("/api/tasks")
            .send({
                description: "My Task"
            });
        expect(res.statusCode).toBe(201);

        expect(res.body.description).toBe("My Task");
        id = res.body.id;
    });

    test("GET /api/tasks", async () => {

        const res = await request(app)
            .get("/api/tasks");

        expect(res.statusCode).toBe(200);

        expect(Array.isArray(res.body)).toBe(true);

    });

    test("GET /api/tasks/:id", async () => {

        const res = await request(app)
            .get(`/api/tasks/${id}`);

        expect(res.statusCode).toBe(200);

    });

    test("PUT /api/tasks/:id", async () => {

        const res = await request(app)
            .put(`/api/tasks/${id}`)
            .send({
                status: "done"
            });

        expect(res.statusCode).toBe(200);

        expect(res.body.status).toBe("done");

    });

    test("DELETE /api/tasks/:id", async () => {

        const res = await request(app)
            .delete(`/api/tasks/${id}`);

        expect(res.statusCode).toBe(204);

    });

});