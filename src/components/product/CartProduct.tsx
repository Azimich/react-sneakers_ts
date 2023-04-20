import React, { FC } from "react"
import { useDispatch } from "react-redux"

import { removeToCart } from "../../store/cartSlice"
import close from "../../assets/close.svg"
interface ICartItem {
  id: number
  title: string
  image: string
  price: number
}

const CartProduct: FC<ICartItem> = (props) => {
  const dispatch = useDispatch()
  const handleRemove = () => {
    dispatch(removeToCart({ id: props.id }))
  }

  return (
    <div className="border-black/8 flex items-center justify-around gap-1 rounded-[12px] border-[1px] px-2 py-6">
      <div className="h-[80px] w-[80px]">
        <img src={props.image} alt="sneaker" />
      </div>
      <div className="max-w-[220px] md:w-[180px]">
        <h3 className="mb-1 text-[18px] font-medium text-black/50 md:text-[16px] md:font-normal">{props.title}</h3>
        <p className="text-[16px] font-bold text-black/80 md:text-[14px]">{props.price} руб</p>
      </div>
      <div
        onClick={handleRemove}
        className="ease flex h-8 w-8 cursor-pointer items-center justify-center rounded-[8px] border-[1px] border-black/30 opacity-50 duration-100 hover:opacity-100 md:h-6 md:w-6"
      >
        <img src={close} alt="close" className="h-6 w-6 md:h-5 md:w-5" />
      </div>
    </div>
  )
}

export default CartProduct
