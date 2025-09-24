const app = require("./app");
const databaseConnection = require("./config/databaseConnection")
const dotenv = require("dotenv")
dotenv.config({path:"./config/config.env"})
databaseConnection()

const PORT = process.env.PORT || 4001

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
