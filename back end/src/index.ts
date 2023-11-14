import express from "express";
import config from "./config/database";
import connectToDatabase from "./database/connect";
import productRoutes from "./routes/product";

const app = express();
app.use(express.json())

app.get("/ping", (request, response) => {
  response.send("pong");
});


app.use("/products", productRoutes)


connectToDatabase()
  .then(() => console.log("connected to the bank"))
  .catch((error) => console.log(`Houve um erro ${error}`));

app.listen(config.PORT || 3333, () => {
  console.log(`Server is running at http://localhost:${config.PORT}`);
});
