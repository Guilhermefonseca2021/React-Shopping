import "dotenv/config"

export default {
    secretKey: process.env.STRIPE_SECRET_KEY || null
}