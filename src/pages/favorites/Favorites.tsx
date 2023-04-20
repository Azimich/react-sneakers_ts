import React, { FC } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

import { selectFavorite } from "../../store/favoriteSlice"
import { ProductFavorite } from "../../components/product/ProductFavorite"
import { Button } from "../../components/Index"
import arrow from "../../assets/arrow.svg"
import cat from "../../assets/kot.png"
import btnArrow from "../../assets/BtnArrow.svg"

const Favorites: FC = () => {
  const { favoriteItems } = useSelector(selectFavorite)
  return (
    <>
      <div className="flex items-center gap-3">
        <Link
          to={"/"}
          className="ease flex h-8 w-8 rotate-180 cursor-pointer items-center justify-center rounded-[8px] border-[1px] border-black/30 opacity-50 duration-100 hover:opacity-100"
        >
          <img src={arrow} alt="close" className="h-4 w-4" />
        </Link>
        <h1 className="my-8 text-[32px] font-bold md:text-[28px]">Избранные</h1>
      </div>
      {favoriteItems.length > 0 ? (
        <ul className="max-sm:flex-wrap max-sm:justify-center max-sm:gap-5 grid grid-cols-4 grid-rows-4 gap-4 rounded-xl pb-40 md:grid-cols-3 sm:grid-cols-2 sm:flex-wrap sm:justify-center sm:gap-4">
          {favoriteItems.map((items, i) => (
            <ProductFavorite key={i} {...items} />
          ))}
        </ul>
      ) : (
        <div className="flex flex-col justify-center pb-40">
          <img src={cat} alt="cat" className="m-auto h-auto w-[150px] md:mb-3" />
          <h3 className="text-center text-[30px] font-medium text-black md:mb-0 md:text-[25px]">Закладок нет :{"("}</h3>
          <h5 className="mt-1 text-center text-[20px] text-black/50 md:mt-0 md:text-[22px]">
            Вы ничего не добавляли в закладки
          </h5>
          <Link to={"/"}>
            <Button className="m-auto mt-6 gap-2">
              <img src={btnArrow} alt="btnArrow" className="rotate-180" />
              Вернутся на главный
            </Button>
          </Link>
        </div>
      )}
    </>
  )
}

export default Favorites
