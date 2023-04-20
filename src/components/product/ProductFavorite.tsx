import React, { FC, useEffect, useState } from "react"
import { useDispatch } from "react-redux"

import Plus from "../../assets/disPlus.svg"
import isFavorite from "../../assets/isFavorite.svg"
import add from "../../assets/add.svg"
import { ICartProps, addToCart } from "../../store/cartSlice"
import { removeFavorite } from "../../store/favoriteSlice"

interface IProduct {
  id: number
  title: string
  image: string
  price: number
  toggleCart?: boolean
}

const ProductFavorite: FC<IProduct> = (props) => {
  const [isAdd, setIsAdd] = useState(false)
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    setIsAdd(true)
    const item: ICartProps = {
      id: props.id,
      title: props.title,
      price: props.price,
      image: props.image,
    }
    dispatch(addToCart(item))
    console.log("handleAddToCart")
  }

  const handleRemove = () => {
    dispatch(
      removeFavorite({
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
      })
    )
  }

  useEffect(() => {
    setIsAdd(false)
    console.log("111")
  }, [props.toggleCart])

  return (
    <div className="shadow-1xl ease hover:-translate-[5px] max-sm:w-[250px] relative flex w-[220px] rounded-3xl  border-[1px] border-black/5 bg-white p-3 shadow-black/50 duration-200 hover:shadow-lg sm:w-[170px]">
      <div onClick={handleRemove} className="absolute left-5 top-5 cursor-pointer">
        <img src={isFavorite} alt="isFavorite" />
      </div>
      <div className="">
        <div className="mb-[12px] mt-5 flex items-center justify-center">
          <img src={props.image} alt={props.title} />
        </div>
        <h2 className="text-[14px] font-medium">{props.title}</h2>
        <div className="text-4 flex items-end justify-between">
          <span>
            <p className="mt-2 text-[10px] font-semibold uppercase text-black/50">Цена:</p>
            <p className="text-bold text-[12px]">{props.price} руб</p>
          </span>
          <div onClick={handleAddToCart} className="cursor-pointer">
            {isAdd ? <img src={add} alt="add" /> : <img src={Plus} alt="plus" />}
          </div>
        </div>
      </div>
    </div>
  )
}

export { ProductFavorite }
