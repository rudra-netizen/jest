const express = require("express");

const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  return res.status(200).json({ message: "Welcome" });
});

app.post("/api/auth/register", (req, res) => {
  const { username, password, email } = req.body;
  return res.status(201).json({
    message: "User registered successfully",
    user: { username, email },
  });
});
module.exports = app;
