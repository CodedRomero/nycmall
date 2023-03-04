import { json, urlencoded } from "body-parser";
import express from "express";
import connection from "./db/config";
import productRoutes from "./routes/route";
import Cors from "cors";

const app = express();

// var corsOptions = {
//   origin: "http://localhost:9000",
// };
app.use(Cors());
app.use(json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/products", productRoutes);

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.status(500).json({ message: err.message });
  }
);

connection
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
