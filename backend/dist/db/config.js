"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const products_1 = require("../models/products");
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
const connection = new sequelize_typescript_1.Sequelize({
    dialect: "mysql",
    host: "localhost",
    port: 3306,
    username: "romeo",
    password: "romeoj",
    database: "products",
    logging: false,
    models: [products_1.Products],
});
connection
    .authenticate()
    .then(() => {
    console.log("Connection has been established successfully.");
})
    .catch((err) => {
    console.log("Unable to connect to the database:", err);
});
exports.default = connection;
