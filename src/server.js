const app = require("./app");
const connectDB = require("./utils/dbConn");
require("dotenv").config();


connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
