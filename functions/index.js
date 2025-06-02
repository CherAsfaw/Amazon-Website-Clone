import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import stripePackage from 'stripe';
import { onRequest } from 'firebase-functions/v2/https';
import logger from 'firebase-functions/logger';
const stripe = stripePackage(process.env.STRIPE_SECRET_KEY);


const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Success!'
  })
});


app.post("/payment/create", async (req, res) => {
  const total = parseInt(req.query.total);

  if (total > 0) {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd"
    })
    res.status(201).json({
      clientSecret: paymentIntent.client_secret
    })
    console.log("Stripe PaymentIntent:", paymentIntent);


  } else {
    res.status(401).json({
      message: "total must be greater than 0"
    })
  }
})

export const api = onRequest(app)

