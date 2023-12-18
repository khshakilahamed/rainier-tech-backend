const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();

const globalErrorHandler = require("./src/app/middlewares/globalErrorHandler");
const authRoutes = require("./src/app/routes/auth.route");
const courseRoutes = require("./src/app/routes/course.route");

const corsOptions = {
  origin: true,
  credentials: true,
};
app.use(cors(corsOptions));
app.use(cookieParser());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/auth", authRoutes);
app.use("/api/course", courseRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(globalErrorHandler);

// handle not found route
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Not Found",

    errorMessage: [
      {
        path: req.originalUrl,
        message: "API Not Found",
      },
    ],
  });

  next();
});

module.exports = app;
