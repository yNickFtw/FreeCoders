import express from "express";
import association from "./models/association";
import sequelize from "./database";
import cors from "cors";
import router from "./routes";
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(router)

const port = process.env.PORT;

association.init(() => {
  sequelize
    .sync({ force: true })
    .then(() => {
      console.log("Connection has estabilished with successfully");
    })
    .catch((err) => {
      console.log("Wops! Something went wrong: " + err);
    });
});

app.listen(port, () => {
  console.log("Server running on port: " + port);
});
