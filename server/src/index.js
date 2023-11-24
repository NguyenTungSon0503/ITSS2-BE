import config from "./config/config.js";
import app from "./app.js";

const { SERVER_PORT } = config.env;
async function main() {
  app.listen(SERVER_PORT);
  console.log("Server listening on port", SERVER_PORT);
}

main();