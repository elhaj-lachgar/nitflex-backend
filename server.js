const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require ('cors');
const morgan = require ('morgan')

const ConnectedDB = require("./config/ConnectedDB");
const UnhandledError = require("./config/UnhandleError");
const ErrorRoute = require("./middleware/ErrorRoute");
const Errors = require("./utils/Errors");
const UserRoute = require ('./api/UserRoute');

// config
dotenv.config({ path: "./config.env" });



ConnectedDB();



app.use(cors());

app.use(morgan('dev'))

app.use(express.json({limit:"10kb"}));


app.use("/api/v1/user" , UserRoute);


app.all("*", (req, res, next) =>
  next(new Errors("this not include in app ", 400))
);

app.use(ErrorRoute);

const server = app.listen(process.env.PORT);

process.on("unhandledRejection", (err) => UnhandledError(err, server));
