import React, { FC, useEffect, useState } from "react"
import { useDispatch } from "react-redux"

import Plus from "../../assets/disPlus.svg"
import isFavorite from "../../assets/isFavorite.svg"
import disFavorite from "../../assets/disFavorite.svg"
import add from "../../assets/add.svg"
import { ICartProps, addToCart } from "../../store/cartSlice"
import { IFavorite, addToFavorite } from "../../store/favoriteSlice"

interface IProduct {
  id: number
  title: string
  image: string
  price: number
  toggleCart?: boolean
}

const Product: FC<IProduct> = ({ image, title, price, id, toggleCart }) => {
  const [isAdd, setIsAdd] = useState(false)
  const [isAddFavorite, setisAddFavorite] = useState(!false)
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    setIsAdd(true)
    const item: ICartProps = {
      id,
      title,
      price,
      image
    }
    dispatch(addToCart(item))
    console.log("handleAddToCart")
  }

  const handleAddToFavorite = () => {
    setisAddFavorite(!isAddFavorite)
    const item: IFavorite = {
      id,
      title,
      price,
      image,
    }
    dispatch(addToFavorite(item))
    console.log("handleAddToCart")
  }

  useEffect(() => {
    setIsAdd(false)
    console.log('111');
  }, [toggleCart])

  return (
    <div className="shadow-1xl shadow-black/50 border-[1px] ease hover:-translate-[5px] relative flex w-[220px]  sm:w-[170px] rounded-3xl border-black/5 bg-white p-3 duration-200 hover:shadow-lg max-sm:w-[250px]">
      <div onClick={handleAddToFavorite} className="absolute left-5 top-5 cursor-pointer">
        {isAddFavorite ? <img src={disFavorite} alt="disFavorite" /> : <img src={isFavorite} alt="isFavorite" />}
      </div>
      <div>
        <div className="mb-[12px] sm:mt-0 mt-5 flex items-center justify-center">
          <img src={image} alt={title} />
        </div>
        <h2 className="text-[14px] font-medium">{title}</h2>
        <div className="text-4 flex items-end justify-between">
          <span>
            <p className="mt-2 text-[10px] font-semibold uppercase text-black/50">Цена:</p>
            <p className="text-bold text-[12px]">{price} руб</p>
          </span>
          <div onClick={handleAddToCart} className="cursor-pointer">
            {isAdd ? <img src={add} alt="add" /> : <img src={Plus} alt="plus" />}
          </div>
        </div>
      </div>
    </div>
  )
}

export { Product }
