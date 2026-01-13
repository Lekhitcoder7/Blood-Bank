import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import app from "./src/app.js";
import authRoutes from "./src/routes/authRoutes.js";
import db from "./src/config/db.js"; // ✅ database yahin se aayega

dotenv.config();


// middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


// 🔥 ROUTES
app.use("/auth", authRoutes);
// app.post("/reg/usr", UserRegister);


// ---------------- CONTROLLERS ----------------

// bloodbank
import RequestHandler from "./controllers/bloodbank/RequestHandler.js";
import RequestClassHandler from "./controllers/bloodbank/RequestClassHandler.js";
import UpdateBlood from "./controllers/bloodbank/UpdateStockHandler.js";
import UpdateHealthHandler from "./controllers/bloodbank/UpdateHealthHandler.js";
import HandleRequestHandler from "./controllers/bloodbank/HandleRequestHandler.js";
import SearchHandler from "./controllers/bloodbank/SearchHandler.js";

// user
import UserLoginHandler from "./controllers/user/userLoginHandler.js";
import UserRegisterHandler from "./controllers/user/UserRegisterHandler.js";

// employee
import EmployeeLoginHandler from "./controllers/employee/EmployeeLoginHandler.js";
import EmployeeRegisterHandler from "./controllers/employee/EmployeeRegisterHandler.js";

// dashboard
import DashboardHandler from "./controllers/dashboard/DashboardHandler.js";
// import UserRegister from "../client/src/components/user/userRegister.js";

// register controllers
UserRegisterHandler(app, db);
UserLoginHandler(app, db);
RequestClassHandler(app, db);

EmployeeRegisterHandler(app, db);
EmployeeLoginHandler(app, db);
UpdateHealthHandler(app, db);
HandleRequestHandler(app, db);

DashboardHandler(app, db);
UpdateBlood(app, db);
SearchHandler(app, db);
RequestHandler(app, db);

// test route
app.get("/", (req, res) => {
  res.send("🚀 Blood Bank Backend is Running Successfully");
});

// listen
const PORT = 5003;
app.listen(PORT, () => {
  console.log("listening to port :", PORT);
});
