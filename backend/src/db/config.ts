import { Sequelize } from "sequelize-typescript";
import { Products } from "../models/products";

// const connection = new Sequelize("products", " ", " ", {
//   host: "localhost",
//   dialect: "mysql",
//   // port: 3306,
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 30000,
//   },
// });

// i got connection problem which is from my pc.
const connection = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "products",
  logging: false,
  models: [Products],
});
connection
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.log("Unable to connect to the database:", err);
  });

export default connection;
