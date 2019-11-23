if (process.env.NODE_ENV !== 'production')
{
    require('dotenv').load();
}
const express = require('express');
const router = express.Router();
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripe = require('stripe')(stripeSecretKey);
const cors = require("cors");
const uuid = require("uuid/v4")

router.use(cors());
router.post("/checkout", async (req, res) => {
    let error;
    let status;
    try{
        const{token, eventPrice} = req.body;
        const customer = await
        stripe.customers.create({
            email: token.email,
            source: token.id
        });
        //used to ensures that user is not charged twice
        const idempotency_key = uuid()
        const charge = await stripe.charges.create(
            {
                amount: eventPrice,
                currency: "usd",
                customer: customer.id,
                receipt_email: token.email,
            },
            {
                idempotency_key
            }
        );
        // console.log("Charge:", {charge});
        status = "success";
    } catch(error){
        // console.error("Error:", error);
        status = "failure";
    }
})

module.exports = router;