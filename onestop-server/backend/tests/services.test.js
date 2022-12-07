const mongoose = require("mongoose");
const request = require("supertest");
const server = require("../server");

const url = "mongodb+srv://GauravMG:pXV6QK4lCuqnpM88@hw5.eoz2llk.mongodb.net/?retryWrites=true&w=majority"

/* Connecting to the database before each test. */

beforeEach(async () => {
    await mongoose.connect(url);
  });
  
  /* Closing database connection after each test. */
  afterEach(async () => {
    await mongoose.connection.close();
  });

 
  describe("GET /category/:category", () => {
    const category ="AC"
    it("should return all categories", async () => {
      const res = await request(server).get(`/category/AC`);
      expect(res.statusCode).toBe(200);
      expect(res.body.length).toBeGreaterThan(0);
    });
  });

  describe("GET /search/:search", () => {
    it("search property test", async () => {
      const res = await request(server).get(`/search/haircut`);
      expect(res.statusCode).toBe(200);
      expect(res.body.length).toBeGreaterThan(0);
    });
  });



  describe("POST /login", () => {
    it("should login to user account", async () => {
      const res = await request(server).post("/login").send({
        email: "vijay@mail.com",
        password: "Password@123"
      });
      expect(res.statusCode).toBe(200);
      expect(res.body.email).toBe("vijay@mail.com");
    });
  });

  describe("POST /register", () => {
    it("should register a new user account", async () => {
      const res = await request(server).post("/register").send({
        userName: "abhitesh",
        password: "Password@123",
        phoneNumber:"9533611100",
        email:"abhitsdadesh@gmail.com"
        
      });
      expect(res.statusCode).toBe(200);
    });
  });

    describe("POST /profregister", () => {
    it("should register a new professional account", async () => {
      const res = await request(server).post("/profregister").send({
        userName: "VJaNewd",
        password: "dfhsjs@123",
        phoneNumber:"9902611100",
        email:"Monuasdty@gmail.com",
        address:"5248",
        serviceOffered:"paint"
      });
      expect(res.statusCode).toBe(200);
    });
  });

