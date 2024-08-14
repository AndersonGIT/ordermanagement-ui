import { OrderItemOutputMap } from "./order-item-output-map";

export interface OrderOutputMap {
  id?: number,
  nomeCliente: string,
  emailCliente: string,
  pago: boolean,
  valorTotal: number,
  itensPedido: OrderItemOutputMap[];
}
