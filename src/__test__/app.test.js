const request = require("supertest");
const app = require("../app");

describe("GET /", () => {
  it("should return 200 and welcome message", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("message", "Welcome");
  });
});

describe("POST /api/auth/register", () => {
  it("should register a user and return 201 with user data", async () => {
    const res = await request(app).post("/api/auth/register").send({
      username: "test",
      password: "test1",
      email: "test@gmail.com",
    });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("user");
    expect(res.body.user).toHaveProperty("username", "test");
    // expect(res.body).toHaveProperty("password");
    expect(res.body.user).toHaveProperty("email", "test@gmail.com");
  });
});
