// import dotenv from "dotenv";
// dotenv.config();

// import express from "express";
// import cors from "cors";
// import cookieParser from "cookie-parser";
// import connectDB from "./db/connect.js";

// const app = express();

// //importing routes
// import EventRoutes from "./routes/EventRoutes.js";
// import UserRoutes from "./routes/UserRoutes.js";
// import ContactMessageRoutes from "./routes/ContactRoutes.js";
// import AdminRoutes from "./routes/AdminRoutes.js";
// import BookingRoutes from "./routes/BookingRoutes.js";
// import ReviewRoutes from "./routes/ReviewRoutes.js";
// import CategoryRoutes from "./routes/CategoryRoutes.js";

// //PORT
// const PORT = process.env.PORT || 5000;

// //Disable ETag generation
// app.set("etag", false);

// //middlewares
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     credentials: true,
//   }),
// );
// app.use(cookieParser());
// app.use(express.json());
// app.use("/uploads", express.static("uploads"));

// //routing middlewares
// app.use("/api/auth", UserRoutes);
// app.use("/api/events", EventRoutes);
// app.use("/api/contact", ContactMessageRoutes);
// app.use("/api/admin", AdminRoutes);
// app.use("/api/bookings", BookingRoutes);
// app.use("/api/review", ReviewRoutes);
// app.use("/api/categories", CategoryRoutes);

// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ message: err.message || "Something went wrong" });
// });

// const start = async () => {
//   try {
//     await connectDB(process.env.MONGO_URI);
//     app.listen(PORT, console.log(`Server is connected to port: ${PORT}`));
//   } catch (error) {
//     console.log(error);
//   }
// };

// start();



import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import connectDB from "./db/connect.js";

const app = express();

// importing routes
import EventRoutes from "./routes/EventRoutes.js";
import UserRoutes from "./routes/UserRoutes.js";
import ContactMessageRoutes from "./routes/ContactRoutes.js";
import AdminRoutes from "./routes/AdminRoutes.js";
import BookingRoutes from "./routes/BookingRoutes.js";
import ReviewRoutes from "./routes/ReviewRoutes.js";
import CategoryRoutes from "./routes/CategoryRoutes.js";

// PORT
const PORT = process.env.PORT || 5000;

// Disable ETag generation
app.set("etag", false);

// Middlewares

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

// Static folder for uploads
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

// Root route (for testing)
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// Routing middlewares
app.use("/api/auth", UserRoutes);
app.use("/api/events", EventRoutes);
app.use("/api/contact", ContactMessageRoutes);
app.use("/api/admin", AdminRoutes);
app.use("/api/bookings", BookingRoutes);
app.use("/api/review", ReviewRoutes);
app.use("/api/categories", CategoryRoutes);

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: err.message || "Something went wrong" });
});

// Start server
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () =>
      console.log(`Server is connected to port: ${PORT}`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();