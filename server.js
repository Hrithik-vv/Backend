const dotenv = require("dotenv");
const databaseConnection = require("./config/databaseConnection");
const app = require("./app");
const path = require("path");

dotenv.config({ path: path.join(__dirname, "config", "config.env") });

databaseConnection();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
