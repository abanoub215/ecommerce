import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import mobileModel from "./models/mobileModel.js";
import Cors from "cors";
//configure env
dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(Cors());

//routes
app.use("/api/v1/auth", authRoutes);

//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to ecommerce app</h1>");
});

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});

app.get("/mobiles", async function (req, res) {
  try {
    const getAllMobiles = await mobileModel.find({ id: { $gte: 1, $lte: 9 } });
    if (getAllMobiles && getAllMobiles.length > 0) {
      res.send(getAllMobiles);
    } else {
      res.json({ message: "No mobiles found" });
    }
  } catch (error) {
    console.error("Error fetching mobiles:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/mobiles/::mobilesId", async function (req, res) {
  const mobileId = parseInt(req.params.mobilesId, 10);

  try {
    const getSingleMobile = await mobileModel.findOne({ id: mobileId });

    if (getSingleMobile) {
      res.send(getSingleMobile);
    } else {
      res.status(404).json({ message: "Mobile not found" });
    }
  } catch (error) {
    console.error("Error fetching mobile by ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});
