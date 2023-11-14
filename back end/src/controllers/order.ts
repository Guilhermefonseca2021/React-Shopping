import { Request, Response } from "express";
import { IOrder } from "../types";
import Order from "../model/order";
// import stripe from "stripe";

// const stripeClient = new stripe()

type CreateOrderType = Pick<
    IOrder,
    "deliveryAddress" | "totalPrice" | "user" | "orderItems"
>

export async function createOrder(request: Request, response: Response) {
  try {
    const { deliveryAddress, orderItems, totalPrice, user }: CreateOrderType = request.body;

    const order = await Order.create({
        user,
        orderItems,
        deliveryAddress,
        totalPrice,
    })



  } catch (error) {
    response.send({ message: "Something went wrong in order. " });
  }
}
