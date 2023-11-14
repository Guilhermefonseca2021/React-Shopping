import { Router } from "express";
import { createOrder } from "../controllers/order";

const orderRoutes = Router()

orderRoutes.post("/", createOrder)

