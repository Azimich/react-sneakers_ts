import React from "react"
import { Link } from "react-router-dom"

import Logo from "../../assets/logo.svg"
import Cart from "../../assets/cart.svg"
import Favorites from "../../assets/favorite.svg"

const Header = () => {
  return (
    <header className="border-gray bottom-[1px] mb-10 flex justify-between border-b py-10">
      <Link to={"/"}>
        <img src={Logo} alt="logo" />
      </Link>
      <div className="flex gap-5">
        <Link to={"/favorites"} className="flex">
          <img src={Favorites} alt="Favorites" />
        </Link>
        <div className="hover:[] flex cursor-pointer items-center gap-2">
          <img className="w-[22px]" src={Cart} alt="cart" />
          <span className="text-[12px] font-medium text-slate-500">1222 руб</span>
        </div>
      </div>
    </header>
  )
}

export { Header }
