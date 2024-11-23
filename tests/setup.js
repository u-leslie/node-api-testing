const { MongoMemoryServer } = require("mongodb-memory-server-core");
const mongoose = require("mongoose")
let mongoServer;

jest.setTimeout(100000);
beforeAll(async () => {
  // mongoServer = await MongoMemoryServer.create({
  //   binary: {
  //     version: "5.0.14",
  //     downloadDir: "./mongodb-binaries",
  //   },
  // });

  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  process.env.MONGO_URI = uri;
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongoServer.stop();
});
