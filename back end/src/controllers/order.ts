import { Request, Response } from "express";
import { IOrder, IOrderItem } from "../types";
import Order from "../model/order";
import stripe from "stripe";
import config from "../config/stripe";

const stripeClient = new stripe(`${config.secretKey}`, {
  apiVersion: "2022-11-15",
});

type CreateOrderType = Pick<
  IOrder,
  "deliveryAddress" | "totalPrice" | "user" | "orderItems"
>;

const BASE_UNIT = 100;

function getTotalAmount(orderItems: IOrderItem[]) {
  return orderItems.reduce((acc, item) => acc + item.price + item.quantity, 0);
}

export async function createOrder(request: Request, response: Response) {
  try {
    const { deliveryAddress, orderItems, totalPrice, user }: CreateOrderType =
      request.body;

    const totalAmount = getTotalAmount(orderItems);

    const paymentIntent = await stripeClient.paymentIntents.create({
      amount: totalPrice,
      currency: "inr",
    });

    const order = await Order.create({
      user,
      orderItems,
      deliveryAddress,
      totalPrice,
      paymentIntendID: paymentIntent.id,
      paymentDetils: {},
    });

    response.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    response.send({ message: "Something went wrong in order. " });
  }
}
