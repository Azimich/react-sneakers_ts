import React, { Dispatch, FC, SetStateAction } from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

import { selectCart } from "../../store/cartSlice"
import Logo from "../../assets/logo.svg"
import Cart from "../../assets/cart.svg"
import Favorites from "../../assets/favorite.svg"
import { selectFavorite } from "../../store/favoriteSlice"

interface IHeader {
  setToggleCart: Dispatch<SetStateAction<boolean>>
}

const Header: FC<IHeader> = ({ setToggleCart }) => {
  const { cartItems } = useSelector(selectCart)
  const { favoriteItems } = useSelector(selectFavorite)
  return (
    <header className="border-gray bottom-[1px] mb-10 flex justify-between border-b py-10">
      <Link to={"/"} className="md:w-22">
        <img src={Logo} alt="logo" />
      </Link>
      <div className="flex items-end gap-5">
        <Link to={"/favorites"} className="relative flex">
          <img className="h-[25px] w-[25px]" src={Favorites} alt="Favorites" />
          {favoriteItems.length > 0 && (
            <span className="absolute right-[-8px] top-[-3px] flex h-[16px] w-[16px] items-center justify-center rounded-full bg-red-600 text-center text-[10px] font-normal text-white">
              {favoriteItems.length}
            </span>
          )}
        </Link>
        <div onClick={() => setToggleCart(true)} className="hover:[] relative flex cursor-pointer items-center gap-2">
          <img className="h-[25px] w-[25px]" src={Cart} alt="cart" />
          {cartItems.length > 0 && (
            <span className="absolute right-[-8px] top-[-3px] flex h-[16px] w-[16px] items-center justify-center rounded-full bg-red-600 text-center text-[10px] font-normal text-white">
              {cartItems.length}
            </span>
          )}
        </div>
      </div>
    </header>
  )
}

export { Header }
