require("dotenv").config(); // add this line on top

const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("🚀 Render CI/CD is working perfectly!");
});

app.get("/status", (req, res) => {
  res.json({ message: "✅ Backend is live and healthy!" });
});

app.get("/api/greet", (req, res) => {
  res.json({ message: process.env.GREETING || "👋 Hello from backend!" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
