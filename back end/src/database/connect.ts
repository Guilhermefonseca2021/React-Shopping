import express from "express";
import mongoose from "mongoose";
import config from "../config/database";

async function connectToDatabase() {
  await mongoose.connect(`${config.MONGODB}`);
}

export default connectToDatabase;
