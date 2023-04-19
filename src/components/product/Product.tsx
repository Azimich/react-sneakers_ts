import React, { FC } from "react"
import PlusActive from '../../assets/Plus.svg'
import Plus from '../../assets/disPlus.svg'
import isFavorite from "../../assets/isFavorite.svg"
import disFavorite from "../../assets/disFavorite.svg"


interface IProduct {
  id: number
  title: string
  image: string;
  price: number;
}

const Product: FC<IProduct> = ({ image, title, price }) => {
  return (
    <div className="border-1 ease hover:-translate-[5px] relative flex w-[220px] rounded-3xl border-black/10 bg-white p-3 shadow duration-200 hover:shadow-lg">
      <div className="absolute left-5 top-5">
        <img src={disFavorite} alt="disFavorite" />
      </div>
      <div className="">
        <div className="mb-[12px] mt-5 flex items-center justify-center">
          <img src={image} alt={title} />
        </div>
        <h2 className="text-[14px] font-medium">{title}</h2>
        <div className="text-4 flex items-end justify-between">
          <span>
            <p className="mt-2 text-[10px] font-semibold uppercase text-black/50">Цена:</p>
            <p className="text-bold text-[12px]">{price} руб</p>
          </span>
          <img src={Plus} alt="plus" />
        </div>
      </div>
    </div>
  )
}

export { Product }
