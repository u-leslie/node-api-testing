// const { MongoMemoryServer } = require("mongodb-memory-server-core");
// const mongoose = require("mongoose")
// let mongoServer;



// // jest.setTimeout(100000);
// beforeAll(async () => {
//   // mongoServer = await MongoMemoryServer.create({
//   //   binary: {
//   //     version: "5.0.14",
//   //     downloadDir: "./mongodb-binaries",
//   //   },
//   // });

//   mongoServer = await MongoMemoryServer.create();
//   const uri = mongoServer.getUri();
//   process.env.MONGO_URI = uri;
  
// });

// beforeEach(async () => {
//   if (mongoose.connection.readyState === 1) {
//     await mongoose.connection.db.dropDatabase();
//   }
// });


// afterAll(async () => {
//   if (mongoose.connection.readyState !== 0) {
//     await mongoose.connection.dropDatabase();
//     await mongoose.connection.close();
//   }
//   if (mongoServer) {
//     await mongoServer.stop();
//   }
// });


const { MongoMemoryServer } = require("mongodb-memory-server-core");
const mongoose = require("mongoose");
let mongoServer;

jest.setTimeout(100000); // Increase Jest timeout

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = await mongoServer.getUri(); 
  console.log("MongoDB URI:", uri);

  process.env.MONGO_URI = uri; 

  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 60000,
  });
});



beforeEach(async () => {
  if (mongoose.connection.readyState === 1) {
    await mongoose.connection.db.dropDatabase();
  }
});

afterAll(async () => {
  if (mongoose.connection.readyState !== 0) {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
  }
  if (mongoServer) {
    await mongoServer.stop();
  }
});
