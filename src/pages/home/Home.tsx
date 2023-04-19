import React, { FC } from "react"

import { Search } from "../../components/Index"
import { Slider } from "../../components/slider/Slider"
import { Product } from "../../components/product/Product"
import { Data } from './../../components/Data';


const Home: FC = () => {
  return (
    <>
      <Slider navigation={true} />
      <div className="flex items-center justify-between">
        <h1 className="my-8 text-[32px] font-bold">Все кроссовки</h1>
        <Search />
      </div>
      <ul className="flex justify-between gap-2 rounded-xl pb-40 md:column">
        {Data.map((items) => (
          <Product key={items.id} {...items} />
        ))}
      </ul>
    </>
  )
}

export default Home
/* Rectangle 19 */

// box-sizing: border-box;

// position: absolute;
// width: 210px;
// height: 260px;
// left: 135px;
// top: 666px;

// background: #FFFFFF;
// border: 1px solid #F3F3F3;
// border-radius: 40px;
