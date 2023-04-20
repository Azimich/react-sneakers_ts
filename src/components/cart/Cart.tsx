import React, { Dispatch, FC, SetStateAction } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

import { PersentegePrice } from "../../utils/PersentegePrice"
import CartProduct from "../product/CartProduct"
import { selectCart } from "../../store/cartSlice"
import { Button } from "../Index"
import close from "../../assets/close.svg"
import btnArrow from "../../assets/BtnArrow.svg"
import box from "../../assets/box.svg"

interface ICart {
  toggleCart: boolean
  setToggleCart: Dispatch<SetStateAction<any>>
}

const Cart: FC<ICart> = ({ toggleCart, setToggleCart }) => {
  const { cartItems, totalPrice } = useSelector(selectCart)

  return (
    <div className="overflow-hidden">
      <div
        onClick={() => setToggleCart(false)}
        className={
          toggleCart
            ? "ease absolute right-0 top-0 z-10 h-[100%] w-[100%] bg-black/30 backdrop-blur-sm duration-300 md:opacity-0"
            : "ease absolute right-[-100%] top-0 z-10 h-[100%] w-[100%] bg-black/30 backdrop-blur-sm duration-300 md:opacity-0"
        }
      />
      <div
        className={
          toggleCart
            ? "ease absolute bottom-0 right-0 top-0 z-10 flex h-[100%] w-[40%] duration-300 2xl:w-[33%] xl:w-[40%] lg:w-[60%] md:w-[100%]"
            : "ease absolute bottom-0 right-[-150%] top-0 z-10 flex h-[100%] w-[40%] duration-300 2xl:w-[33%] xl:w-[40%] lg:w-[60%] md:w-[100%]"
        }
      >
        <div className="max-md:p-5 flex w-[100%] flex-col bg-white p-8">
          <div className="mb-10 flex items-end justify-between md:mb-8">
            <h3 className="text-[32px] font-bold md:text-[25px]">Корзина</h3>
            <img
              onClick={() => setToggleCart(false)}
              src={close}
              alt="close"
              className="ease h-7 w-7 cursor-pointer opacity-50 duration-100 hover:opacity-100"
            />
          </div>
          {cartItems.length ? (
            <>
              <ul className="cart__scroll flex h-[55vh] flex-col gap-3 overflow-auto">
                {cartItems.map((items: any) => {
                  return <CartProduct key={items.id} {...items} />
                })}
              </ul>
              {totalPrice && (
                <div className="mb-6 flex flex-1 flex-col justify-end gap-4">
                  <div className="flex flex-col gap-3">
                    <span className="flex items-baseline justify-between gap-2">
                      <p className="font-medium text-black/80">Итого:</p>
                      <p className="md:border-1 flex-1 border-2 border-dashed border-black/10"></p>
                      <p className="font-bold">{totalPrice} руб</p>
                    </span>
                    <span className="md:border-1 flex items-baseline justify-between gap-2">
                      <p className="font-medium text-black/80">Налог 5%:</p>
                      <p className="md:border-1 flex-1 border-2 border-dashed border-black/10"></p>
                      <p className="font-bold">{totalPrice / 100 * 5} руб</p>
                    </span>
                  </div>
                </div>
              )}
              <Button className="w-full gap-3">
                Оформить заказ
                <img src={btnArrow} alt="btnArrow" />
              </Button>
            </>
          ) : (
            <div className="justify-cente mt-[150px] flex flex-col items-center">
              <img src={box} alt="box" />
              <h4 className="text-center text-[30px] font-medium text-black md:text-[25px]">Корзина пустая</h4>
              <h5 className="mt-1 text-center text-[20px] text-black/50 md:text-[25px]">
                Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
              </h5>
              <Link to={"/"} onClick={() => setToggleCart(false)}>
                <Button className="mt-6 gap-2">
                  <img src={btnArrow} alt="btnArrow" className="rotate-180" />
                  Вернутся на главный
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export { Cart }
