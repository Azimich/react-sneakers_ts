import React, { FC, useState } from "react"

import { Slider } from "../../components/slider/Slider"
import { Product } from "../../components/product/Product"
import { Data } from './../../components/Data';
import SearchIcon from "../../assets/search.svg"
import CloseIcon from "../../assets/close.svg"

interface IHome {
  toggleCart: boolean;
}

const Home: FC<IHome> = ({ toggleCart }) => {
  const [searchValue, setSearchValue] = useState('')

  const onChangeSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
  }

  const renderItems = () => {
    const searchItems = Data.filter((items) => items.title.toLowerCase().includes(searchValue.toLowerCase()));
    return searchItems.map((item) => (
      <Product key={item.id} {...item} toggleCart={toggleCart} />
    ))
  }

  return (
    <div>
      <Slider navigation={true} Autoplay={true} />
      <div className="flex items-center justify-between md:mb-10 md:flex-col md:items-start md:justify-start md:gap-4">
        <h1 className="my-8 text-[32px] font-bold md:mb-0 md:mt-8 md:text-[28px]">Все кроссовки</h1>
        <div className="w-50 relative flex sm:w-[100%]">
          <img src={SearchIcon} alt="search" className="absolute left-[3%] top-[30%] h-[18px] w-[18px]" />
          <input
            type="text"
            value={searchValue}
            onChange={onChangeSearchInput}
            placeholder="Поиск..."
            className="focus:border-red radius-[8px] ease placeholder:text-black/7 w-full
          rounded-lg border-[1px] px-8 py-[8px] text-black/40 outline-none duration-150
          focus:border-black/5 focus:text-black/40 focus:outline-none focus:ring-[1px]
        "
          />
          {searchValue && (
            <img
              onClick={() => setSearchValue("")}
              src={CloseIcon}
              alt="close"
              className="absolute right-[3%] top-[30%] h-[20px] w-[20px] cursor-pointer"
            />
          )}
        </div>
      </div>
      <ul className="max-sm:flex-wrap max-sm:justify-center max-sm:gap-5 grid grid-cols-4 gap-4 rounded-xl pb-[40px] md:grid-cols-3 sm:grid-cols-2 sm:flex-wrap sm:justify-center sm:gap-4">
        {renderItems()}
      </ul>
      {/* {searchValue ? (
        <ul className="max-sm:flex-wrap max-sm:justify-center max-sm:gap-5 grid grid-cols-4 grid-rows-4 gap-4 rounded-xl pb-40 md:grid-cols-3 sm:grid-cols-2 sm:flex-wrap sm:justify-center sm:gap-4">
          {renderItems()}
        </ul>
      ) : (
        <div>erefefef</div>
      )} */}
    </div>
  )
}

export default Home
