"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = require("body-parser");
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./db/config"));
const route_1 = __importDefault(require("./routes/route"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
// var corsOptions = {
//   origin: "http://localhost:9000",
// };
app.use((0, cors_1.default)());
app.use((0, body_parser_1.json)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/products", route_1.default);
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
config_1.default
    .sync()
    .then(() => {
    console.log("Database synced successfully");
})
    .catch((err) => {
    console.log("err", err);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
