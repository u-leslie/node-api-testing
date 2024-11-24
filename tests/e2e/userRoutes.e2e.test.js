const request = require("supertest");
const app = require("../../src/app");
const mongoose = require("mongoose");

describe("User Routes", () => {
  it("should create and fetch a user", async () => {
    const createUserRes = await request(app)
      .post("/api/users")
      .send({ name: "Eve", email: "eve@example.com" });

    expect(createUserRes.statusCode).toBe(201);
  });
});
