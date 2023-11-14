export interface IProduct {
  _id: string
  name: string
  description: string
  price: number
  image: string
  createdAt: string
  updatedAt: string
}

export interface IUser {
  name: string
  email: string
}

export interface IOrderItem {
  name: string
  quantity: number
  image: string
  price: number
  product: string
}

export interface IDeliveryAddress {
  address: string
  city: string
}
export interface IOrder {
  _id: string
  email: string
  user: IUser
  orderItems: IOrderItem[]
  deliveryAddress: IDeliveryAddress
  paymentDetails: {}
  paymentIntendID: string
  totalPrice: number
  createdAT: string
  updatedAt: string
  paymentStatus: string
}

