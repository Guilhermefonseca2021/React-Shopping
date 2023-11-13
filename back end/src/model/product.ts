import mongoose, { Schema } from "mongoose";

const productSchema = new Schema<IProduct> ({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
})