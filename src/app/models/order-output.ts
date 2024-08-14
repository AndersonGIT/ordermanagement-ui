import { OrderItemOutput } from "./order-item-output";

export interface OrderOutput {
  id?: number,
  clientName: string,
  clientEmail: string,
  paymentStatus: boolean,
  totalPrice: number,
  orderItems: OrderItemOutput[];
}
