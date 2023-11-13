import express from "express";
import config from "./config/database";
import connectToDatabase from "./database/connect";

const app = express();

app.get("/ping", (request, response) => {
  response.send("pong");
});

connectToDatabase()
  .then(() => console.log("connected to the bank"))
  .catch((error) => console.log(`Houve um erro ${error}`));

app.listen(config.PORT || 3333, () => {
  console.log("Server up adn running at port ", config.PORT);
});
