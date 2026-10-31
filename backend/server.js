const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const projectRoutes = require("./routes/projectRoutes");

dotenv.config();

const app = express();

// Middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
  })
);

app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Personal Portfolio API is running!",
  });
});

// Project routes
app.use("/api/projects", projectRoutes);

// Start server after connecting to MongoDB
const startServer = async () => {
  try {
    await connectDB();

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, "0.0.0.0",  () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Server startup failed:", error.message);
    process.exit(1);
  }
};

startServer();