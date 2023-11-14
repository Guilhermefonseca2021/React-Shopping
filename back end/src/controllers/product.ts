import { Request, response, Response } from "express";
import { IProduct } from "../types";
import Product from "../model/product";

type CreateProductRequestType = Pick<
  IProduct,
  "image" | "name" | "description" | "price"
>;

export async function createProduct(request: Request, response: Response) {
  try {
    const { image, name, price, description }: CreateProductRequestType =
      request.body;

    const product = await Product.create({
      image,
      name,
      price,
      description,
    });

    response.send(product);
  } catch (error) {
    console.log("error in createProduct", error);
    response.send({
      message: "Something went wrong while creating product",
    });
    throw error;
  }
}

export async function getProducts(request: Request, response: Response) {
  try {
    const products = await Product.find({});
    response.send(products);
  } catch (error) {
    response.send({ message: "Something went wrong in get product" });
  }
}

export async function getProductById(request: Request, response: Response) {
  try {
    const { id } = request.params;
    const product = await Product.findById(id);
    response.send(product);
  } catch (error) {
    response.send({
      message: "Something went wrong in get product",
    });
  }
}
