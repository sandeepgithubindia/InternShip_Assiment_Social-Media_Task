const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes"); // If you split auth routes
const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

mongoose.connect("mongodb://localhost:27017/socialMediaTask", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes); // Auth route

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
