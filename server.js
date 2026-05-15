const express  = require("express");
const mongoose = require("mongoose");
const cors     = require("cors");
const path     = require("path");
const dotenv   = require("dotenv");

dotenv.config();

const app = express();

// ─── MIDDLEWARE ───────────────────────────────────────────────────────────────
app.use(cors());
app.use(express.json());

// ─── API ROUTES ───────────────────────────────────────────────────────────────
app.use("/api/auth",  require("./routes/auth"));
app.use("/api/tasks", require("./routes/tasks"));

// ─── SERVE FRONTEND (Railway production) ─────────────────────────────────────
app.use(express.static(path.join(__dirname, "../frontend/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
});

// ─── HEALTH CHECK ─────────────────────────────────────────────────────────────
app.get("/health", (req, res) => res.json({ status: "OK ⚡" }));

// ─── DATABASE + SERVER ────────────────────────────────────────────────────────
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
    app.listen(PORT, () => console.log(`🚀 Server on port ${PORT}`));
  })
  .catch((err) => {
    console.error("❌ DB Error:", err.message);
    process.exit(1);
  });
