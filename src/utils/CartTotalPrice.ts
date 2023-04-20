import { ICartProps } from "../store/cartSlice"

export const calcTotalPrice = (items: ICartProps[]) => {
  return items.reduce((sum, obj) => obj.price + sum, 0)
}