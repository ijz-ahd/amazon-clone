require("dotenv").config();
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.SECRET_KEY);

// API

// API config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get("/", (req, res) => {
  res.status(200).send("hello world");
});

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log("payment request received", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listen
exports.api = functions.https.onRequest(app);
