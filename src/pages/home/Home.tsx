import React, { FC } from "react"

import { Search } from "../../components/Index"
import { Slider } from "../../components/slider/Slider"
import { Product } from "../../components/product/Product"
import { Data } from './../../components/Data';

interface IHome {
  toggleCart: boolean;
}

const Home: FC<IHome> = ({ toggleCart }) => {
  return (
    <div className="">
      <Slider navigation={true} Autoplay={true}  />
      <div className="flex items-center justify-between md:mb-10 md:flex-col md:items-start md:justify-start md:gap-4">
        <h1 className="my-8 text-[32px] font-bold md:mb-0 md:mt-8 md:text-[28px]">Все кроссовки</h1>
        <Search />
      </div>
      <ul className="max-sm:flex-wrap max-sm:justify-center max-sm:gap-5 grid grid-cols-4 grid-rows-4 gap-4 sm:gap-4 rounded-xl pb-40 md:grid-cols-3 sm:grid-cols-2 sm:flex-wrap sm:justify-center">
        {Data.map((items) => (
          <Product key={items.id} {...items} toggleCart={toggleCart} />
        ))}
      </ul>
    </div>
  )
}

export default Home
