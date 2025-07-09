// index.js
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

// Root route to test Render CI/CD
app.get("/", (req, res) => {
  res.send("🚀 Render CI/CD is working perfectly!");
});

// Additional sample route (optional)
app.get("/status", (req, res) => {
  res.json({ message: "✅ Backend is live and healthy!" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
