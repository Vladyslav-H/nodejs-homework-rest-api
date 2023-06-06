/* eslint-disable no-undef */
const app = require("../../app");
const request = require("supertest");
const mongoose = require("mongoose");

require("dotenv").config();

const { DB_TEST_HOST, PORT } = process.env;

describe("test login routes", () => {
  let server;

  beforeAll(() => {
    server = app.listen(PORT);
    mongoose.connect(DB_TEST_HOST);
  });

  afterAll(async () => {
    server.close();
    await mongoose.connection.close();
  });

  test("login function correct response data", async () => {
    const loginData = {
      email: "example@mail.com",
      password: "1234567",
    };

    const response = await request(app).post("/users/login").send(loginData);

    expect(response.statusCode).toBe(200);
    expect(response.body.token).toBeTruthy();
    expect(response.body.user && typeof response.body.user === "object").toBe(
      true
    );
    expect(response.body.user).toStrictEqual({
      email: expect.any(String),
      subscription: expect.any(String),
    });
  });
});
