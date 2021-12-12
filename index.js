const express = require("express");
const cors = require("cors");
const env = require("dotenv");
const rateLimit = require("express-rate-limit");
env.config();
const app = express();
// Rate limiting
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 Mins
  max: 5,
});
app.use(limiter);
app.set("trust proxy", 1);

app.use(limiter);

const attach = (req, res, next) => {
  req.tany = "abhis";
  next();
};
app.use(cors());
app.use(attach);

const PORT = process.env.PORT || 5000;
app.get("/", require("./routes"));

app.listen(PORT, () => {
  "server started on 3000";
});
