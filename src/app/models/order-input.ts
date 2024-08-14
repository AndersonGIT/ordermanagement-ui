import { OrderItemInput } from "./order-item-input";

export interface OrderInput {
  id?: number,
  clientId: number,
  paymentStatus: boolean,
  //creationDate: Date,
  orderItems: OrderItemInput[]
}
