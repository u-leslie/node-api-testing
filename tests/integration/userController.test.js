const request = require("supertest");
const app = require("../../src/app");
const User = require("../../src/models/user");

describe("User Controller", () => {
  it("should create a user and return 201", async () => {
    const res = await request(app)
      .post("/api/users")
      .send({ name: "Alice", email: "alice@gmail.com" });

    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe("Alice");
  });
});
