const request = require("supertest");
const app = require("../../src/app");
const mongoose = require("mongoose");

describe("User Routes", () => {
  // afterAll(async () => {
  //   await mongoose.connection.close();
  // });

  it("should create and fetch a user", async () => {
    const createUserRes = await request(app)
      .post("/api/users")
      .send({ name: "Eve", email: "eve@example.com" });

    expect(createUserRes.statusCode).toBe(201);

    const getUserRes = await request(app).get(
      `/api/users/${createUserRes.body._id}`
    );
    expect(getUserRes.statusCode).toBe(200);
    expect(getUserRes.body.name).toBe("Eve");
  });
});
